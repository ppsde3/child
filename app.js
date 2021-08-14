const express = require('express');

const app = express();
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cors = require('cors');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const listingRouter = require('./routes/listingRouter');
const userRouter = require('./routes/userRouter');

app.enable('trust proxy');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); 
}
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors);

const limiter = rateLimit({
  max: 1500,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this IP, please try again in an hour',
});
app.use('/api', limiter);

app.use(mongoSanitize()); 
app.use(xss());
app.use(
  hpp({
    whitelist: ['rent'],
  })
); 
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/listings', listingRouter);
app.use('/api/users', userRouter);


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.all('*', (req, res, next) => {
  next(new AppError(`${req.originalUrl} doesn't exist on this server!❌`), 404);
});

app.use(globalErrorHandler);

module.exports = app;

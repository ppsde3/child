const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
  state_Name: {
    type: String,
    required: [true, 'Please provide distrct name'],
    trim: true,
  },
  state_Id: {
    type: Number,
    required: true,
    unique: true,
  },
});

stateSchema.set('toObject', { virtuals: true });
stateSchema.set('toJSON', { virtuals: true });

const State = mongoose.model('State', stateSchema);
module.exports = State;

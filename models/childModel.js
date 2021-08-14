const mongoose = require('mongoose');

const childSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide distrct name'],
    trim: true,
  },
  sex: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: [true, 'Please provide dob'],
    trim: true,
  },
  father_name: {
    type: String,
    required: [true, 'Please provide father name'],
  },
  mother_name: {
    type: String,
    required: [true, 'Please Provide mother name'],
  },
  district_id: {
    type: Number,
    required: [true, 'Please provide distrct id'],
    unique: true,
  },
});

const Childs = mongoose.model('Childs', childSchema);

module.exports = Childs;

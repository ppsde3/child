const mongoose = require('mongoose');

const districtSchema = new mongoose.Schema({
  district_name: {
    type: String,
    required: [true, 'Please provide distrct name'],
    trim: true,
  },
  state_id: {
    type: Number,
    required: true,
    unique: true,
  }
});

districtSchema.set('toObject', { virtuals: true });
districtSchema.set('toJSON', { virtuals: true });

const District = mongoose.model('District', districtSchema);

module.exports = District;

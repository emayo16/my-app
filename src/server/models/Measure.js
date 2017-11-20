const mongoose = require('mongoose');

const MeasureSchema = new mongoose.Schema({
  uri: {
    type: String,
    required: false
  },
  label: {
    type: String,
    required: false
  }
});

let Measure = mongoose.model('Measure', MeasureSchema);

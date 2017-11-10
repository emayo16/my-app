var mongoose = require('mongoose');

var MeasureSchema = new mongoose.Schema({
  uri: String,
  label: String
});

let Measure = mongoose.model('Measure', MeasureSchema);

var mongoose = require('mongoose');

var NutrientInfoSchema = new mongoose.Schema({
  uri: String,
  label: String,
  quantity: Number,
  unit: String
});

let NutrientInfo = mongoose.model('NutrientInfo', NutrientInfoSchema);

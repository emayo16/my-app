const mongoose = require('mongoose');

const NutrientInfoSchema = new mongoose.Schema({
  uri: {
    type: String,
    required: false
  },
  label: {
    type: String,
    required: false
  },
  quantity: {
    type: Number,
    required: false
  },
  unit: {
    type: String,
    required: false
  }
});

let NutrientInfo = mongoose.model('NutrientInfo', NutrientInfoSchema);

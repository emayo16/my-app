const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  uri: {
    type: String,
    required: false
  },
  label: {
    type: String,
    required: false
  }
});

let Food = mongoose.model('Food', FoodSchema);

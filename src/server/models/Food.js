var mongoose = require('mongoose');

var FoodSchema = new mongoose.Schema({
  uri: String,
  label: String
});

let Food = mongoose.model('Food', FoodSchema);

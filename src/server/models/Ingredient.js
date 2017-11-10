var mongoose = require('mongoose');
var FoodSchema = require('./Food');
var MeasureSchema = require('./Measure');

var IngredientSchema = new mongoose.Schema({
  uri: String,
  quantity: Number,
  measure: MeasureSchema,
  weight: Number,
  food: FoodSchema
});

let Ingredient = mongoose.model('Ingredient', IngredientSchema);

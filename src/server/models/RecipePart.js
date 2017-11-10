var mongoose = require('mongoose');
var NutrientInfoSchema = require('./NutrientInfo');
var IngredientSchema = require('./Ingredient');

var RecipePartSchema = new mongoose.Schema({
  uri: String,
  label: String,
  images: [String],
  source: String,
  url: String,
  yield: Number,
  calories: Number,
  totalWeight: Number,
  ingredients: [IngredientSchema],
  totalNutrients: [NutrientInfoSchema],
  totalDaily: [NutrientInfoSchema],
  dietLabels: [String],
  healthLabels: [String]
});

let RecipePart  = mongoose.model('RecipePart', RecipePartSchema);

var mongoose = require('mongoose');
var NutrientInfoSchema = require('./NutrientInfo');
var IngredientSchema = require('./Ingredient');
var RecipePartSchema = require('./RecipePart');

var RecipeSchema = new mongoose.Schema({
  uri: String,
  label: String,
  images: [String],
  source: String,
  url: String,
  yield: Number,
  calories: Number,
  totalWeight: Number,
  recipeParts: [RecipePartSchema],
  ingredients: [IngredientSchema],
  totalNutrients: [NutrientInfoSchema],
  totalDaily: [NutrientInfoSchema],
  dietLabels: [String],
  healthLabels: [String]
});

let Recipe = mongoose.model('Recipe', RecipeSchema);

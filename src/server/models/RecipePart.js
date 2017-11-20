const mongoose = require('mongoose');
const NutrientInfoSchema = require('./NutrientInfo');
const IngredientSchema = require('./Ingredient');
const DigestSchema = require('./Digest');

const RecipePartSchema = new mongoose.Schema({
  uri: {
    type: String,
    required: false
  },
  label: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  source: {
    type: String,
    required: false
  },
  url: {
    type: String,
    required: false
  },
  yield: {
    type: Number,
    required: false
  },
  shareAs: {
    type: String,
    required: false
  },
  calories: {
    type: Number,
    required: false
  },
  totalWeight: {
    type: Number,
    required: false
  },
  ingredientLines: {
    type: [String],
    required: false
  },
  ingredients: {
    type: [IngredientSchema],
    required: false
  },
  cautions: {
    type: [String],
    required: false
  },
  totalNutrients: {
    type: [NutrientInfoSchema],
    required: false
  },
  totalDaily: {
    type: [NutrientInfoSchema],
    required: false
  },
  dietLabels: {
    type: [String],
    required: false
  },
  healthLabels:{
    type: [String],
    required: false
  },
  digest: {
    type: [DigestSchema],
    required: false
  }
});

let RecipePart  = mongoose.model('RecipePart', RecipePartSchema);

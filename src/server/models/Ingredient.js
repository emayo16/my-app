const mongoose = require('mongoose');
const FoodSchema = require('./Food');
const MeasureSchema = require('./Measure');

const IngredientSchema = new mongoose.Schema({
  uri: {
    type: String,
    required: false
  },
  text: {
    type: String,
    required: false
  },
  quantity: {
    type: Number,
    required: false
  },
  measure: {
    type: MeasureSchema,
    required: false
  },
  weight: {
    type: Number,
    required: false
  },
  food: {
    type: FoodSchema,
    required: false
  }
});

let Ingredient = mongoose.model('Ingredient', IngredientSchema);

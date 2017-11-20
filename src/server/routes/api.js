const express = require('express');
const restify = require('express-restify-mongoose');
const router = express.Router();
var mongoose = require('mongoose');
var recipeModel = require('../models/Recipe');
var url = 'mongodb://localhost:27017/mean';
mongoose.connect(url);
var dbMongoose = mongoose.connection;
var NutrientInfo = dbMongoose.model('NutrientInfo');
var Food = dbMongoose.model('Food');
var Measure = dbMongoose.model('Measure');
var Ingredient = dbMongoose.model('Ingredient');
var RecipePart = dbMongoose.model('RecipePart');
var Recipe = dbMongoose.model('Recipe');


// Connect
const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017/mean', (err, db) => {
    if (err) return console.log(err);

    closure(db);
  });
};

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

// Get users
router.get('/users', (req, res) => {
  connection((db) => {
    db.collection('users')
      .find()
      .toArray()
      .then((users) => {
        response.data = users;
        res.json(response);
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});

const options = {
  prefix: '',
  version: ''
};

restify.defaults(options);
// Recipe Search API
// curl "https://api.edamam.com/search?q=chicken&app_id=27b0da8d&app_key=09b9d08d1f2f49cacebd82786614c2d8&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free"
//Nutrition Analysis API
// curl -d @food.json -H "Content-Type: application/json" "https://api.edamam.com/api/food-database/nutrients?app_id=d0bc8015&app_key=16e8c4dbcbbffc67603259f5d393a7d1"

// Endpoints generated:

//   GET http://localhost/api/Food/count
//   GET http://localhost/api/Food
//   POST http://localhost/api/Food
//   DELETE http://localhost/api/Food
//
//   GET http://localhost/api/Food/:id
//   GET http://localhost/api/Food/:id/shallow
//   PUT http://localhost/api/Food/:id
//   POST http://localhost/api/Food/:id
//   PATCH http://localhost/api/Food/:id
//   DELETE http://localhost/api/Food/:id

restify.serve(router, Food);

// Endpoints generated:

//   GET http://localhost/api/Measure/count
//   GET http://localhost/api/Measure
//   POST http://localhost/api/Measure
//   DELETE http://localhost/api/Measure
//
//   GET http://localhost/api/Measure/:id
//   GET http://localhost/api/Measure/:id/shallow
//   PUT http://localhost/api/Measure/:id
//   POST http://localhost/api/Measure/:id
//   PATCH http://localhost/api/Measure/:id
//   DELETE http://localhost/api/Measure/:id

restify.serve(router, Measure);

// Endpoints generated:

//   GET http://localhost/api/NutrientInfo/count
//   GET http://localhost/api/NutrientInfo
//   POST http://localhost/api/NutrientInfo
//   DELETE http://localhost/api/NutrientInfo
//
//   GET http://localhost/api/NutrientInfo/:id
//   GET http://localhost/api/NutrientInfo/:id/shallow
//   PUT http://localhost/api/NutrientInfo/:id
//   POST http://localhost/api/NutrientInfo/:id
//   PATCH http://localhost/api/NutrientInfo/:id
//   DELETE http://localhost/api/NutrientInfo/:id

restify.serve(router, NutrientInfo);

// Endpoints generated:

//   GET http://localhost/api/Ingredient/count
//   GET http://localhost/api/Ingredient
//   POST http://localhost/api/Ingredient
//   DELETE http://localhost/api/Ingredient
//
//   GET http://localhost/api/Ingredient/:id
//   GET http://localhost/api/Ingredient/:id/shallow
//   PUT http://localhost/api/Ingredient/:id
//   POST http://localhost/api/Ingredient/:id
//   PATCH http://localhost/api/Ingredient/:id
//   DELETE http://localhost/api/Ingredient/:id

restify.serve(router, Ingredient);

// Endpoints generated:

//   GET http://localhost/api/RecipePart/count
//   GET http://localhost/api/RecipePart
//   POST http://localhost/api/RecipePart
//   DELETE http://localhost/api/RecipePart
//
//   GET http://localhost/api/RecipePart/:id
//   GET http://localhost/api/RecipePart/:id/shallow
//   PUT http://localhost/api/RecipePart/:id
//   POST http://localhost/api/RecipePart/:id
//   PATCH http://localhost/api/RecipePart/:id
//   DELETE http://localhost/api/RecipePart/:id

restify.serve(router, RecipePart);

// Endpoints generated:

//   GET http://localhost/api/Recipe/count
//   GET http://localhost/api/Recipe
//   POST http://localhost/api/Recipe
//   DELETE http://localhost/api/Recipe
//
//   GET http://localhost/api/Recipe/:id
//   GET http://localhost/api/Recipe/:id/shallow
//   PUT http://localhost/api/Recipe/:id
//   POST http://localhost/api/Recipe/:id
//   PATCH http://localhost/api/Recipe/:id
//   DELETE http://localhost/api/Recipe/:id

restify.serve(router, Recipe);

module.exports = router;

var mongoose = require('mongoose');
var recipeModel = require('./models/Recipe');
var url = 'mongodb://localhost:27017/mean';
mongoose.connect(url);
var db = mongoose.connection;
var NutrientInfo = db.model('NutrientInfo');
var Food = db.model('Food');
var Measure = db.model('Measure');
var Ingredient = db.model('Ingredient');
var RecipePart = db.model('RecipePart');
var Recipe = db.model('Recipe');

var insertRecipe = function(callback) {
  // Create nutrient infos
  var energyNutrient = new NutrientInfo({
    uri: '/nutrientInfo',
    label: 'Energy',
    quantity: 100,
    unit: 'kcal'
  });
  var energyNutrientDaily = new NutrientInfo({
    uri: '/nutrientInfo',
    label: 'Energy Daily',
    quantity: 2000,
    unit: 'kcal'
  });

  // Save NutrientInfo to DB
  energyNutrient.save(function (err, nutrientInfo) {
    if (err) return console.error(err);
  });
  energyNutrientDaily.save(function (err, nutrientInfo) {
    if (err) return console.error(err);
  });

  // Create foods for recipe
  var sugar = new Food({
    uri: '/food',
    label: 'sugar'
  });
  var flour = new Food({
    uri: '/food',
    label: 'flour'
  });
  var mcIntoshApple = new Food({
    uri: '/food',
    label: 'McIntosh Apple'
  });
  var cinnamon = new Food({
    uri: '/food',
    label: 'cinnamon'
  });
  var nutmeg = new Food({
    uri: '/food',
    label: 'nutmeg'
  });
  var salt = new Food({
    uri: '/food',
    label: 'salt'
  });
  var lemonJuice = new Food({
    uri: '/food',
    label: 'lemon juice'
  });
  var unsaltedButter = new Food({
    uri: '/food',
    label: 'unsalted butter'
  });
  var milk = new Food({
    uri: '/food',
    label: 'milk'
  });
  var vegetableShortening = new Food({
    uri: '/food',
    label: 'vegetable shortening'
  });
  var iceWater = new Food({
    uri: '/food',
    label: 'ice water'
  });

  // Save Food to DB
  sugar.save(function (err, food) {
    if (err) return console.error(err);
  });
  flour.save(function (err, food) {
    if (err) return console.error(err);
  });
  mcIntoshApple.save(function (err, food) {
    if (err) return console.error(err);
  });
  cinnamon.save(function (err, food) {
    if (err) return console.error(err);
  });
  nutmeg.save(function (err, food) {
    if (err) return console.error(err);
  });
  salt.save(function (err, food) {
    if (err) return console.error(err);
  });
  lemonJuice.save(function (err, food) {
    if (err) return console.error(err);
  });
  unsaltedButter.save(function (err, food) {
    if (err) return console.error(err);
  });
  milk.save(function (err, food) {
    if (err) return console.error(err);
  });
  vegetableShortening.save(function (err, food) {
    if (err) return console.error(err);
  });
  iceWater.save(function (err, food) {
    if (err) return console.error(err);
  });

  // Create recipe measures
  var tspMeasure = new Measure({
    uri: '/measure',
    label: 'teaspoon'
  });
  var tbspMeasure = new Measure({
    uri: '/measure',
    label: 'tablespoon'
  });
  var cupMeasure = new Measure({
    uri: '/measure',
    label: 'cup'
  });
  var lbMeasure = new Measure({
    uri: '/measure',
    label: 'pound'
  });

  // Save measure to DB
  tspMeasure.save(function (err, measure) {
    if (err) return console.error(err);
  });
  tbspMeasure.save(function (err, measure) {
    if (err) return console.error(err);
  });
  cupMeasure.save(function (err, measure) {
    if (err) return console.error(err);
  });
  lbMeasure.save(function (err, measure) {
    if (err) return console.error(err);
  });

  // Create recipe ingredients
  var ingredient1 = new Ingredient({
    uri: '/ingredient',
    quantity: 3,
    measure: lbMeasure,
    weight: 200,
    food: mcIntoshApple
  });
  var ingredient2 = new Ingredient({
    uri: '/ingredient',
    quantity: .75,
    measure: cupMeasure,
    weight: 50,
    food: sugar
  });
  var ingredient3 = new Ingredient({
    uri: '/ingredient',
    quantity: 2,
    measure: tbspMeasure,
    weight: 30,
    food: flour
  });
  var ingredient4 = new Ingredient({
    uri: '/ingredient',
    quantity: 1,
    measure: tspMeasure,
    weight: 5,
    food: cinnamon
  });
  var ingredient5 = new Ingredient({
    uri: '/ingredient',
    quantity: .25,
    measure: tspMeasure,
    weight: 2,
    food: nutmeg
  });
  var ingredient6 = new Ingredient({
    uri: '/ingredient',
    quantity: .25,
    measure: tspMeasure,
    weight: 2,
    food: salt
  });
  var ingredient7 = new Ingredient({
    uri: '/ingredient',
    quantity: 1,
    measure: tbspMeasure,
    weight: 20,
    food: lemonJuice
  });
  var ingredient8 = new Ingredient({
    uri: '/ingredient',
    quantity: 2,
    measure: tbspMeasure,
    weight: 50,
    food: unsaltedButter
  });
  var ingredient9 = new Ingredient({
    uri: '/ingredient',
    quantity: .25,
    measure: cupMeasure,
    weight: 35,
    food: milk
  });
  var ingredient10 = new Ingredient({
    uri: '/ingredient',
    quantity: 1.25,
    measure: cupMeasure,
    weight: 200,
    food: flour
  });
  var ingredient11 = new Ingredient({
    uri: '/ingredient',
    quantity: 6,
    measure: tbspMeasure,
    weight: 244,
    food: unsaltedButter
  });
  var ingredient12 = new Ingredient({
    uri: '/ingredient',
    quantity: 2,
    measure: tbspMeasure,
    weight: 80,
    food: vegetableShortening
  });
  var ingredient13 = new Ingredient({
    uri: '/ingredient',
    quantity: .25,
    measure: tspMeasure,
    weight: 2,
    food: salt
  });
  var ingredient14 = new Ingredient({
    uri: '/ingredient',
    quantity: 2,
    measure: tbspMeasure,
    weight: 60,
    food: iceWater
  });

  // Save ingredients to DB
  ingredient1.save(function (err, ingredient) {
    if (err) return console.error(err);
  });
  ingredient2.save(function (err, ingredient) {
    if (err) return console.error(err);
  });
  ingredient3.save(function (err, ingredient) {
    if (err) return console.error(err);
  });
  ingredient4.save(function (err, ingredient) {
    if (err) return console.error(err);
  });
  ingredient5.save(function (err, ingredient) {
    if (err) return console.error(err);
  });
  ingredient6.save(function (err, ingredient) {
    if (err) return console.error(err);
  });
  ingredient7.save(function (err, ingredient) {
    if (err) return console.error(err);
  });
  ingredient8.save(function (err, ingredient) {
    if (err) return console.error(err);
  });
  ingredient9.save(function (err, ingredient) {
    if (err) return console.error(err);
  });
  ingredient10.save(function (err, ingredient) {
    if (err) return console.error(err);
  });
  ingredient11.save(function (err, ingredient) {
    if (err) return console.error(err);
  });
  ingredient12.save(function (err, ingredient) {
    if (err) return console.error(err);
  });
  ingredient13.save(function (err, ingredient) {
    if (err) return console.error(err);
  });
  ingredient14.save(function (err, ingredient) {
    if (err) return console.error(err);
  });

  // Two-part recipe
  var recipePart1 = new RecipePart({
    uri: '/recipe',
    label: 'Apple Pie',
    images: ['https://assets.epicurious.com/photos/583f2ecab80c02a24264c1c1/master/pass/apple-pie.jpg'],
    source: 'Epicurious',
    url: 'https://www.epicurious.com/recipes/food/views/apple-pie-11725',
    ingredients: [ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9],
    totalNutrients: [energyNutrient],
    totalDaily: [energyNutrientDaily],
    dietLabels: ['dessert'],
    healthLabels: ['fruit', 'vegetarian']
  });
  var recipePart2 = new RecipePart({
    uri: '/recipe',
    label: 'Apple Pie',
    images: ['https://assets.epicurious.com/photos/583f2ecab80c02a24264c1c1/master/pass/apple-pie.jpg'],
    source: 'Epicurious',
    url: 'https://www.epicurious.com/recipes/food/views/apple-pie-11725',
    ingredients: [ingredient10, ingredient11, ingredient12, ingredient12, ingredient13, ingredient14],
    totalNutrients: [energyNutrient],
    totalDaily: [energyNutrientDaily],
    dietLabels: ['dessert'],
    healthLabels: ['fruit', 'vegetarian']
  });

  // Save recipe parts to db
  recipePart1.save(function (err, recipePart) {
    if (err) return console.error(err);
  });

  recipePart2.save(function (err, recipePart) {
    if (err) return console.error(err);
  });

  var recipeIngredients = [];
  recipeIngredients = recipeIngredients.concat(recipePart1.ingredients);
  recipeIngredients = recipeIngredients.concat(recipePart2.ingredients);
  var recipeTotalNutrients = [];
  recipeTotalNutrients = recipeTotalNutrients.concat(recipePart1.totalNutrients);
  recipeTotalNutrients = recipeTotalNutrients.concat(recipePart2.totalNutrients);
  var recipeTotalDaily = [];
  recipeTotalDaily = recipeTotalDaily.concat(recipePart1.totalDaily);
  recipeTotalDaily = recipeTotalDaily.concat(recipePart2.totalDaily);

  // Create recipe
  var recipe = new Recipe({
    uri: '/recipe',
    label: 'Apple Pie',
    images: ['https://assets.epicurious.com/photos/583f2ecab80c02a24264c1c1/master/pass/apple-pie.jpg'],
    source: 'Epicurious',
    url: 'https://www.epicurious.com/recipes/food/views/apple-pie-11725',
    yield: 8,
    calories: 350,
    totalWeight: 1200,
    recipeParts: [recipePart1, recipePart2],
    ingredients: recipeIngredients,
    totalNutrients: recipeTotalNutrients,
    totalDaily: recipeTotalDaily,
    dietLabels: ['dessert'],
    healthLabels: ['fruit', 'vegetarian']
  });

  // Save recipe to db
  recipe.save(function (err, recipe) {
    if (err) {
      return console.error(err);
    } else{
      console.log("Successfully inserted recipe:\n" + recipe);
    }
  });
  if(callback) callback();
};

insertRecipe(function(){
  console.log("insertRecipe callback.");
});

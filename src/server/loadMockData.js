const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/mean';
mongoose.connect(url);
const db = mongoose.connection;
const https = require('https');
const path = require('path');
const fs = require('fs');
const uuidv4 = require('uuid/v4');
const NutrientInfoSchema = require('./models/NutrientInfo');
const NutrientInfo = db.model('NutrientInfo');
const FoodSchema = require('./models/Food');
const Food = db.model('Food');
const MeasureSchema = require('./models/Measure');
const Measure = db.model('Measure');
const IngredientSchema = require('./models/Ingredient');
const Ingredient = db.model('Ingredient');
const RecipePartSchema = require('./models/RecipePart');
const RecipePart = db.model('RecipePart');
const RecipeSchema = require('./models/Recipe');
const Recipe = db.model('Recipe');
const DigestSchema = require('./models/Digest');
const Digest = db.model('Digest');
const DigestSubSchema = require('./models/DigestSub');
const DigestSub = db.model('DigestSub');
const recipeSearchData = require('./recipeSearchData');

const insertMockRecipe = function(callback) {
  // Create nutrient infos
  const energyNutrient = new NutrientInfo({
    uri: '/nutrientInfo',
    label: 'Energy',
    quantity: 100,
    unit: 'kcal'
  });
  const energyNutrientDaily = new NutrientInfo({
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
  const sugar = new Food({
    uri: '/food',
    label: 'sugar'
  });
  const flour = new Food({
    uri: '/food',
    label: 'flour'
  });
  const mcIntoshApple = new Food({
    uri: '/food',
    label: 'McIntosh Apple'
  });
  const cinnamon = new Food({
    uri: '/food',
    label: 'cinnamon'
  });
  const nutmeg = new Food({
    uri: '/food',
    label: 'nutmeg'
  });
  const salt = new Food({
    uri: '/food',
    label: 'salt'
  });
  const lemonJuice = new Food({
    uri: '/food',
    label: 'lemon juice'
  });
  const unsaltedButter = new Food({
    uri: '/food',
    label: 'unsalted butter'
  });
  const milk = new Food({
    uri: '/food',
    label: 'milk'
  });
  const vegetableShortening = new Food({
    uri: '/food',
    label: 'vegetable shortening'
  });
  const iceWater = new Food({
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
  const tspMeasure = new Measure({
    uri: '/measure',
    label: 'teaspoon'
  });
  const tbspMeasure = new Measure({
    uri: '/measure',
    label: 'tablespoon'
  });
  const cupMeasure = new Measure({
    uri: '/measure',
    label: 'cup'
  });
  const lbMeasure = new Measure({
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
  const ingredient1 = new Ingredient({
    uri: '/ingredient',
    quantity: 3,
    measure: lbMeasure,
    weight: 200,
    food: mcIntoshApple
  });
  const ingredient2 = new Ingredient({
    uri: '/ingredient',
    quantity: .75,
    measure: cupMeasure,
    weight: 50,
    food: sugar
  });
  const ingredient3 = new Ingredient({
    uri: '/ingredient',
    quantity: 2,
    measure: tbspMeasure,
    weight: 30,
    food: flour
  });
  const ingredient4 = new Ingredient({
    uri: '/ingredient',
    quantity: 1,
    measure: tspMeasure,
    weight: 5,
    food: cinnamon
  });
  const ingredient5 = new Ingredient({
    uri: '/ingredient',
    quantity: .25,
    measure: tspMeasure,
    weight: 2,
    food: nutmeg
  });
  const ingredient6 = new Ingredient({
    uri: '/ingredient',
    quantity: .25,
    measure: tspMeasure,
    weight: 2,
    food: salt
  });
  const ingredient7 = new Ingredient({
    uri: '/ingredient',
    quantity: 1,
    measure: tbspMeasure,
    weight: 20,
    food: lemonJuice
  });
  const ingredient8 = new Ingredient({
    uri: '/ingredient',
    quantity: 2,
    measure: tbspMeasure,
    weight: 50,
    food: unsaltedButter
  });
  const ingredient9 = new Ingredient({
    uri: '/ingredient',
    quantity: .25,
    measure: cupMeasure,
    weight: 35,
    food: milk
  });
  const ingredient10 = new Ingredient({
    uri: '/ingredient',
    quantity: 1.25,
    measure: cupMeasure,
    weight: 200,
    food: flour
  });
  const ingredient11 = new Ingredient({
    uri: '/ingredient',
    quantity: 6,
    measure: tbspMeasure,
    weight: 244,
    food: unsaltedButter
  });
  const ingredient12 = new Ingredient({
    uri: '/ingredient',
    quantity: 2,
    measure: tbspMeasure,
    weight: 80,
    food: vegetableShortening
  });
  const ingredient13 = new Ingredient({
    uri: '/ingredient',
    quantity: .25,
    measure: tspMeasure,
    weight: 2,
    food: salt
  });
  const ingredient14 = new Ingredient({
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
  const recipePart1 = new RecipePart({
    uri: '/recipe',
    label: 'Apple Pie',
    image: 'https://assets.epicurious.com/photos/583f2ecab80c02a24264c1c1/master/pass/apple-pie.jpg',
    source: 'Epicurious',
    url: 'https://www.epicurious.com/recipes/food/views/apple-pie-11725',
    ingredients: [ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9],
    totalNutrients: [energyNutrient],
    totalDaily: [energyNutrientDaily],
    dietLabels: ['dessert'],
    healthLabels: ['fruit', 'vegetarian']
  });
  const recipePart2 = new RecipePart({
    uri: '/recipe',
    label: 'Apple Pie',
    image: 'https://assets.epicurious.com/photos/583f2ecab80c02a24264c1c1/master/pass/apple-pie.jpg',
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

  let recipeIngredients = [];
  recipeIngredients = recipeIngredients.concat(recipePart1.ingredients);
  recipeIngredients = recipeIngredients.concat(recipePart2.ingredients);
  let recipeTotalNutrients = [];
  recipeTotalNutrients = recipeTotalNutrients.concat(recipePart1.totalNutrients);
  recipeTotalNutrients = recipeTotalNutrients.concat(recipePart2.totalNutrients);
  let recipeTotalDaily = [];
  recipeTotalDaily = recipeTotalDaily.concat(recipePart1.totalDaily);
  recipeTotalDaily = recipeTotalDaily.concat(recipePart2.totalDaily);

  // Create recipe
  const recipe = new Recipe({
    uri: '/recipe',
    label: 'Apple Pie',
    image: 'https://assets.epicurious.com/photos/583f2ecab80c02a24264c1c1/master/pass/apple-pie.jpg',
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

function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

const writeToJSONFile = function(body) {
  // generate unique id
  const fileId = uuidv4();
  const resultsDir = 'apiCallResults';
  // Create results dir if not exist
  ensureDirectoryExistence(resultsDir);
  // compose outfile path/name
  const outFile = `${resultsDir}/response-${fileId}.json`;
  // write to a new file named response${fileId}.log
  fs.writeFile(outFile, body, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;
    // success case, the file was saved
    console.log(`response${fileId} saved!`);
  });
};

const getQueryResults = function(){
  const apiCallString = `https://api.edamam.com/search?q=chicken&from=11962&to=13000&params=app_id=27b0da8d&app_key=09b9d08d1f2f49cacebd82786614c2d8`;
  let body = [];
  let responseStr = ``;
  https.get(apiCallString, res => {
    res.on('error', (error) => {
      console.log('error:', error); // Print the error if one occurred and handle it
    });
    res.on('response', (response) => {
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      responseStr = JSON.stringify(response);
    });
    res.on('data', (chunk) => {
      body.push(chunk);
    });
    res.on('end', () => {
      body = Buffer.concat(body).toString().trim();
      // Try to parse JSON; if fail, catch error and flush data to file for later processing.
      try {
        const bodyJSON = JSON.parse(body);
        insertQueryResponse(bodyJSON);
        writeToJSONFile(body);
      } catch(error) {
        console.log(`Error message: ${error}\nError parsing body to JSON!\nFlushing body to file...`);
        writeToJSONFile(body);
      }
    });
  });
};

const insertQueryResponse = function(query) {
  //let query = recipeSearchData();
  let hits = query.hits;
  if (hits && hits.length > 0) {
    console.log(`# of Hits: ${hits.length}`);
    let count = 0;
    for (let i = 0; i < hits.length; i++) {
      let recipe = hits[i].recipe;
      console.log(recipe);
      if (recipe) {
        insertRecipe(recipe);
        count += 1;
      }
    }
    console.log(`Inserted ${count} recipes.`);
  }
};

const insertRecipe = function(recipe, callback) {
  recipeResult = recipe;
  // let totalNutrients = [];
  // let totalDaily = [];
  // let ingredients = recipeResult.ingredients;
  // let totalNutrientsVal = recipeResult.totalNutrients;
  // let totalDailyVal = recipeResult.totalDaily;
  // let digest = recipeResult.digest;
  // if(ingredients){
  //   console.log(ingredients.length);
  //   for(let i = 0; i < ingredients.length; i++){
  //     let ingredient = ingredients[i];
  //     console.log(ingredient);
  //     if(ingredient.measure) {
  //       let measure = new Measure(ingredient.measure);
  //       console.log(measure);
  //       measure.save(function(err, result){
  //         if (err) console.log(err);
  //         console.log(`Measure '${result}' inserted.`);
  //       });
  //       ingredient.measure = measure;
  //     } else {
  //       console.log(`!ingredient.measure`);
  //     }
  //     if(ingredient.food) {
  //       let food = new Food(ingredient.food);
  //       food.save(function(err, result) {
  //         if (err) console.log(err);
  //         console.log(`Food '${result}' inserted.`);
  //       });
  //       ingredient.food = food;
  //     } else {
  //       console.log(`!ingredient.food`);
  //     }
  //     ingredient = new Ingredient(ingredient);
  //     console.log(`Ingredient mongoose model:\n${ingredient}`);
  //     ingredient.save(function(err, result){
  //       if (err) console.log(err);
  //       console.log(`Ingredient '${result} inserted.`);
  //     });
  //     ingredients[i] = ingredient;
  //   }
  //   console.log(`Ingredients:\n${ingredients}`);
  // }
  // if(totalNutrientsVal){
  //   let keys = Object.keys(totalNutrientsVal);
  //   console.log(keys.length);
  //   for(let i = 0; i < keys.length; i++){
  //     let nutrientInfo = new NutrientInfo(totalNutrientsVal[keys[i]]);
  //     console.log(nutrientInfo);
  //     nutrientInfo.save(function(err, result){
  //       if (err) console.log(err);
  //       console.log(`NutrientInfo '${result} inserted.`);
  //     });
  //     totalNutrients.push(nutrientInfo);
  //   }
  //   console.log(totalNutrients);
  // }
  // if(totalDailyVal){
  //   let keys = Object.keys(totalDailyVal);
  //   console.log(keys.length);
  //   for(let i = 0; i < keys.length; i++){
  //     let nutrientInfo = new NutrientInfo(totalDailyVal[keys[i]]);
  //     console.log(nutrientInfo);
  //     nutrientInfo.save(function(err, result){
  //       if (err) console.log(err);
  //       console.log(`NutrientInfo '${result} inserted.`);
  //     });
  //     totalDaily.push(nutrientInfo);
  //   }
  //   console.log(totalDaily);
  // }
  // if(digest) {
  //   console.log(digest.length);
  //   for (let i = 0; i < digest.length; i++) {
  //     let sub = digest[i].sub;
  //     console.log(sub);
  //     if (sub) {
  //       console.log("If sub");
  //       for (let j = 0; j < sub.length; j++) {
  //         let subD = new DigestSub(sub[j]);
  //         subD.save(function (err, result) {
  //           if (err) console.log(err);
  //           console.log(`DigestSub ${result} inserted.`);
  //         });
  //         console.log(subD);
  //         sub[j] = subD;
  //       }
  //       digest[i].sub = sub;
  //     }
  //     let dg = new Digest(digest[i]);
  //     dg.save(function (err, result) {
  //       if (err) console.log(err);
  //       console.log(`Digest '${result} inserted.`);
  //     });
  //     console.log(dg);
  //     digest[i] = dg;
  //   }
  //   console.log(digest);
  // }
  // if(ingredients.length > 0) {
  //   console.log("If ingredients.length > 0: true");
  //   recipeResult.ingredients = ingredients;
  // }
  // if(totalNutrients.length > 0){
  //   console.log("If totalNutrients.length > 0: true");
  //   recipeResult.totalNutrients = totalNutrients;
  // }
  // if(totalDaily.length > 0){
  //   console.log("If totalDaily.length > 0: true");
  //   recipeResult.totalDaily = totalDaily;
  // }
  // if(digest.length > 0){
  //   console.log("If digest.length > 0: true");
  //   recipeResult.digest = digest;
  // }

  recipeResult = new Recipe(recipeResult);

  recipeResult.save(function (err, result) {
    if (err) return console.error(err);
    //console.log(`Recipe ${result.label} inserted.`);
  });
  if(callback) callback();
};

getQueryResults();

// insertQueryResponse(function(){
//   console.log("Insert Query Successful!");
//   //mongoose.disconnect();
//   //console.log('Mongoose conn disconnected.');
// });

// insertMockRecipe(function(){
//   console.log("insertRecipe callback.");
// });

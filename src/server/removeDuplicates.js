const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/mean';
mongoose.connect(url);
const db = mongoose.connection;
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


const deDupeAllRecipes = function(){
  let all = [];
  Recipe.find({}, (error, docs) => {
    if(error) console.log(error);
    //console.log(`Found the following docs: ${docs}`);
    //console.log(all);
    let uri = `http://www.edamam.com/ontologies/edamam.owl#recipe_7bf4a371c6884d809682a72808da7dc2`;
    let uniqueId = ``;
    //console.log(docs);
    for(let i = 0; i < docs.length; i++){
      //console.log(all);
      //console.log(docs[i]);
      let duplicates = getDuplicatesForRecipe(docs[i]);
      if(duplicates){
        //removeRecipes(duplicates);
      }
      //uri = all[i].uri;
      //uniqueId = uri.split('_')[1];
      //console.log(`unique Id: ${uniqueId}`);
    }

  });
};

const getDuplicatesForRecipe = function(recipe){
  Recipe.find({$where: `this._id !== recipe._id`, uri: recipe.uri}, (error, docs) => {
    if(error) console.log(error);
    if(docs){
      console.log(`Found ${docs.length} duplicates!`);
      removeDuplicates(docs);
      return docs;
    } else {
      return false;
    }
  });
};

const removeDuplicates = function(duplicates){
  Recipe.remove({uri: duplicates[0].uri}, (error, response) => {
    if(error) console.log(error);
    if(response) console.log(response);
  });
};

const removeRecipes = function(recipes){
  let count = 0;
  if(recipes){
    for(let i = 0; i < recipes.length; i++){
      console.log(recipes[i]);
      Recipe.remove({uri: recipes[i].uri}, (error, response) => {
        if(error) console.log(error);
        if(response) {
          console.log(response);

          count += 1;
        }
      });
    }
    console.log(`${count} duplicates removed!`);
  } else {
    console.log(`No recipes given to removeRecipes.`);
  }
};

deDupeAllRecipes();

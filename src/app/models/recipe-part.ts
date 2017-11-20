import { NutrientInfo } from './nutrient-info';
import { Ingredient } from './ingredient';
import { Digest } from './digest';
import { isNullOrUndefined } from 'util';

export class RecipePart {
  uri?: string;
  label: string;
  image: string;
  source?: string;
  url: string;
  yield?: number;
  shareAs?: string;
  calories: number;
  totalWeight?: number;
  ingredientLines?: string[];
  ingredients: Ingredient[];
  totalNutrients?: NutrientInfo[];
  totalDaily?: NutrientInfo[];
  dietLabels?: string[];
  healthLabels?: string[];
  digest?: Digest[];
  _id: string;
  _v: number;

  constructor(recipe: any){
    if (!isNullOrUndefined(recipe)) {
      this.uri = (recipe.uri ? recipe.uri : null);
      this.label = (recipe.label ? recipe.label : null);
      this.image = (recipe.image ? recipe.image : null);
      this.source = (recipe.source ? recipe.source : null);
      this.url = (recipe.url ? recipe.url : null);
      this.yield = (recipe.yield ? recipe.yield : null);
      this.shareAs = (recipe.shareAs ? recipe.shareAs : null);
      this.calories = (recipe.calories ? recipe.calories : null);
      this.totalWeight = (recipe.totalWeight ? recipe.totalWeight : null);
      this.ingredientLines = (recipe.ingredientLines ? recipe.ingredientLines : null);
      this.ingredients = recipe.ingredients.map(item => new Ingredient(item));
      this.totalNutrients = recipe.totalNutrients.map(item => new NutrientInfo(item));
      this.totalDaily = recipe.totalDaily.map(item => new NutrientInfo(item));
      this.dietLabels = (recipe.dietLabels ? recipe.dietLabels : null);
      this.healthLabels = (recipe.healthLabels ? recipe.healthLabels : null);
      this.digest = recipe.digest.map(item => new Digest(item));
      this._id = (recipe._id ? recipe._id : null);
      this._v = (recipe._v ? recipe._v : null);
    }
  }
}

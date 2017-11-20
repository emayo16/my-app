import { Measure } from './measure';
import { Food } from './food';
import {isNullOrUndefined} from 'util';

export class Ingredient {
  uri?: string;
  text?: string;
  quantity?: number;
  measure?: Measure;
  weight?: number;
  food?: Food;
  _id: string;
  _v: number;

  constructor(ingredient: any) {
    if (!isNullOrUndefined(ingredient)) {
      this.uri = (ingredient.uri ? ingredient.uri : null);
      this.text = (ingredient.text ? ingredient.text : null);
      this.quantity = (ingredient.quantity ? ingredient.quantity : null);
      this.measure = new Measure(ingredient.measure);
      this.weight = (ingredient.weight ? ingredient.weight : null);
      this.food = new Food(ingredient.food);
      this._id = (ingredient._id ? ingredient._id : null);
      this._v = (ingredient._v ? ingredient._v : null);
    }
  }
}

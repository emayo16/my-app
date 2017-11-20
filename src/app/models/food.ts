import {isNullOrUndefined} from 'util';

export class Food {
  uri?: string;
  label: string;
  _id: string;
  _v: number;

  constructor(food: any) {
    if (!isNullOrUndefined(food)) {
      this.label = (food.label ? food.label : null);
      this.uri = (food.uri ? food.uri : null);
      this._id = (food._id ? food._id : null);
      this._v = (food._v ? food._v : null);
    }
  }
}

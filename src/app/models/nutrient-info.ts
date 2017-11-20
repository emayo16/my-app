import {isNullOrUndefined} from 'util';

export class NutrientInfo {
  uri?: string;
  label: string;
  quantity: number;
  unit: string;
  _id: string;
  _v: number;

  constructor(nutrientInfo: any) {
    if (!isNullOrUndefined(nutrientInfo)) {
      this.label = (nutrientInfo.label ? nutrientInfo.label : null);
      this.uri = (nutrientInfo.uri ? nutrientInfo.uri : null);
      this.quantity = (nutrientInfo.quantity ? nutrientInfo.quantity : null);
      this.unit = (nutrientInfo.unit ? nutrientInfo.unit : null);
      this._id = (nutrientInfo._id ? nutrientInfo._id : null);
      this._v = (nutrientInfo._v ? nutrientInfo._v : null);
    }
  }
}

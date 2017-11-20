import {isNullOrUndefined} from 'util';

export class Measure {
  uri?: string;
  label: string;
  _id: string;
  _v: number;

  constructor(measure: any) {
    if (!isNullOrUndefined(measure)) {
      this.label = (measure.label ? measure.label : null);
      this.uri = (measure.uri ? measure.uri : null);
      this._id = (measure._id ? measure._id : null);
      this._v = (measure._v ? measure._v : null);
    }
  }
}

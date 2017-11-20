import {isNullOrUndefined} from 'util';

export class DigestSub {
  label: string;
  tag?: string;
  schemaOrgTag?: string;
  total?: number;
  hasRDI?: boolean;
  daily?: number;
  unit?: string;
  _id: string;
  _v?: number;

  constructor(digest: any) {
    if (!isNullOrUndefined(digest)) {
      this.label = (digest.label ? digest.label : null);
      this.tag = (digest.tag ? digest.tag : null);
      this.schemaOrgTag = (digest.schemaOrgTag ? digest.schemaOrgTag : null);
      this.total = (digest.total ? digest.total : null);
      this.hasRDI = (digest.hasRDI ? digest.hasRDI : null);
      this.daily = (digest.daily ? digest.daily : null);
      this.unit = (digest.unit ? digest.unit : null);
      this._id = (digest._id ? digest._id : null);
      this._v = (digest._v ? digest._v : null);
    }
  }
}

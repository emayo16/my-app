import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Measure } from '../../models/measure';

@Injectable()
export class MeasureService {
  constructor(private http: Http) { }
  getMeasures(): Observable<Measure[]> {
    return this.http.get('/api/Measure')
      .map(res => res.json());
  }
}

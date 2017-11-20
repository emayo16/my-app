import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { NutrientInfo } from '../../models/nutrient-info';

@Injectable()
export class NutrientInfoService {
  constructor(private http: Http) { }
  getNutrientInfos(): Observable<NutrientInfo[]> {
    return this.http.get('/api/NutrientInfo')
      .map(res => res.json());
  }
}

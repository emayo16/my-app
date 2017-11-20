import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Food } from '../../models/food';

@Injectable()
export class FoodService {
  constructor(private http: Http) { }
  getFoods(): Observable<Food[]> {
    return this.http.get('/api/Food')
      .map(res => res.json());
  }
}

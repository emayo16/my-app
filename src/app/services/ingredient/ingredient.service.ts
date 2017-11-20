import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Ingredient } from '../../models/ingredient';

@Injectable()
export class IngredientService {
  constructor(private http: Http) { }
  getIngredients(): Observable<Ingredient[]> {
    return this.http.get('/api/Ingredient')
      .map(res => res.json());
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { RecipePart } from '../../models/recipe-part';

@Injectable()
export class RecipePartService {
  constructor(private http: Http) { }
  getRecipeParts(): Observable<RecipePart[]> {
    return this.http.get('/api/RecipePart')
      .map(res => res.json());
  }
}

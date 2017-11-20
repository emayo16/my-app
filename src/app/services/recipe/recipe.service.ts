import { Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';


import { Recipe } from '../../models/recipe';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RecipeService{
  private recipesUrl = 'api/Recipe';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET recipes from the server */
  getRecipes (): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.recipesUrl}?limit=20`)
      .pipe(
        tap(recipes => this.log(`fetched recipes`)),
        catchError(this.handleError('getRecipes', []))
      );
  }

  /** GET recipe by id. Return `undefined` when id not found */
  getRecipeNo404<Data>(id: number): Observable<Recipe> {
    const url = `${this.recipesUrl}/?id=${id}`;
    return this.http.get<Recipe[]>(url)
      .pipe(
        map(recipes => recipes[0]), // returns a {0|1} element array
        tap(r => {
          const outcome = r ? `fetched` : `did not find`;
          this.log(`${outcome} recipe id=${id}`);
        }),
        catchError(this.handleError<Recipe>(`getRecipe id=${id}`))
      );
  }

  /** GET recipe by id. Will 404 if id not found */
  getRecipe(id: number): Observable<Recipe> {
    const url = `${this.recipesUrl}/${id}`;
    return this.http.get<Recipe>(url).pipe(
      tap(_ => this.log(`fetched recipe id=${id}`)),
      catchError(this.handleError<Recipe>(`getRecipe id=${id}`))
    );
  }

  /* GET recipes whose name contains search term */
  searchRecipes(term: string): Observable<Recipe[]> {
    console.log(`searchRecipes in service: ${term}`);
    if (!term.trim()) {
      // if not search term, return empty recipe array.
      return this.getRecipes();
    }
    return this.http.get<Recipe[]>(`api/Recipe?query={"label":{"$regex":"(?i)${term}"}}&limit=20`).pipe(
      tap(_ => this.log(`found recipes matching "${term}"`)),
      catchError(this.handleError<Recipe[]>('searchRecipes', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a RecipeService message with the MessageService */
  private log(message: string) {
    console.log('RecipeService: ' + message);
  }

}

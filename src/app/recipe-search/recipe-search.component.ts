import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss'],
  providers: [RecipeService]
})
export class RecipeSearchComponent implements OnInit {
  // recipes$: Observable<Recipe[]>;
  // searchTerms = new Subject<string>();

  constructor(private recipeService: RecipeService) { }


  ngOnInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    //   this.recipes$ = this.searchTerms.pipe(
    //     // wait 300ms after each keystroke before considering the term
    //     debounceTime(300),
    //
    //     // ignore new term if same as previous term
    //     distinctUntilChanged(),
    //
    //     // switch to new search observable each time the term changes
    //     switchMap((term: string) => this.recipeService.searchRecipes(term))
    //   );
  }
}

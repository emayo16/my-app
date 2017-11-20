import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Recipe} from '../models/recipe';
import {Food} from '../models/food';
import {Measure} from '../models/measure';
import {NutrientInfo} from '../models/nutrient-info';
import {RecipePart} from '../models/recipe-part';
import {Ingredient} from '../models/ingredient';
import {RecipeService} from '../services/recipe/recipe.service';
import {FoodService} from '../services/food/food.service';
import {MeasureService} from '../services/measure/measure.service';
import {NutrientInfoService} from '../services/nutrient-info/nutrient-info.service';
import {RecipePartService} from '../services/recipe-part/recipe-part.service';
import {IngredientService} from '../services/ingredient/ingredient.service';
import {Subject} from 'rxjs/Subject';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-recipe-grid',
  templateUrl: './recipe-grid.component.html',
  styleUrls: ['./recipe-grid.component.scss'],
  providers: [
    RecipeService,
    FoodService,
    MeasureService,
    NutrientInfoService,
    RecipePartService,
    IngredientService
  ]
})
export class RecipeGridComponent implements OnInit {

  foods: Food[];
  measures: Measure[];
  nutrientInfos: NutrientInfo[];
  recipeParts: RecipePart[];
  ingredients: Ingredient[];
  selectedRecipe: Recipe;
  recipes$: Observable<Recipe[]>;
  searchTerms = new Subject<string>();
  recipes: Recipe[];

  constructor(private recipeService: RecipeService,
              private foodService: FoodService,
              private measureService: MeasureService,
              private nutrientInfoService: NutrientInfoService,
              private recipePartService: RecipePartService,
              private ingredientService: IngredientService) {
  }

  getMeasures(): void {
    this.measureService.getMeasures()
        .subscribe(
          results => {
            this.measures = results;
            console.log(this.measures);
          },
          err => {
            // Log errors if any
            console.log(err);
          });
  }

  getNutrientInfos(): void {
    this.nutrientInfoService.getNutrientInfos()
        .subscribe(
          results => {
            this.nutrientInfos = results;
            console.log(this.nutrientInfos);
          },
          err => {
            // Log errors if any
            console.log(err);
          });
  }

  getRecipeParts(): void {
    this.recipePartService.getRecipeParts()
        .subscribe(
          results => {
            this.recipeParts = results;
            console.log(this.recipeParts);
          },
          err => {
            // Log errors if any
            console.log(err);
          });
  }

  getIngredients(): void {
    this.ingredientService.getIngredients()
        .subscribe(
          results => {
            this.ingredients = results;
            console.log(this.ingredients);
          },
          err => {
            // Log errors if any
            console.log(err);
          });
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
        .subscribe(
          (results) => {
            this.recipes = results.map(recipe => new Recipe(recipe));
            console.log(this.recipes);
          },
          (err) => {
            // Log errors if any
            console.log(err);
          });
  }

  getFoods(): void {
    this.foodService.getFoods()
        .subscribe(
          results => {
            this.foods = results;
            console.log(this.foods);
          },
          err => {
            // Log errors if any
            console.log(err);
          });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.recipes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.recipeService.searchRecipes(term))
    );
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

}

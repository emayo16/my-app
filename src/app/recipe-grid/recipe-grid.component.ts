import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'app-recipe-grid',
  templateUrl: './recipe-grid.component.html',
  styleUrls: ['./recipe-grid.component.scss'],
  providers: [RecipeService]
})
export class RecipeGridComponent implements OnInit {
  recipes: Recipe[];
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  getRecipes(): void {
    this.recipeService.getRecipes().then(recipes => this.recipes = recipes);
  }
  ngOnInit() {
    this.getRecipes();
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

}

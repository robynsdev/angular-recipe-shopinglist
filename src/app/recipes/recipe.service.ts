import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Recipe1',
      'So descriptive',
      'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg'
    ),
    new Recipe(
      'Recipe2',
      'Soso descriptive',
      'https://cdn.pixabay.com/photo/2015/03/26/09/39/cupcakes-690040_1280.jpg'
    ),
    new Recipe(
      'Recipe3',
      'Sososo descriptive',
      'https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_1280.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}

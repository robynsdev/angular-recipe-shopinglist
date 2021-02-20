import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit(): void {}
}

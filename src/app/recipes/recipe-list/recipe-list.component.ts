import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a recipe description', 'http://i.ndtvimg.com/i/2016-07/chicken-korma_625x350_71467713811.jpg'),
    new Recipe('Another test recipe', 'This is a recipe description', 'http://i.ndtvimg.com/i/2016-07/chicken-korma_625x350_71467713811.jpg')
  ];


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}

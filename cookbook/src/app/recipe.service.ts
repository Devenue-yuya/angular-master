import { Injectable } from '@angular/core';
import { Recipe } from './recipe/recipe';
import { RECIPEDATE } from './recipe/recipedate';

@Injectable()
export class RecipeService {
  recipedate:Recipe[]=RECIPEDATE;

  constructor() { }

  getRecipedate():Recipe[]{
    return this.recipedate;
 }

  getRecipe(id:string):Recipe{
  return this.recipedate.find(recipe=>recipe.id.toString()==id)!;
}
}

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
  seachRecipe(keyword: string): any {
    let resultArr: Recipe[] = [];

    for (let recipe of this.recipedate) {
//       let dataStr =JSON.stringify(recipe);
//       console.log(recipe.name);
console.log(keyword.search(recipe.name) )
      if (recipe.name.search(keyword) > 0) {
        resultArr.push(recipe);
      }
    }
    console.log("###3",resultArr)
    return resultArr;
  }
}

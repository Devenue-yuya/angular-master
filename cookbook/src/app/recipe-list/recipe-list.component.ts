import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe/recipe';
import {RecipeService} from '../recipe.service';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  recipedate !: Recipe[];
  test = "test";
  constructor(private rsv: RecipeService) { }

  ngOnInit() {
    this.recipedate =this.rsv.getRecipedate();
  }

  seachRecipe (keyword:string){
    console.log("##",keyword)

   this.recipedate = this.rsv.seachRecipe(keyword)
 }

}

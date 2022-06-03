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
  constructor(private rsv: RecipeService) { }

  ngOnInit() {
    this.recipedate =this.rsv.getRecipedate();
  }

}

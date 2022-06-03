import { Component, OnInit } from '@angular/core';
import {RECIPEDATE} from '../recipe/recipedate';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  recipedate = RECIPEDATE;
  constructor() { }

  ngOnInit(): void {
  }

}

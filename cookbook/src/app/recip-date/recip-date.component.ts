import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Recipe} from '../recipe/recipe';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recip-date',
  templateUrl: './recip-date.component.html',
  styleUrls: ['./recip-date.component.sass']
})
export class RecipDateComponent implements OnInit {
  recipeid !:string;
  recipe !:Recipe;


  constructor(private route:ActivatedRoute, private location:Location, private rsv: RecipeService){}

  ngOnInit() {
    this.recipeid= this.route.snapshot.paramMap.get('id')!;
    this.recipe = this.rsv.getRecipe(this.recipeid);
}
backToList (){
  this.location.back();
}

}

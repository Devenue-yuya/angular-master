import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Recipe} from '../recipe/recipe';
import {RECIPEDATE} from '../recipe/recipedate';




@Component({
  selector: 'app-recip-date',
  templateUrl: './recip-date.component.html',
  styleUrls: ['./recip-date.component.sass']
})
export class RecipDateComponent implements OnInit {
  recipid !:string;
  recip !:Recipe;
  constructor(private route:ActivatedRoute, private location:Location) { }

  ngOnInit() {
    this.recipid= this.route.snapshot.paramMap.get('id')!;
    // this.recipe = RECIPEDATE.find (recipe=>recipe.id.toString()==this.recipeid);
  }

backToList(){
  this.location.back();
}
}

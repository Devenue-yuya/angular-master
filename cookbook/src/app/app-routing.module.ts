import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipDateComponent } from './recip-date/recip-date.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:"", redirectTo: '/recipe-list', pathMatch: 'full'},
    {path:"recipe-list", component:RecipeListComponent},
    {path:"recip-date/:id", component:RecipDateComponent},

])
],
  exports: [
    RouterModule
],
  declarations: []
})
export class AppRoutingModule { }

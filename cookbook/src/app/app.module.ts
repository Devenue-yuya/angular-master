import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipDateComponent } from './recip-date/recip-date.component';
import { RecipeService } from './recipe.service';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

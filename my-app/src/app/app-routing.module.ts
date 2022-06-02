import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/Common';

import { RouterModule, Routes } from '@angular/router';
import { SimpleFromComponent } from './simple-from/simple-from.component';
import { ControlsComponent } from './controls/controls.component';


const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:'', redirectTo: '/simple-from', pathMatch: 'full'},
      {path:'simple-from', component:SimpleFromComponent},
      {path:'controls', component:ControlsComponent},
    ]
  )
],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

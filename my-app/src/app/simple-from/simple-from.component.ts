import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-from',
  templateUrl: './simple-from.component.html',
  styleUrls: ['./simple-from.component.sass']
})
export class SimpleFromComponent implements OnInit {
  result:string="足し算しましょう";

  addAndShow():void {
    this.result="これはテストです";
  }
  constructor() { }

  ngOnInit(): void {
  }

}

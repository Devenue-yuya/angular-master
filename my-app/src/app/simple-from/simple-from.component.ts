import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-from',
  templateUrl: './simple-from.component.html',
  styleUrls: ['./simple-from.component.sass']
})
export class SimpleFromComponent implements OnInit {
  result:string="足し算しましょう";
  text1:string="0";
  text2:string="0";

  addAndShow():void {
    let forResult:string="正しい値を入力してください";
    let int1:number;
    let int2:number;

    int1=Number(this.text1);
    int2=Number(this.text2);


    if (!Number.isNaN(int1) && !Number.isNaN(int2)){
    forResult = `${int1}+${int2}=${int1+int2}`;
  }
  this.result=forResult;
}

constructor() { }

ngOnInit(): void {
  }
}

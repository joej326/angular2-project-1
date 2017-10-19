import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-practice',
  templateUrl: './ngfor-practice.component.html',
  styleUrls: ['./ngfor-practice.component.css']
})
export class NgforPracticeComponent implements OnInit {

  numbers = [1,2,3,4,5,6,7,8,9];

  constructor() {

  }

  ngOnInit() {
    for(let i = 0;i<this.numbers.length;i++){
      if(this.numbers[i] % 2 === 0){
        this.numbers.splice(i,1);
      }
    }
  }



}

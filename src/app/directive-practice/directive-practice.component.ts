import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-practice',
  templateUrl: './directive-practice.component.html',
  styleUrls: ['./directive-practice.component.css']
})
export class DirectivePracticeComponent implements OnInit {

  myBoolean: boolean = false;
  status: string = 'red';
  classTest: string = 'hey';
  ngForArray = ["Drake","Josh","Ned","Joseph","Grace"];

  constructor(){
    setTimeout(()=>{
      this.myBoolean = true;
      this.status = "green";
    },2000);
  }

  ngOnInit() {
  }


  // ng-class-test is in the css file for this component
  testClass(){
    return "ng-class-test";
  }


}

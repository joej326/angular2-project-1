import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reference-example',
  templateUrl: './reference-example.component.html',
  styleUrls: ['./reference-example.component.css']
})
export class ReferenceExampleComponent implements OnInit {

  //the string inside ViewChild is the name of the reference from the template
  @ViewChild('viewChildReference') grabTheReference;

  constructor() {

  }

  ngOnInit() {
  }

  onClick(elementFromReference){
    console.log(elementFromReference);
  }

  referenceTestMethod(){
    console.log(this.grabTheReference);
  }

}

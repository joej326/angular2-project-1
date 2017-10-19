import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-tester-child',
  templateUrl: './output-tester-child.component.html',
  styleUrls: ['./output-tester-child.component.css']
})
export class OutputTesterChildComponent implements OnInit {

  // 1) set up the custom event in the child component. In this case, "outputTest"
  //@Output makes the event available to the parent
  @Output() outputTest = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
  }

  // 3) after button is pressed, the custom event is invoked with an emit.
  // inside the emit is the data that we want to pass (in this case a string)
  onClick(){
    console.log("button was clicked!");
    this.outputTest.emit("the output was successfull!!!!!");
  }
}

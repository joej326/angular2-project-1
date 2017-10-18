import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-tester-parent',
  templateUrl: './output-tester-parent.component.html',
  styleUrls: ['./output-tester-parent.component.css']
})
export class OutputTesterParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // 5) the $event is passed into the final method and here we console log that data
  finalStep(event){
    console.log(event);
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-tester',
  templateUrl: './output-tester.component.html',
  styleUrls: ['./output-tester.component.css']
})
export class OutputTesterComponent implements OnInit {

  @Output() outputTest = new EventEmitter<{test: string}>();

  constructor() { }

  ngOnInit() {
  }

  outputTestMethod(){
    let tryThis = this.outputTest.emit({test: "mmmMMM!"});
    console.log(tryThis);
    console.log('dah dah dah');
  }

}

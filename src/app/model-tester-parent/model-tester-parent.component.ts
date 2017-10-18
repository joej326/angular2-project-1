import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-tester-parent',
  templateUrl: './model-tester-parent.component.html',
  styleUrls: ['./model-tester-parent.component.css']
})
export class ModelTesterParentComponent implements OnInit {

  name: string = "this is my name";
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

import { Example } from '../model/example.model';

@Component({
  selector: 'app-model-tester',
  templateUrl: './model-tester.component.html',
  styleUrls: ['./model-tester.component.css']
})
export class ModelTesterComponent implements OnInit {
  //Input allows this variable to be accessible globally
  @Input() joseph = new Example("Joseph",20,"wonderful");
  josephArray = [];

  constructor() {
    for(let key in this.joseph){
      this.josephArray.push(this.joseph[key]);
    }

  }

  ngOnInit() {
  }


}

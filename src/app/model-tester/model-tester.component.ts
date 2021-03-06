import { Component, OnInit, Input } from '@angular/core';

import { Example } from '../model/example.model';

@Component({
  selector: 'app-model-tester',
  templateUrl: './model-tester.component.html',
  styleUrls: ['./model-tester.component.css']
})
export class ModelTesterComponent implements OnInit {
  //Input allows this variable to be accessible by any child component (think props)

  //Input contains an optional argument of an alias. The alias is The
  //name of the variable to components OUTSIDE of this component
  @Input("michael") joseph = new Example("Joseph",20,"wonderful");
  @Input() tryIt: string;
  josephArray = [];

  constructor() {
    for(let key in this.joseph){
      this.josephArray.push(this.joseph[key]);
    }

  }

  onClick(){
    console.log(this.tryIt);
  }

  ngOnInit() {
  }


}

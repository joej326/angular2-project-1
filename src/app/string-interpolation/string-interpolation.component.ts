import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  serverId: number = 10;
  name: string = 'here is the string';

  getString(){
    return this.name;
  }

}

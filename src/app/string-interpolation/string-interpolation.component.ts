import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  //contructor function is called once after the component is rendered
  constructor() {
    setTimeout(()=>{
      console.log(this.buttonStatus);
      this.buttonStatus = false;
    }, 2000);
  }

  ngOnInit() {
  }
  serverId: number = 10;
  name: string = 'here is the string';
  buttonStatus: boolean = true;

  getString(){
    return this.name;
  }





}

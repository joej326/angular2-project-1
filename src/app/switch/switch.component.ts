import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  myNumber = 10;

  constructor() { }

  ngOnInit() {
    setInterval(()=>{
      this.myNumber += 10;
    },3000);
  }

}

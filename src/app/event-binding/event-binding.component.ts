import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  personName: string = "";

  constructor() { }

  ngOnInit() {
  }

  testEvent(){
    alert("did it work?");
  }

  updatePerson(event: any){
    this.personName = event.target.value;
    return this.personName;
  }

}

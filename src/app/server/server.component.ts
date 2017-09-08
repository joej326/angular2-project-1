import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent{
  constructor(){

  }

  buttonStatus = false;

  buttonClicked(){
    this.buttonStatus = true;
  }





}

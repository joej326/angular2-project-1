import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent{
  constructor(){

  }

  buttonStatus = false;

  getRandomColor(){
    let colorArray = ['red','blue','green','orange','purple','yellow'];
    let randomIndex = Math.floor(Math.random() * 5);
    console.log(randomIndex);

    let theColor = colorArray.splice(randomIndex,1);

    return {color: theColor}

  }




}

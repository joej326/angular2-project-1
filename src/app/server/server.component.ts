import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent{
  constructor(){
    document.querySelector
    setTimeout( ()=>{
      this.buttonStatus = false;
    }, 3000);
  }

  serverId = 101;
  serverStatus = 'offline';
  buttonStatus = true;
  clickTest = 'this text will change on button click';


  getServerLocation(){
    return 'Moscow';
  }
  changeText(){
    this.clickTest = 'text changed successfully';
  }
}

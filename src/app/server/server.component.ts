import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent{
  constructor(){

  }

  serverId: number = 10;
  name: string = 'here is the string';

  getString(){
    return this.name;
  }



}

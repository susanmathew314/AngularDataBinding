import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  //allowNewServer = false;
  serverCreationStatus = '';
  serverName = 'Testserver';
  serverAddress = '';

  constructor() {

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = `Server was created! Name is  ${this.serverName} and Server Address is ${this.serverAddress}`;
  }

  /*   onUpdateServerName(event: Event) {
      this.serverName = (<HTMLInputElement>event.target).value;
    } */
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  newServerName = '';
  newServerContent = '';

  serverAdded(passedData:any) {
    this.serverElements.push({
      type: 'server',
      name: passedData.name,
      content: passedData.content
    });
  }

  blueprintAdded(passedData:any) {
    this.serverElements.push({
      type: 'blueprint',
      name: passedData.name,
      content: passedData.content
    });
  }
}

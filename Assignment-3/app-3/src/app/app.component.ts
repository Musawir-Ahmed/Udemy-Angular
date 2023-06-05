import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view ='recipe';

  changeView(passedData:any)
  {
    this.view=passedData;
    console.log(this.view);
  }

}

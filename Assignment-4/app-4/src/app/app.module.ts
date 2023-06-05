import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ControlUnitComponent } from './Component/control-unit/control-unit.component';
import { ServerElementComponent } from './Component/server-element/server-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlUnitComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

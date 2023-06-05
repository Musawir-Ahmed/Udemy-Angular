import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-control-unit',
  templateUrl: './control-unit.component.html',
  styleUrls: ['./control-unit.component.css']
})
export class ControlUnitComponent implements OnInit {

  @Output() onServerAdded=new EventEmitter<any>();
  @Output() onServerBluePrintAdded=new EventEmitter<any>();

  newServerName = '';
  newServerContent = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  serverAdded() {
    this.onServerAdded.emit({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  blueprintAdded() {
    this.onServerBluePrintAdded.emit(
      {
        type: 'blueprint',
        name: this.newServerName,
        content: this.newServerContent
      }
    )
  }

}

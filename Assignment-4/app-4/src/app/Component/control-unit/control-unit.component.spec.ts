import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlUnitComponent } from './control-unit.component';

describe('ControlUnitComponent', () => {
  let component: ControlUnitComponent;
  let fixture: ComponentFixture<ControlUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

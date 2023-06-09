import { Component, ViewChild } from '@angular/core';
import { NgForm }   from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form') subscriptionForm:any;


  defaultSubscription = 'Advance';
  subscriptionPlan=[
    'Basic',
    'Advance',
    'Pro',
  ];


  onSubmit(passedValue:NgForm)
  {
    console.log({
      email:passedValue.value.email,
      password:passedValue.value.password,
      subscription:passedValue.value.subscription,
    });

    this.subscriptionForm.reset();
  }

}

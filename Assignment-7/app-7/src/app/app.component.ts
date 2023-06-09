import { Component, OnInit } from '@angular/core';
import { NgForm,FormControl, FormGroup, Validators, ValidationErrors, AsyncValidatorFn, AbstractControl }   from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm:any;

  ngOnInit()
  {
    this.projectForm=new FormGroup({
      'projectName':new FormControl(null,[Validators.required,this.invalidProjectName], [this.asyninvalidProjectName()]),
      'email':new FormControl(null,[Validators.email,Validators.required]),
      'projectStatus':new FormControl('critical',Validators.required),
    });
  }

  onSubmit()
  {
    console.log(this.projectForm);
  }

  invalidProjectName(control:FormControl):ValidationErrors | null
  {
      if(control.value==='Test')
      {
        return {'invalidProjectName':true};
      }
      return null;
  }


  asyninvalidProjectName(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      return new Promise((resolve,reject)=>{
        setTimeout(() => {
          if(control.value==='TestProject')
          {
            resolve({'invalidProjectName':true});
          }
          else
          {
            resolve(null);
  
        }
      }, 2000);
      });
    };
  }

}

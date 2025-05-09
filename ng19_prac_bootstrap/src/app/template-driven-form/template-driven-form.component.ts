import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  imports: [
    FormsModule,
    // JsonPipe,
  ],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss',
})
export class TemplateDrivenFormComponent implements OnInit {
  userObject: User = {};

  onSubmit(yo: NgForm) {
    console.info(yo.value);
  }

  ngOnInit(): void {
    this.userObject = {
      // firstName: 'Shawn',
      // lastName: 'Michale',
      // email: 'shawn@gmail.com',
      // pass: '123456',
      // isCheck: true
    };
  }

  setValue(userForm: NgForm) {
    let obj = {
      firstName: 'Shawn',
      lastName: 'Michale',
      email: 'shawn@gmail.com',
      pass: '123456',
      isCheck: true,
    };
    userForm.setValue(obj);
  }

  patchValue(userForm: NgForm) {
    let obj = {
      firstName: 'sushant',
      lastName: 'kate',
      email: 'sushant@gmail.com'
    }
    userForm.control.patchValue(obj)
  }

  setReset(userForm:NgForm) {
    userForm.reset()      //example 1
    // userForm.resetForm()  //example 2
  }
}

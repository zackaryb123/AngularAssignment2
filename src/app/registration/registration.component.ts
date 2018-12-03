import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'registration-component',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private formInfo: any;
  private formData: any;
  genders = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];

  constructor() { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.formData = new FormGroup({
      name: new FormControl("", Validators.compose([
        Validators.required
      ])),
      address: new FormControl("", Validators.compose([
        Validators.required
      ])),
      age: new FormControl("", Validators.compose([
        Validators.required,
        this.atLeast18
      ])),
      gender: new FormControl("", Validators.compose([
        Validators.required
      ])),
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern('[^@]*@[^@]*')
      ]))
    });
  }

  atLeast18(age) {
    if (age.value < 18) { return {age: true}; }
  }

  onSubmit(): void {
    this.formInfo = this.formData.value;
  }

}

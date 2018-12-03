import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DateTimeService} from '../../service/date-time.service';

@Component({
  selector: 'third-component',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  private formInfo: any;
  private formData: any;
  private  bindingInfo: any;
  private currentDateTime: any;
  cities = [
    {value: 'ATL', viewValue: 'ATL'},
    {value: 'HOU', viewValue: 'HOU'},
    {value: 'LA', viewValue: 'LA'}
  ];

  constructor(private dateTime: DateTimeService) { }

  ngOnInit() {
    this.currentDateTime = this.dateTime.currentDateTime();
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
      city: new FormControl("", Validators.compose([
        Validators.required
      ]))
    });
  }

  setValues(formData) {
    this.bindingInfo = formData.value;
  }

  onSubmit() {
    this.formInfo = this.formData.value;
  }
}

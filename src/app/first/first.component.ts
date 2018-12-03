import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { DateTimeService } from '../../service/date-time.service';

@Component({
  selector: 'first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  private formInfo: any;
  private formData: any;
  private currentDateTime: any;

  constructor(private dateTime: DateTimeService) { }

  ngOnInit() {
    this.currentDateTime = this.dateTime.currentDateTime();
    this.fromInit();
  }

  fromInit() {
    this.formData = new FormGroup({
      name: new FormControl("", Validators.compose([
        Validators.required
      ])),
      address: new FormControl("", Validators.compose([
        Validators.required
      ])),
      age: new FormControl("", Validators.compose([
        Validators.required
      ]))
    });
  }

  onSubmit() {
    this.formInfo = this.formData.value;
  }
}

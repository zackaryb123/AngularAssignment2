import { Component, OnInit } from '@angular/core';
import {DateTimeService} from '../../service/date-time.service';

@Component({
  selector: 'second-component',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  private currentDateTime: any;
  names = ['Student1', 'Student2', 'Student3', 'Student4', 'Student5',
    'Student6', 'Student7', 'Student8', 'Student9', 'Student10'];

  constructor(private dateTime: DateTimeService) { }

  ngOnInit() {
    this.currentDateTime = this.dateTime.currentDateTime();
  }

}

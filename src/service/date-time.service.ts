import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DateTimeService {

  constructor() { }

  currentDateTime() {
    return new Date();
  }
}

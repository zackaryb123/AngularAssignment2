import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-component',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  private status: any;

  age = 17;

  constructor() { }

  ngOnInit() {
    this.greaterThan18();
  }

  greaterThan18() {
    this.status = this.age > 18;
  }

}

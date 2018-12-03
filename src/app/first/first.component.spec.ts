import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FIrstComponent } from './first.component';

describe('FIrstComponent', () => {
  let component: FIrstComponent;
  let fixture: ComponentFixture<FIrstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FIrstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FIrstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueinputComponent } from './valueinput.component';

describe('ValueinputComponent', () => {
  let component: ValueinputComponent;
  let fixture: ComponentFixture<ValueinputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValueinputComponent]
    });
    fixture = TestBed.createComponent(ValueinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

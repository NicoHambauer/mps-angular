import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemButtonComponent } from './add-item-button.component';

//import {TextFieldModule} from '@angular/cdk/text-field';
//import {MatFormFieldModule} from '@angular/material/form-field'; 




describe('AddItemButtonComponent', () => {
  let component: AddItemButtonComponent;
  let fixture: ComponentFixture<AddItemButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

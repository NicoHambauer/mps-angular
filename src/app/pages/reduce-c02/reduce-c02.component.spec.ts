import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduceC02Component } from './reduce-c02.component';

describe('ReduceC02Component', () => {
  let component: ReduceC02Component;
  let fixture: ComponentFixture<ReduceC02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReduceC02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduceC02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduceFootprintComponent } from './reduce-footprint.component';

describe('ReduceFootprintComponent', () => {
  let component: ReduceFootprintComponent;
  let fixture: ComponentFixture<ReduceFootprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReduceFootprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduceFootprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

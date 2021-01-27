import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootprintItemsComponent } from './footprint-items.component';

describe('FootprintItemsComponent', () => {
  let component: FootprintItemsComponent;
  let fixture: ComponentFixture<FootprintItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootprintItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootprintItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

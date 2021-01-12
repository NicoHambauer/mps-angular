import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaFactsComponent } from './clima-facts.component';

describe('ClimaFactsComponent', () => {
  let component: ClimaFactsComponent;
  let fixture: ComponentFixture<ClimaFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimaFactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

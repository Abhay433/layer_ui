import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalSustainabilityComponent } from './environmental-sustainability.component';

describe('EnvironmentalSustainabilityComponent', () => {
  let component: EnvironmentalSustainabilityComponent;
  let fixture: ComponentFixture<EnvironmentalSustainabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvironmentalSustainabilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironmentalSustainabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilGasComponent } from './oil-gas.component';

describe('OilGasComponent', () => {
  let component: OilGasComponent;
  let fixture: ComponentFixture<OilGasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OilGasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OilGasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

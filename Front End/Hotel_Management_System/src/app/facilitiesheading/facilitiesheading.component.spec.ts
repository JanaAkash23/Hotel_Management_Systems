import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitiesheadingComponent } from './facilitiesheading.component';

describe('FacilitiesheadingComponent', () => {
  let component: FacilitiesheadingComponent;
  let fixture: ComponentFixture<FacilitiesheadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacilitiesheadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacilitiesheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarformComponent } from './registarform.component';

describe('RegistarformComponent', () => {
  let component: RegistarformComponent;
  let fixture: ComponentFixture<RegistarformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistarformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistarformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

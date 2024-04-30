import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperDeluxRoomComponent } from './super-delux-room.component';

describe('SuperDeluxRoomComponent', () => {
  let component: SuperDeluxRoomComponent;
  let fixture: ComponentFixture<SuperDeluxRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperDeluxRoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperDeluxRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

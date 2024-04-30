import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeluxRoomComponent } from './delux-room.component';

describe('DeluxRoomComponent', () => {
  let component: DeluxRoomComponent;
  let fixture: ComponentFixture<DeluxRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeluxRoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeluxRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalRoomComponent } from './normal-room.component';

describe('NormalRoomComponent', () => {
  let component: NormalRoomComponent;
  let fixture: ComponentFixture<NormalRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NormalRoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NormalRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

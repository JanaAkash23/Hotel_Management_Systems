import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRoomtableComponent } from './update-roomtable.component';

describe('UpdateRoomtableComponent', () => {
  let component: UpdateRoomtableComponent;
  let fixture: ComponentFixture<UpdateRoomtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateRoomtableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateRoomtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

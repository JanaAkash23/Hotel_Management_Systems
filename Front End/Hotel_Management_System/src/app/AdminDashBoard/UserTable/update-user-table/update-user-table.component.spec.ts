import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserTableComponent } from './update-user-table.component';

describe('UpdateUserTableComponent', () => {
  let component: UpdateUserTableComponent;
  let fixture: ComponentFixture<UpdateUserTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateUserTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateUserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookingtableComponent } from './update-bookingtable.component';

describe('UpdateBookingtableComponent', () => {
  let component: UpdateBookingtableComponent;
  let fixture: ComponentFixture<UpdateBookingtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateBookingtableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateBookingtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

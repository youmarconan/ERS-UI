import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReimbComponent } from './update-reimb.component';

describe('UpdateReimbComponent', () => {
  let component: UpdateReimbComponent;
  let fixture: ComponentFixture<UpdateReimbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReimbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateReimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

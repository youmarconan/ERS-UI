import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewReimbComponent } from './create-new-reimb.component';

describe('CreateNewReimbComponent', () => {
  let component: CreateNewReimbComponent;
  let fixture: ComponentFixture<CreateNewReimbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewReimbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewReimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

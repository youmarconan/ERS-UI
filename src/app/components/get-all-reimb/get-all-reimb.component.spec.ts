import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllReimbComponent } from './get-all-reimb.component';

describe('GetAllReimbComponent', () => {
  let component: GetAllReimbComponent;
  let fixture: ComponentFixture<GetAllReimbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllReimbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllReimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

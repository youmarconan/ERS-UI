import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveOrDenyReimbComponent } from './approve-or-deny-reimb.component';

describe('ApproveOrDenyReimbComponent', () => {
  let component: ApproveOrDenyReimbComponent;
  let fixture: ComponentFixture<ApproveOrDenyReimbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveOrDenyReimbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveOrDenyReimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

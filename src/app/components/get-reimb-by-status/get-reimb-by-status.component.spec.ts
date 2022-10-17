import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReimbByStatusComponent } from './get-reimb-by-status.component';

describe('GetReimbByStatusComponent', () => {
  let component: GetReimbByStatusComponent;
  let fixture: ComponentFixture<GetReimbByStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetReimbByStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetReimbByStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReimbByIdComponent } from './get-reimb-by-id.component';

describe('GetReimbByIdComponent', () => {
  let component: GetReimbByIdComponent;
  let fixture: ComponentFixture<GetReimbByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetReimbByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetReimbByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

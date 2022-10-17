import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReimbByTypeComponent } from './get-reimb-by-type.component';

describe('GetReimbByTypeComponent', () => {
  let component: GetReimbByTypeComponent;
  let fixture: ComponentFixture<GetReimbByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetReimbByTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetReimbByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

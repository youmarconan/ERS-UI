import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyReimbComponent } from './view-my-reimb.component';

describe('ViewMyReimbComponent', () => {
  let component: ViewMyReimbComponent;
  let fixture: ComponentFixture<ViewMyReimbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyReimbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyReimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

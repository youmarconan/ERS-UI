import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserByUsernameComponent } from './get-user-by-username.component';

describe('GetUserByUsernameComponent', () => {
  let component: GetUserByUsernameComponent;
  let fixture: ComponentFixture<GetUserByUsernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetUserByUsernameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetUserByUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

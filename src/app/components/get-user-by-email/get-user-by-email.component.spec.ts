import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserByEmailComponent } from './get-user-by-email.component';

describe('GetUserByEmailComponent', () => {
  let component: GetUserByEmailComponent;
  let fixture: ComponentFixture<GetUserByEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetUserByEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetUserByEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

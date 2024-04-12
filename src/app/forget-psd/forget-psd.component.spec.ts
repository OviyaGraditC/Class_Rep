import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPsdComponent } from './forget-psd.component';

describe('ForgetPsdComponent', () => {
  let component: ForgetPsdComponent;
  let fixture: ComponentFixture<ForgetPsdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPsdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

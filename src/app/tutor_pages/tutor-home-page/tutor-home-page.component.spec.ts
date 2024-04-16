import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorHomePageComponent } from './tutor-home-page.component';

describe('TutorHomePageComponent', () => {
  let component: TutorHomePageComponent;
  let fixture: ComponentFixture<TutorHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

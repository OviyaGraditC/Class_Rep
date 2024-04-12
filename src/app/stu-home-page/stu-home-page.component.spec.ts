import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuHomePageComponent } from './stu-home-page.component';

describe('StuHomePageComponent', () => {
  let component: StuHomePageComponent;
  let fixture: ComponentFixture<StuHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

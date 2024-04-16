import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTutorDataListComponent } from './admin-tutor-data-list.component';

describe('AdminTutorDataListComponent', () => {
  let component: AdminTutorDataListComponent;
  let fixture: ComponentFixture<AdminTutorDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTutorDataListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTutorDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentDataListComponent } from './admin-student-data-list.component';

describe('AdminStudentDataListComponent', () => {
  let component: AdminStudentDataListComponent;
  let fixture: ComponentFixture<AdminStudentDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStudentDataListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminStudentDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

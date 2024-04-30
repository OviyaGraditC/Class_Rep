import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StuRegisterComponent } from './student_pages/stu-register/stu-register.component';
import { TutorRegisterComponent } from './tutor_pages/tutor-register/tutor-register.component';
import { TutorHomePageComponent } from './tutor_pages/tutor-home-page/tutor-home-page.component';
import { StuHomePageComponent } from './student_pages/stu-home-page/stu-home-page.component';
import { ScanPageComponent } from './scan-page/scan-page.component';
import { StuAttendanceComponent } from './student_pages/stu-attendance/stu-attendance.component';
import { TutorClassesComponent } from './tutor_pages/tutor-classes/tutor-classes.component';
import { ForgetPsdComponent} from './forget-psd/forget-psd.component';
import { RegisterSplitPageComponent} from './register-split-page/register-split-page.component';
import { LogoutComponent} from './logout/logout.component';
import { AdminCredentialsComponent } from './admin-pages/admin-credentials.component';
import { AdminStudentDataListComponent } from './admin-pages/admin-student-data-list/admin-student-data-list.component';
import { AdminTutorDataListComponent } from './admin-pages/admin-tutor-data-list/admin-tutor-data-list.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'stu_register', component:StuRegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'tutor_register', component:TutorRegisterComponent},
  {path:'tutor_homepage', component:TutorHomePageComponent},
  {path:'stu_homepage', component:StuHomePageComponent},
  {path:'scan_page', component:ScanPageComponent},
  {path:'stu_attendance', component:StuAttendanceComponent},
  {path:'tutor_classes', component:TutorClassesComponent},
  {path:'forget_psd', component:ForgetPsdComponent},
  {path:'register_split_page', component:RegisterSplitPageComponent},
  {path:'logout', component:LogoutComponent},
  {path:'admin', component:AdminCredentialsComponent},
  {path:'adminStudentData',component:AdminStudentDataListComponent },
  {path:'adminTutorData',component:AdminTutorDataListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

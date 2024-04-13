import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StuRegisterComponent } from './stu-register/stu-register.component';
import { TutorRegisterComponent } from './tutor-register/tutor-register.component';
import { TutorHomePageComponent } from './tutor-home-page/tutor-home-page.component';
import { StuHomePageComponent } from './stu-home-page/stu-home-page.component';
import { ScanPageComponent } from './scan-page/scan-page.component';
import { StuAttendanceComponent } from './stu-attendance/stu-attendance.component';
import { TutorClassesComponent } from './tutor-classes/tutor-classes.component';
import {ForgetPsdComponent} from './forget-psd/forget-psd.component';
import {RegisterSplitPageComponent} from './register-split-page/register-split-page.component'


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

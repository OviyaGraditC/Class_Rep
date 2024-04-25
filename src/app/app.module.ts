import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StuRegisterComponent } from './student_pages/stu-register/stu-register.component';
import { TutorRegisterComponent } from './tutor_pages/tutor-register/tutor-register.component';
import { TutorHomePageComponent } from './tutor_pages/tutor-home-page/tutor-home-page.component';
import { StuHomePageComponent } from './student_pages/stu-home-page/stu-home-page.component';
import { ScanPageComponent } from './scan-page/scan-page.component';
import { StuAttendanceComponent } from './student_pages/stu-attendance/stu-attendance.component';
import { TutorClassesComponent } from './tutor_pages/tutor-classes/tutor-classes.component';
import { ForgetPsdComponent } from './forget-psd/forget-psd.component';
import { RegisterSplitPageComponent } from './register-split-page/register-split-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { AdminCredentialsComponent } from './admin-pages/admin-credentials.component';
import { AdminStudentDataListComponent } from './admin-pages/admin-student-data-list/admin-student-data-list.component';
import { AdminTutorDataListComponent } from './admin-pages/admin-tutor-data-list/admin-tutor-data-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StuRegisterComponent,
    TutorRegisterComponent,
    TutorHomePageComponent,
    StuHomePageComponent,
    ScanPageComponent,
    StuAttendanceComponent,
    TutorClassesComponent,
    ForgetPsdComponent,
    RegisterSplitPageComponent,
    LogoutComponent,
    AdminCredentialsComponent,
    AdminStudentDataListComponent,
    AdminTutorDataListComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}

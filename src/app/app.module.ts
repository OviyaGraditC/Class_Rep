import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StuRegisterComponent } from './stu-register/stu-register.component';
import { TutorRegisterComponent } from './tutor-register/tutor-register.component';
import { TutorHomePageComponent } from './tutor-home-page/tutor-home-page.component';
import { StuHomePageComponent } from './stu-home-page/stu-home-page.component';
import { ScanPageComponent } from './scan-page/scan-page.component';
import { StuAttendanceComponent } from './stu-attendance/stu-attendance.component';
import { TutorClassesComponent } from './tutor-classes/tutor-classes.component';
import { ForgetPsdComponent } from './forget-psd/forget-psd.component';
import { RegisterSplitPageComponent } from './register-split-page/register-split-page.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';

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
    LogoutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstant } from '../common/global.constant';
import { SessionServiceService } from '../service/session-service.service';
import { ApiServiceService } from '../service/api-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  forgetPsd: string = "/forget_psd"
  stu_register: string = "/stu_register"
  split_register_page: string = "/register_split_page"
  username: string = "";
  password: string = "";
  msg: string = "";
  loginType: string = "";
  loginTypes = {
    loginType: '', student: 'Student', tutor: 'Tutor', admin: 'Admin'
  }


  constructor(
    private sessionService: SessionServiceService,
    private apiService: ApiServiceService,
    private router: Router,
    private httpClient: HttpClient) { }

  check_login() {
   if (this.loginType == "Student") {
      this.apiService.getLoginUser(this.username, this.password).subscribe(
        (users: any) => {
          if (users && users.length > 0 && users[0].username == this.username && users[0].password == this.password) {    
            this.sessionService.setSession(GlobalConstant.loggedInUser, this.username);
            this.router.navigate(['/stu_homepage']);
            // this.msg="Successful";
          }
          else {
            this.msg = "Username or Password is Wrong";
          }
        },
        err => {
          console.log(err);
        }
      )
    }
    else if(this.loginType == "Tutor")
    {
      this.apiService.getLoginTutor(this.username, this.password).subscribe(
        (users: any) => {
          if (users && users.length > 0 && users[0].username == this.username && users[0].password == this.password) {
            this.sessionService.setSession(GlobalConstant.loggedInUser, this.username);
            // console.log("Successful");
            this.router.navigate(['/tutor_homepage']);
            // this.msg="Successful";
          }
          else {
            this.msg = "Username or Password is Wrong";
          }
        },
        err => {
          console.log(err);
        }
      )
    }
    else 
      {
        this.apiService.getLoginAdmin(this.username, this.password).subscribe(
          (users: any) => {
            if (users && users.length > 0 && users[0].username == this.username && users[0].password == this.password) {
              this.sessionService.setSession(GlobalConstant.loggedInUser, this.username);
              // console.log("Successful");
              this.router.navigate(['/admin']);
              // this.msg="Successful";
            }
            else {
              this.msg = "Username or Password is Wrong";
            }
          },
          err => {
            console.log(err);
          }
        )
      }

  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstant } from '../common/global.constant';
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
    loginType: '', student: 'Student', tutor: 'Tutor'
  }


  constructor(
    private sessionService: ApiServiceService,
    private router: Router,
    private httpClient: HttpClient) { }

  check_login() {
    if (this.loginType == "Student") {
      let apiurl = GlobalConstant.stuApiURL + "?username=" + this.username + "&password=" + this.password;
      this.httpClient.get(apiurl).subscribe(
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
    else 
    {
      let apiurl = GlobalConstant.tutorApiURL + "?username=" + this.username + "&password=" + this.password;
      this.httpClient.get(apiurl).subscribe(
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

  }
}

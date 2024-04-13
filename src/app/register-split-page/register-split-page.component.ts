
import { ApiServiceService } from '../service/api-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register-split-page',
  templateUrl: './register-split-page.component.html',
  styleUrls: ['./register-split-page.component.scss']
})


export class RegisterSplitPageComponent {
  stu_register: string = "/stu_register"
  tutor_register: string = "/tutor_register" 
  loginTypes = { student: 'Student', tutor: 'Tutor', logintype:''};
loginType : string = "";
  constructor(
    private sessionService: ApiServiceService,
    private router: Router) { }

  redirect_user() {
    if (this.loginType == 'Student') {
      this.router.navigate(['/stu_register'])
    }else if(this.loginType == 'Tutor')
    {
      this.router.navigate(['/tutor_register'])
    }
  }
}


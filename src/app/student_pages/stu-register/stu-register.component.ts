import { Component } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
import { GlobalConstant } from '../../common/global.constant';
import { Router } from '@angular/router';
import { SessionServiceService } from '../../service/session-service.service';

@Component({
  selector: 'app-stu-register',
  templateUrl: './stu-register.component.html',
  styleUrls: ['./stu-register.component.scss']
})
export class StuRegisterComponent {
  username: string = "";
  contactnumber: number = 0;
  password: string = "";
  course: string = "";

  constructor(
    private apiServiceService : ApiServiceService,
    private router : Router,
    private sessionService : SessionServiceService
  ){}

  addStudent() {
    let studentData = {
      "course": this.course,
      "password": this.password,
      "username": this.username,
      "contactnumber": this.contactnumber
    };

    this.apiServiceService.addStudentData(studentData).subscribe(
      ()=>{
        this.sessionService.setSession(GlobalConstant.loggedInUser, this.username);
        alert("Added Successfully");
      },
      err   => 
        {
          console.log(err);   
        }
       )
  }
}

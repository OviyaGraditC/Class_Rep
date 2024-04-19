import { Component } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
import { Router } from '@angular/router';
import { SessionServiceService } from '../../service/session-service.service';

@Component({
  selector: 'app-tutor-register',
  templateUrl: './tutor-register.component.html',
  styleUrls: ['./tutor-register.component.scss']
})
export class TutorRegisterComponent {

  username: string = "";
  password: string = "";
  contactnumber: number = 0;
  course: string = "";
  confirmpsd:string = "";
login :string="/login";

  constructor(
    private apiServiceService: ApiServiceService,
    private router: Router,
    private sessionService: SessionServiceService
  ) { }

  emptyfields() {
    this.username = "";
    this.password = "";
    this.contactnumber = 0;
    this.course = "";
    this.confirmpsd = "";
  }

  addTutor() {
    let tutorData = {
      "course": this.course,
      "password": this.password,
      "username": this.username,
      "contactnumber": this.contactnumber
    };

    this.apiServiceService.addTutorData(tutorData).subscribe(
      () => {
        alert("Added Successfully");
        this.emptyfields();
      },
      err => {
        console.log(err);
      }
    )
  }

}

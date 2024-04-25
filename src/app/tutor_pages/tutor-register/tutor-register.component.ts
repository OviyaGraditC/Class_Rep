import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
import { Router } from '@angular/router';
import { SessionServiceService } from '../../service/session-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-tutor-register',
  templateUrl: './tutor-register.component.html',
  styleUrls: ['./tutor-register.component.scss']
})
export class TutorRegisterComponent implements OnInit {

  // username: string = "";
  // password: string = "";
  // contactnumber: number = 0;
  // course: string = "";
  // confirmpsd: string = "";
  login: string = "/login";

  tutor_register: any;

  ngOnInit(): void {
    this.tutor_register = new FormGroup({
      username: new FormControl('', Validators.required),
      contactnumber: new FormControl('', Validators.maxLength(10)),
      course: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmpsd: new FormControl('', Validators.required)
    })
  }

  constructor(
    private apiServiceService: ApiServiceService,
    private router: Router,
    private sessionService: SessionServiceService
  ) { }

  emptyfields() {
    // this.tutor_register.username = "";
    // this.tutor_register.password = "";
    // this.tutor_register.contactnumber = 0;
    // this.tutor_register.course = "";
    // this.tutor_register.confirmpsd = "";
  }

  addTutor() {
    // let tutorData = {
    //   "course": this.tutor_register.course,
    //   "password": this.tutor_register.password,
    //   "username": this.tutor_register.username,
    //   "contactnumber": this.tutor_register.contactnumber
    // };

    //window.location.reload();

    this.apiServiceService.addTutorData(this.tutor_register.value).subscribe(
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

import { Component } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor-home-page',
  templateUrl: './tutor-home-page.component.html',
  styleUrls: ['./tutor-home-page.component.scss']
})
export class TutorHomePageComponent {

  constructor(
    private sessionService : ApiServiceService,
    private router : Router
  ){}

  OnInit():void
  {
    this.sessionService.checkSessionOutput();
  }

}

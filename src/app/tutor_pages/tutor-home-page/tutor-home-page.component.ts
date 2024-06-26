import { Component } from '@angular/core';
import { SessionServiceService } from '../../service/session-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor-home-page',
  templateUrl: './tutor-home-page.component.html',
  styleUrls: ['./tutor-home-page.component.scss']
})
export class TutorHomePageComponent {

  constructor(
    private sessionService : SessionServiceService,
    private router : Router
  ){}

  ngOnInit():void
  {
    this.sessionService.checkSessionOutput();
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionServiceService } from './service/session-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'class_rep';
  login :string = "/login";
  constructor(private router:Router,
    private sessionService : SessionServiceService
  )
  {}

  usertype = this.sessionService.getUserSession()

  logoutPage()
  {
    this.router.navigate(['/logout']);
  }
}

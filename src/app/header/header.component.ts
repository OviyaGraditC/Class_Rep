import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionServiceService } from '../service/session-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
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
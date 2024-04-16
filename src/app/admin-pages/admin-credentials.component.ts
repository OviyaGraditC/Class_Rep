import { Component , OnInit } from '@angular/core';
import { SessionServiceService } from '../service/session-service.service';
import { ApiServiceService } from '../service/api-service.service';
import { Router } from '@angular/router';
import { GlobalConstant } from '../common/global.constant';

@Component({
  selector: 'app-admin-credentials',
  templateUrl: './admin-credentials.component.html',
  styleUrls: ['./admin-credentials.component.scss']
})
export class AdminCredentialsComponent implements OnInit {
  
  constructor(
    private sessionService : SessionServiceService,
    private router : Router
  ){}

  ngOnInit():void
  {
    this.sessionService.checkSessionOutput();
  }
}

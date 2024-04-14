import { Component } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stu-home-page',
  templateUrl: './stu-home-page.component.html',
  styleUrls: ['./stu-home-page.component.scss']
})
export class StuHomePageComponent {

  constructor(
    private router : Router,
    private sessionService : ApiServiceService
  ){}

  OnInit():void
  {
    this.sessionService.checkSessionOutput();
  }
}

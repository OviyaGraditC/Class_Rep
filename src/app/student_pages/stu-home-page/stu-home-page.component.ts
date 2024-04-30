import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionServiceService } from '../../service/session-service.service';

@Component({
  selector: 'app-stu-home-page',
  templateUrl: './stu-home-page.component.html',
  styleUrls: ['./stu-home-page.component.scss']
})

export class StuHomePageComponent {

  constructor(
    private router : Router,
    private sessionService : SessionServiceService
  ){}
  ngOnInit(): void {
        this.sessionService.checkSessionOutput();
  }
  scan_btn()
  {
    this.router.navigate(['/scan_page']);
  }
}

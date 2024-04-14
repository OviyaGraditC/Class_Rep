import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit{


constructor(
  private sessionService : ApiServiceService,
  private router : Router
)
{}
timer:number=5;
ngOnInit(): void {
  this.sessionService.deleteSession("loggedInUser")
  setInterval(()=> {
    this.timer--;
if(this.timer==0)
{
  this.router.navigate(['/login']);
}
},1000)
}
}



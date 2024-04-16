import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { HttpClient } from '@angular/common/http';
import { SessionServiceService } from 'src/app/service/session-service.service';
import { Router } from '@angular/router';
import { GlobalConstant } from 'src/app/common/global.constant';

@Component({
  selector: 'app-admin-student-data-list',
  templateUrl: './admin-student-data-list.component.html',
  styleUrls: ['./admin-student-data-list.component.scss']
})
export class AdminStudentDataListComponent  implements OnInit{
  stuData:any[] =[];
  
  constructor(
    private sessionService : SessionServiceService,
    private router : Router,
    private apiService : ApiServiceService
  ){}

  ngOnInit(): void {
    this.sessionService.checkSessionOutput();
    this.viewStudentDetails();    

  }

  viewStudentDetails(){    
    this.apiService.getAllStuDataApi(GlobalConstant.stuApiURL).subscribe(
      
      (response : any)=>{    
        console.log(response);
        this.stuData = response;
      },
      err => {
        console.log(err);
      }
    );
  }

  
  
  deleteData(itemId:string){
    this.apiService.delStudentData(itemId).subscribe(
      ()=>{
        let apiUrl = GlobalConstant.stuApiURL + "/" + itemId;
        this.apiService.deleteApi(apiUrl);
        alert("deleted Successfully");
      },
      err   => 
        {
          console.log(err);   
        }
       )
  }

}

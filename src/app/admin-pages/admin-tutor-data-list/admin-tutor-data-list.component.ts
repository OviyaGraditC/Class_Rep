import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstant } from 'src/app/common/global.constant';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { SessionServiceService } from 'src/app/service/session-service.service';

@Component({
  selector: 'app-admin-tutor-data-list',
  templateUrl: './admin-tutor-data-list.component.html',
  styleUrls: ['./admin-tutor-data-list.component.scss']
})
export class AdminTutorDataListComponent implements OnInit {
  tutorData:any[] =[];
  
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
    this.apiService.getAllTutorDataApi(GlobalConstant.tutorApiURL).subscribe(
      
      (response : any)=>{    
        console.log(response);
        this.tutorData = response;
      },
      err => {
        console.log(err);
      }
    );
  }


  deleteData(itemId:string){
    this.apiService.delTutorData(itemId).subscribe(
      ()=>{
        let apiUrl = GlobalConstant.tutorApiURL + "/" + itemId;
        this.apiService.deleteApi(apiUrl);
        alert("deleted Successfully");
        this.viewStudentDetails()
      },
      err   => 
        {
          console.log(err);   
        }
       )
  }

  updateData(itemId:string){
    this.apiService.delTutorData(itemId).subscribe(
      ()=>{
        let apiUrl = GlobalConstant.tutorApiURL + "/" + itemId;
        this.apiService.deleteApi(apiUrl);
        alert("deleted Successfully");
        this.viewStudentDetails()
      },
      err   => 
        {
          console.log(err);   
        }
       )
  }
}

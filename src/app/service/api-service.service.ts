import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstant } from '../common/global.constant';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  
  constructor(
    private httpClient : HttpClient
  ){}

  getLoginUser(userName: string, pswd:string){
    let apiUrl = GlobalConstant.stuApiURL + "?username=" + userName + "&password=" + pswd;
    return this.getApi(apiUrl);

  }

  getLoginTutor(userName: string, pswd:string){
    let apiUrl = GlobalConstant.tutorApiURL + "?username=" + userName + "&password=" + pswd;
    return this.getApi(apiUrl);

  }

  getLoginAdmin(userName:string, pswd:string)
  {
    let apiUrl = GlobalConstant.adminApiURL + "?username=" + userName + "&password=" + pswd;
    return this.getApi(apiUrl);
  }

  getApi(apiUrl:string){
    return this.httpClient.get(apiUrl);        
  }
 
  deleteApi(apiUrl:string){
    return this.httpClient.delete(apiUrl);
  }

  addStudentData(studentData:any)
  {
    return this.postApi(GlobalConstant.stuApiURL,studentData);
  }

  addTutorData(tutorData:any)
  {
    return this.postApi(GlobalConstant.tutorApiURL,tutorData);
  }

  postApi(apiUrl:string, userData:any)
  {
    return this.httpClient.post(apiUrl,userData);
  }

  getStudentDataApi(userName: string){
    
    console.log("Success");
    let apiUrl = GlobalConstant.stuApiURL + "?username=" + userName;
    return this.getApi(apiUrl);
  }

  getAllStuDataApi(ApiURL:string){
    
    console.log("Success");
    let apiUrl = GlobalConstant.stuApiURL ;
    return this.getApi(apiUrl);
  }

  getAllTutorDataApi(ApiURL:string){
    
    console.log("Success");
    let apiUrl = GlobalConstant.tutorApiURL ;
    return this.getApi(apiUrl);
  }
  
  delStudentData(studentData:any)
  {
    let apiUrl = GlobalConstant.stuApiURL +"/" + studentData;
    return this.deleteApi(apiUrl);
  }

  delTutorData(tutorData:any)
  {
    let apiUrl = GlobalConstant.tutorApiURL +"/" + tutorData;
    return this.deleteApi(apiUrl);
  }
}

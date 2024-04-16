import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstant } from '../common/global.constant';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {

  constructor(private router : Router) { }

  setSession(ssKey:string, ssValue:string):void
  {
  sessionStorage.setItem(ssKey,ssValue);
  }
  
  deleteSession(sskey:string)
  {
    sessionStorage.removeItem(sskey);
  }
  
  checkSession(ssKey:string) : boolean
  {
    let ssValue = sessionStorage.getItem(ssKey) || "";
    if(ssValue == "")
       {
        return false;
       }
       else
       {
        return true;
       }
  }
  
  checkSessionOutput()
  {
    if(!this.checkSession(GlobalConstant.loggedInUser))
      {
        this.router.navigate(['/login']);
      }
  }

  getUserSession(){
    return sessionStorage.getItem(GlobalConstant.loggedInUser) || '';
  }
}

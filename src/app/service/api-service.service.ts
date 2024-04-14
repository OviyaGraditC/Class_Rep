import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

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
  if(!this.checkSession)
    {
      this.router.navigate(['/login']);
    }
}
}

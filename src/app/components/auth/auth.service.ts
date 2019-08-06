import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router:Router
  ) { }

  isLoggedIn(){
    let token=localStorage.getItem('token');
    if(token!==null){
      return true;
    }
    else{
      return false
    }
  }


  loggedIn(user){
    console.log("user=>>>>>>>>>>>>>>>>>",user);
    
    localStorage.setItem('name',user.name)
    localStorage.setItem('email',user.email)
    localStorage.setItem('token',user.token);
    return ;
  }
  loggedOut(){
    localStorage.clear();
  return;
  }

}

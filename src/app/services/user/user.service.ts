import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/http/user/user-service.service';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpService,
    private route:ActivatedRoute
  ) { }

  register(userData){
   return  this.http.post('register',userData);
  }
  login(userData){
    return this.http.post('login',userData);
  }
  forget(userData){
    return this.http.post('forgetPassword',userData);
  }
  reset(userData){
    let token=this.route.snapshot.paramMap.get("token");
    return this.http.post('reset/'+token,userData);
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements  CanActivate{
  constructor(
    private authService:AuthService,
    private route:Router
    ){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(localStorage.getItem('token')!==null){
      return true;


    }
    else{
      this.route.navigateByUrl('login');

      return false;
    }
  }
  
}

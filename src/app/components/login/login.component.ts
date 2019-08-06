import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Login } from 'src/app/core/models/login';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  getErrorEmailMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getErrorPasswordMessage(){
    return this.password.hasError('required')?'Password cannot be empty':
      this.password.hasError('minlength')?"Password should have 8 characters":"";
  }
  login:Login=new Login()

  constructor(
    private userService:UserService,
    private snackbar:MatSnackBar,
    private route:Router,
    private authService:AuthService
    ) { }

  ngOnInit() {
  }

  loginSubmit(){
    var userData={
      "email":this.login.email,
      "password":this.login.password
    }
    console.log('login data ====>',userData);
    
    this.userService.login(userData).subscribe(
      (response:any)=>{
        console.log('login response ==>',response);
        this.snackbar.open("login successful","End Now ",{duration:4000})
       

        this.route.navigate(['/dashboard']);
        this.authService.loggedIn(response);
      },
      error => {
        console.log("error after register: 46 --------", error);
        this.snackbar.open("login failed","End Now ",{duration:4000})

      }
    )
  }
}


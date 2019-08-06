import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material';

import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Forget } from 'src/app/core/models/forget/forget';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {

  forget: Forget = new Forget()
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private snackbar:MatSnackBar,
    private route:Router,
    private userService:UserService
  ) { }

  ngOnInit() {
  }

  getErrorEmailMessage() {
    if (this.email.hasError('required')) {
      return 'Email cannot be empty';
    }
    else if (this.email.hasError('email')) {
      return "invalid email"
    }
    else {
      return "";
    }
  }
  forgetSubmit(){
    console.log('checking data=>>',this.forget.email );
    
    var userData={
      "email":this.forget.email
    }
    this.userService.forget(userData).subscribe(
      (response:any)=>{
        console.log('forget response ==>',response.data);
        
        this.snackbar.open("Reset Link is sent ","End Now ",{duration:4000})
    
      }),
      error => {
        console.log("error after link sent: 46 --------", error);
        this.snackbar.open("login failed","End Now ",{duration:4000})
      }

  }
}

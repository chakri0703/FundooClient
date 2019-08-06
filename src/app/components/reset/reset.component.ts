import { Component, OnInit } from '@angular/core';


import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Reset } from 'src/app/core/models/reset/reset';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  reset:Reset=new Reset();
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(
    private snackbar:MatSnackBar,
    private router:Router,
    // private token,
    private userService:UserService,
  
  ) { 
    
  }

  ngOnInit() {
  
  }
  getErrorPasswordMessage(){
    return this.password.hasError('required')?'Password cannot be empty':
      this.password.hasError('minlength')?"Password should have 8 characters":"";
  }
  submitPassword(){
    
    // console.log(this.token);
    // this.token=this.route.snapshot.paramMap.get("token");
   

    let userData={
      "password":this.reset.password,
      "confirmPassword":this.reset.confirmPassword
    }

    this.userService.reset(userData).subscribe(
      (response:any)=>{
        console.log('forget response ==>',response.data);
        
        this.snackbar.open("Password Changed Sucessfully ","End Now ",{duration:4000})
    
        this.router.navigateByUrl('login');
      }),
      error => {
        console.log("error after link sent: 46 --------", error);
        this.snackbar.open("reset failed","End Now ",{duration:4000})
      }
  }
  
}

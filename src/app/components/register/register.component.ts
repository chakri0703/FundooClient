import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { log } from 'util';
import { Register } from 'src/app/core/models/register';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register:Register=new Register();
  passwordType:boolean=true;
  constructor(
    private userService:UserService,
    private snackbar: MatSnackBar
  ) {

  }

  ngOnInit() {
  }

  name = new FormControl('', [Validators.required, Validators.minLength(5)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  confirmPassword=new FormControl('',[Validators.required,Validators.minLength(8)]);
  getErrorNameMessage() {
    if (this.name.hasError('required')) {
      return 'Name cannot be empty';
    }
    else if (this.name.hasError('minlength')) {
      return "Name should have 5 characters"
    }
    else {
      return "";
    }
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

  getErrorPasswordMessage() {
    if (this.password.hasError('required')) {
      return 'Password cannot be empty';
    }
    else if (this.password.hasError('minlength')) {
      return "Password should have 8 characters"
    }
    else {
      return "";
    }
  }

  getErrorConfirmPasswordMessage(){
    if(this.confirmPassword.hasError('required')){
      return 'Confirm Password Cannot be empty'
    }
    else if(this.password.value!==this.confirmPassword.value){
      return 'Passwords are not Matching'
    }
    else
    {
      return "";
    }
  }
  
  registerSubmit() {
    var userData = {
      "name": this.register.name,
      "email": this.register.email,
      "password": this.register.password
    }
    console.log("register body check ===>", userData);
    
    this.userService.register(userData).subscribe(
      (response) => {
        console.log('register done ==>', response);
        this.snackbar.open("registeratin successful", "End Now ", { duration: 4000 })
      },
      error => {
        console.log("error after register: 46 --------", error);
        this.snackbar.open("registeratin failed", "End Now ", { duration: 4000 })

      }
    )
  }


}

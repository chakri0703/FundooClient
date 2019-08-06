import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'

import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashBoardComponent implements OnInit {

  constructor(
    private route: Router,
 
    private snackBar:MatSnackBar,
  ) { }

  ngOnInit() {
    
  }

  logOut() {
    localStorage.clear();
    this.route.navigateByUrl('login');
  }
  // getArchive() {
  //   this.getNotes.getAllArchived().subscribe(
  //     (response:any)=>{
  //       console.log(response);
        
  //     },
  //     error=>{
  //       console.log(error);
        
  //     }
  //   )
  // }

  signOut(){
    localStorage.clear();
  }
}

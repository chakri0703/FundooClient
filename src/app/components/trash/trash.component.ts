import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note/note-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  constructor(
    private noteService:NoteServiceService,
    private snackbar:MatSnackBar,
  ) { }

  ngOnInit() {
    this.getAllDelete();
  }

  delete(note){
   this.noteService.delete(note).subscribe(
     (response:any)=>{

      console.log("response123 ====>",response.data);
      this.snackbar.open("deleted sucessfully","end now",{duration:4000});
     },
     (errors)=>{
        console.log("errors====>",errors);
        
     }
   )
    
  }
  restore(note){
    console.log(note);

    this.noteService.restore(note).subscribe(
      (response:any)=>{
        console.log("checking response=====>",response);
        this.snackbar.open("restored sucessfully","end now",{duration:4000});
      },
      (errors)=>{
        console.log("errors=====>",errors);
        this.snackbar.open("restoring failed","end now",{duration:4000});
        
      }
    )
    
  }
  
  
  getAllDelete(){
    console.log("enter the get all trash");
    console.log("printing all trash notes==>",this.allNotes);
    
    this.noteService.getAllDelete().subscribe(
      (response:any)=>{
        let data:any=response.data;
       console.log("response ====>",data);
       localStorage.setItem('trash', JSON.stringify(data));
       
      },
      (errors)=>{
         console.log("errors====>",errors);
         
      })
  }
  allNotes: any = JSON.parse(localStorage.getItem('trash'));
  
}

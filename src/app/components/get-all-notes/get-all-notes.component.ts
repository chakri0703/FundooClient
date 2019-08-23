import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/services/note/note-service.service';
// import { EditNoteComponent } from '../edit-note/edit-note.component';
import { Component, OnInit, Inject } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatDialog } from '@angular/material';
import { OpendialogComponent } from '../opendialog/opendialog.component';
@Component({
  selector: 'app-getallnotes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  // dialog: any;

  constructor(
    public dialog:MatDialog,
    private snackbar: MatSnackBar,
    private noteService: NoteServiceService,
    
  ) { }

  ngOnInit() {
    this.getAllNotes();
  }

  

  getAllNotes() {

    this.noteService.getAllNotes().subscribe(
      (response: any) => {
        console.log('data check ===>', response.data);
        localStorage.setItem('notes', JSON.stringify(response.data))

      },
      error => {
        console.log("error ", error);

      }
    )
  }
  allNotes: any = JSON.parse(localStorage.getItem('notes'));
  
  // openDialog(note): void {
  //   console.log("dialouge box", this.allNotes);
    
  //   const dialogRef = this.dialog.open(EditNoteComponent, { panelClass:'myapp-no-padding-dialog',
  //   // width: '50%',height:'25%',
  //   data: { name: note }
  //   });
    
  //   dialogRef.afterClosed().subscribe(result => {
  //   console.log('The dialog was closed');
  //   console.log("dialougebox result", result);
  //   });
  //   }


  
  archive(note){
    // console.log(note);
    
    let noteData={
      "title":note.title,
      "description":note.description
    }
    console.log(noteData);
    
    this.noteService.archive(noteData).subscribe(
      (response:any)=>{
        console.log(response);
        this.snackbar.open("note Archived","end now",{duration:3000})
      },
      error=>{
        console.log(error);
        this.snackbar.open("not possible ","end now",{duration:3000})
        this.noteService.getAllNotes().subscribe(
          (response: any) => {
            console.log('data check ===>', response);
            localStorage.setItem('notes', JSON.stringify(response))
    
          },
          error => {
            console.log("error ", error);
    
          }
        )
      }
    )

  }
  delete(note){
    // console.log(note);
  
      let noteData={
        "title":note.title,
        "description":note.description
      }
      console.log(noteData);
      
      this.noteService.deleteNote(noteData).subscribe(
        (response:any)=>{
          console.log(response);
          this.snackbar.open("note Deleted Sucessfully","end now",{duration:3000})
        },
        error=>{
          console.log(error);
          this.snackbar.open("failed to delete note","end now"+error,{duration:3000})
        }
      )
  }
  openDialog(note){
    let dialogRef= this.dialog.open(OpendialogComponent,{data:note}
    )
    
  
    dialogRef.afterClosed().subscribe(result=>{
      console.log("result",note);
      
      this.noteService.updateNote(note).subscribe(
        (response:any)=>{
          console.log("response from api===>",response);
          this.snackbar.open("update sucessfull","end now",{duration:3000});
        },
        error=>{
          console.log("error ==>",error);
          this.snackbar.open("update failed","end now",{duration:3000});
        }
      )
    })
}
}

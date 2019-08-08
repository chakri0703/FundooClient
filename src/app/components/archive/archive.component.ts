import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note/note-service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor(
    private noteService: NoteServiceService,
    private snackbar:MatSnackBar,
  ) { }

  ngOnInit() {
    this.getAllArchive();
  }
  allNotes: any = JSON.parse(localStorage.getItem('archived'));
  getAllArchive() {
    console.log("Archived Notes");
    this.noteService.getAllArchive().subscribe(
      (response: any) => {
        console.log("archived notes=====>", response.data);
        localStorage.setItem('archived', JSON.stringify(response.data))

      },
      (errors) => {
        console.log("errors====>", errors);

      }
    )
  }
  unArchive(note) {
    this.noteService.unarchive(note).subscribe(
      (response:any)=>{
        console.log("unarchive sucessfully");
        
        this.snackbar.open("unArchived sucessfully","end now",{duration:4000})
      },
      (errors)=>{
        console.log("errors ",errors);
        this.snackbar.open("failed to unarchive","endnow",{duration:4000})
      }
    )

  }


}

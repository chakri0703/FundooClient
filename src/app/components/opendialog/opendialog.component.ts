import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Note } from 'src/app/core/models/note/note';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-opendialog',
  templateUrl: './opendialog.component.html',
  styleUrls: ['./opendialog.component.scss']
})
export class OpendialogComponent implements OnInit {

  note: Note = new Note();
  title = this.data.title
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }



  // title=new FormControl(this.data.title)
  ngOnInit() {
    console.log(this.data);

  }

  update(){
    console.log("title==>",this.data.title);
    console.log("description==>",this.data.description);
    console.log("id==>",this.data._id);
    
        
  }

}

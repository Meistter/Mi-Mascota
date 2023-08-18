import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-sucess-popup',
  templateUrl: './sucess-popup.component.html',
  styleUrls: ['./sucess-popup.component.scss']
})
export class SucessPopupComponent {

  constructor(public dialogRef: MatDialogRef<SucessPopupComponent>) {}
    
    close(){
      this.dialogRef.close()
    }
}

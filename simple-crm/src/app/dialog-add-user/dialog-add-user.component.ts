import { Component, OnInit } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, NgModel } from '@angular/forms';
import { User } from '../models/user.class';
import { FirebaseService } from '../services/firebase.service';
import { addDoc, collection } from '@angular/fire/firestore';
@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatFormField,
    MatInputModule,
    MatDatepicker,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  birthDate =new Date();
  picker1: any;
  constructor( private firebase: FirebaseService, public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  ngOnInit(): void {}



  async saveUser(){
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current User is', this.user)

    await addDoc(collection(this.firebase.firestore, 'users'), this.user.toJSON()).catch(
      (err) => { console.error(err) }
    ).then(
      (user) => {
        console.log(user);
      }
    )

    this.dialogRef.close();
  }
}

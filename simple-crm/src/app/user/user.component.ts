import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { FirebaseService } from '../services/firebase.service';  // Importieren Sie den FirebaseService
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule, MatTooltipModule, MatCardModule,CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  users: User[] = [];  // Halten Sie die Benutzerdaten in einem Array
  private usersSubscription: Subscription | undefined;
  user = new User();
  birthDate: Date = new Date();

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[1]);

  constructor(private router: Router, public dialog: MatDialog, private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.usersSubscription = this.firebaseService.users$.subscribe((users) => {
      this.users = users;
    });
  }

  ngOnDestroy(): void {
    if (this.usersSubscription) {
      this.usersSubscription.unsubscribe();
    }
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule, TooltipPosition} from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
position = new FormControl(this.positionOptions[1]);
  constructor(private router: Router) {} 
}

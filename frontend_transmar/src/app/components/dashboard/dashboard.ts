import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}

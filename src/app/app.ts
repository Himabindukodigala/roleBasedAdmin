
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { Navbar } from './shared/navbar/navbar/navbar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,Narbar,        // ✅ for *ngFor
    MatTableModule,        // ✅ for mat-table
    MatSlideToggleModule,  // ✅ for toggle
    MatCardModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('roleBasedAdmin');
} 

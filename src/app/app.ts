import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,Navbar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('roleBasedAdmin');
} 

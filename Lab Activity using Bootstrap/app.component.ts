
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Data Binding';
  clientName = 'Nickaella Notra'; //property
  appliedCSS = 'green'; //style
  notAppliedCSS = false;
  myColor = 'red';
  center = 'center';

  clickCount = 0 
  clickMe(){
    this.clickCount++;
  }

  resetClickCount(){
    this.clickCount = 0;
  }
}

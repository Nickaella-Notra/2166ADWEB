import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //Using ngIf to toggle text display
  showText: boolean = false;
  toggleText() {
    this.showText = !this.showText;
  }
  staff = [ 
    { firstName: 'Gojo', lastName: 'Satoru', email: 'Gojong@jjk.com', role: 'Monday' },   
    { firstName: 'Geto', lastName: 'Suguru', email: 'Getong@jjk.com', role: 'Tuesday' }, 
    { firstName: 'Megumi', lastName: 'Fushigoro', email: 'Meguming@jjk.com', role: 'Wednesday' }, 
    { firstName: 'Nanami', lastName: 'Kento', email: 'Nanaming@jjk.com', role: 'Thursday' }, 
    { firstName: 'Sukuna', lastName: 'Ryomen', email: 'Sukunang@jjk.com', role: 'Friday' } 
    ];
}

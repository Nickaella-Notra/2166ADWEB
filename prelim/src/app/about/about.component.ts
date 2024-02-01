import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  clickCount = 0;
  giftEmoji = '';

  clickMe(){
    this.clickCount++;
    this.giftEmoji = '🎁';
  }

  showData($event:any){
    console.log("button is clicked!"); 
    if($event){
      console.log($event.target);
      console.log($event.target.value);
    }
  }

  getFontSize(){
    return Math.min(1000, 20 + this.clickCount * 5) + 'px';
  }
  reset(){
    this.clickCount = 0;
    this.giftEmoji = '';
  }
}

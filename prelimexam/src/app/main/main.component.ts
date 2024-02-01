import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  // String Interpolation
  Title1 = "France"
  Title2 = "Bangkok"
  Title3 = "Manila"
  Title4 = "Tokyo"
  
  


  //Image Interpolation/binding
  ImageUrl1: string = "../../assets/bangkok.jpg"
  ImageUrl2: string = "../../assets/france.jpg"
  ImageUrl3: string = "../../assets/manila.jpeg"
  ImageUrl4: string = "../../assets/tokyo.jpeg"


}

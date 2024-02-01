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
  
  Desc1 = "A European jewel with a rich history and iconic landmarks like the Eiffel Tower. Paris, a global hub for art and cuisine, seamlessly blends tradition with modernity."
  Desc2 = "Thailand's vibrant capital, blending tradition and modernity. Ornate temples, bustling markets, and a dynamic culinary scene make it a captivating destination pulsating with cultural energy."
  Desc3 = "Bustling capital of the Philippines, Manila boasts a rich cultural heritage, blending Spanish colonial and modern architecture. Vibrant street life, diverse markets, and a thriving culinary scene define its dynamic spirit."
  Desc4 = "Japan's dynamic capital harmonizes tradition and modernity. With a futuristic skyline, iconic landmarks like Tokyo Skytree, and cultural treasures, Tokyo captivates with its blend of innovation and ancient traditions."


  //Image Interpolation/binding
  ImageUrl1: string = "../../assets/bangkok.jpg"
  ImageUrl2: string = "../../assets/france.jpg"
  ImageUrl3: string = "../../assets/manila.jpeg"
  ImageUrl4: string = "../../assets/tokyo.jpeg"
  ImageUrl5: string = "../../assets/header.jpeg"

  Height1: string = "h-full"
  Width1: string = "w-full"


}
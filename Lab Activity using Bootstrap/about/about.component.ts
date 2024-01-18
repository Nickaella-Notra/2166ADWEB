import { Component } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  // String Interpolation
  name = "Nickaella Notra"
  position = 'student'
  work_experience = 10
  email = 'nickaellanotra10@gmail.com'
  website = 'www.nickanotra.com'
  phone = '099-999-9999' 

  //Image Interpolation/binding
  ImageUrl: string = "../../assets/img/cat.jpeg"
  ImageW: number = 110;
  ImageH: number = 100;
}

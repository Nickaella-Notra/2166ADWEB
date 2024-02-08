import { Component, Pipe, PipeTransform } from '@angular/core';
import { Observable, map, interval } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})



export class AppComponent {
  time$: Observable<Date>;
  title = 'midterm';
  presentDate = new Date();
  name = 'Nickaella Notra';
  constructor(){
    this.time$ = interval(1000).pipe(map(()=> new Date()))
  }
  //CURENCY
  price: number = 1000000;

  //PERCENT
  pnum: number = 0.285;

  //JSON
  data: object = {
    myname: "Acey", gender: "Female", Favgames:[
      {name: "Valorant", type: "FPS"},
      {name: "Stardew Valley", type: "RPG"},
      {name: "ML", type: "MOBA"}
    ] 
  }
  //SLICE
  myArray: any[] = ['quack', 'bokbok', 'kalma'];
  myString: string = "kalma oh baby kalma";


}


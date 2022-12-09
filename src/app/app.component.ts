import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';

  dataToTheCHild = 'Hello am from the parent';

  ngOnInit(){

  }
  childData(event:string){
    console.log(event)
    this.title =  event;
  }

}

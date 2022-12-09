import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('childData') childData !: string;
  data = "Hello am from the child"
  @Output() emitter = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  dataToParent(){
    this.emitter.emit(this.data)
  }

}

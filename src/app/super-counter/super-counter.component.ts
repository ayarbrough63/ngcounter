import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {

  count:number;
  disabled:boolean;
  
  constructor() {
    this.count = 0;
    this.disabled = true;
   }

  
  increment( ) {
    this.count += 3;
    this.disabled = false;
  }

  decrement() {
    if (this.count === 0) return; 
    this.count-=3;
    if (this.count <= 0) {
      this.count = 0
      this.disabled = true;
    }
  }

  ngOnInit() {
  }

}

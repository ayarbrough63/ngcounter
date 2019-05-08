import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter-detail',
  templateUrl: './counter-detail.component.html',
  styleUrls: ['./counter-detail.component.css']
})
export class CounterDetailComponent implements OnInit {

  count:number;
  disabled:boolean;
  
  constructor() {
    this.count = 0;
    this.disabled = true;
   }

  
  increment( ) {
    this.count++;
    this.disabled = false;
  }

  decrement() {
    if (this.count === 0) return; 
    this.count--;
    if (this.count === 0) {
      this.disabled = true;
    }
  }

  ngOnInit() {
  }

}

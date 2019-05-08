import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {

  @Input() count:Counter;
  disabled:boolean;
  
  constructor() {
    this.disabled = true;
   }

  
  increment( ) {
    this.count.value += 3;
    this.disabled = false;
  }

  decrement() {
    if (this.count.value === 0) return; 
    this.count.value -= 3;
    if (this.count.value <= 0) {
      this.count.value = 0
      this.disabled = true;
    }
  }

  ngOnInit() {
  }

}

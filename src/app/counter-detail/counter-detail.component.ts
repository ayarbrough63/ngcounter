import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'counter-detail',
  templateUrl: './counter-detail.component.html',
  styleUrls: ['./counter-detail.component.css']
})
export class CounterDetailComponent implements OnInit {

  @Input() count:Counter;
  disabled:boolean;
  
  constructor() {
    this.disabled = true;
   }

  
  increment( ) {
    this.count.value++;
    this.disabled = false;
  }

  decrement() {
    if (this.count.value === 0) return; 
    this.count.value--;
    if (this.count.value === 0) {
      this.disabled = true;
    }
  }

  ngOnInit() {
  }

}

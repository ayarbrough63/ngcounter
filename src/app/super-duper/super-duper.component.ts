import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'super-duper',
  templateUrl: './super-duper.component.html',
  styleUrls: ['./super-duper.component.css']
})
export class SuperDuperComponent implements OnInit {

  @Input() count:Counter;
  disabled:boolean;
  
  constructor() {
    this.disabled = true;
   }

  start() {
    setInterval(() => {
      this.count.value++
    },1000)
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

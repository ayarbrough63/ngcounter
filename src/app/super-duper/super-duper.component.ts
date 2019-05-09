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
  started:boolean = false;
  
  constructor() {
    this.disabled = true;
   }

  start() {
    if (this.started) return;

    setInterval(() => {
      this.count.value++
    },1000)

    this.started = true;
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

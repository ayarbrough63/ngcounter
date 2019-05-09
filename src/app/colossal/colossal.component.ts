import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'colossal',
  templateUrl: './colossal.component.html',
  styleUrls: ['./colossal.component.css']
})
export class ColossalComponent implements OnInit {

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
    this.count.value += 2;
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


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  counters:number[];
  superCounters:number[];

  constructor() { 
    this.counters = [];
    this.superCounters = [];
  }

  AddCounter() {
    
    if (this.counters.length === 6) {
      this.superCounters.push (0)
      this.counters = []
      console.log('Super')
    } else {
      this.counters.push(0);
      console.log('\'Nuther')
    }
  }

  ngOnInit() {
  }

}

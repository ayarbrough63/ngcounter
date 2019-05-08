import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  counters:Counter[];
  superCounters:Counter[];

  constructor() { 
    this.counters = [];
    this.superCounters = [];
  }

  AddCounter() {
    
    if (this.counters.length === 6) {
      let sumOfCounters = 0;
      for (const ctr of this.counters) {
        console.log(ctr.value)
        sumOfCounters += ctr.value
      }
      const superCounter = new Counter();
      superCounter.value = sumOfCounters;
      this.superCounters.push (superCounter)
      console.log(sumOfCounters)
      this.counters = []
    } else {
      const counter = new Counter();
      counter.value = 0;
      this.counters.push(counter);
      console.log('\'Nuther')
    }
  }

  ngOnInit() {
  }

}

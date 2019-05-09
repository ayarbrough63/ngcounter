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
  superDuperCounters:Counter[];
  colossalCounters:Counter[];

  constructor() { 
    this.counters = [];
    this.superCounters = [];
    this.superDuperCounters = [];
    this.colossalCounters = [];
  }

  AddCounter() {
    if (this.counters.length === 6) {
      if (this.superCounters.length === 3) {
        if (this.superDuperCounters.length === 3) {
          this.incrementColossalCounters()
        } else {
          this.incrementSuperDuperCounters()
        }
      } else {
        this.incrementSuperCounters()
      }
    } else {
      this.incrementCounters()
    }
  }

  incrementCounters() {
    const counter = new Counter();
    counter.value = 0;
    this.counters.push(counter);
  }

  incrementSuperCounters() {
    let sumOfCounters = 0;
    for (const ctr of this.counters) {
      sumOfCounters += ctr.value
    }
    const superCounter = new Counter();
    superCounter.value = sumOfCounters;
    this.superCounters.push (superCounter)
    this.counters = []
  }

  incrementSuperDuperCounters() {
    let sumOfCounters = 0;
    for (const ctr of this.counters) {
      sumOfCounters += ctr.value
    }
    let sumOfSuperCounters = 0;
    for (const ctr of this.superCounters) {
      sumOfSuperCounters += ctr.value
    }
    const superDuperCounter = new Counter();
    superDuperCounter.value = sumOfSuperCounters + sumOfCounters;
    this.superDuperCounters.push (superDuperCounter)
    this.superCounters = []
    this.counters = []
  }

  incrementColossalCounters() {
    let sumOfCounters = 0;
    for (const ctr of this.counters) {
      sumOfCounters += ctr.value
    }
    let sumOfSuperCounters = 0;
    for (const ctr of this.superCounters) {
      sumOfSuperCounters += ctr.value
    }
    let sumOfSuperDuperCounters = 0;
    for (const ctr of this.superDuperCounters) {
      sumOfSuperDuperCounters += ctr.value
    }
    const colosslCounter = new Counter();
    colosslCounter.value = sumOfSuperCounters + sumOfCounters + sumOfSuperDuperCounters;
    this.colossalCounters.push (colosslCounter)
    this.superDuperCounters = []
    this.superCounters = []
    this.counters = []
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  counters:number[];

  constructor() { 
    this.counters = [];
  }

  AddCounter() {
    this.counters.push(0);
  }

  ngOnInit() {
  }

}

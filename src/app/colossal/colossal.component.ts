import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'colossal-counter',
  templateUrl: './colossal.component.html',
  styleUrls: ['./colossal.component.css']
})
export class ColossalComponent implements OnInit {

  @Input() count:Counter;
  
  constructor() {
   }

  start() {
    setInterval(() => {
      this.count.value += 2;
    },1000)
  }
  ngOnInit() {
  }

}


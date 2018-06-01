import { Component, OnInit } from '@angular/core';
import { ChildService } from '../child.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  get title() {
    return this.childDataService.title;
  }
  set title(value: string) {
    this.childDataService.title = value;
  }
  
  get name() {
    return this.childDataService.name;
  }
  set name(value: string) {
    this.childDataService.name = value;
  }
  
  constructor(private childDataService: ChildService) { }

  ngOnInit() {
  }

}

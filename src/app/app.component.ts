import { Component } from '@angular/core';
import { ChildService } from './child.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ ChildService ]
})
export class AppComponent {
  Title: string;
  Name: string;
  
  constructor(private childDataService: ChildService) { }

  SaveCustomerDetails(){
    this.Title =  this.childDataService.title;
    this.Name = this.childDataService.name;
    console.log(this.Title + "" + this.Name);
  }
}

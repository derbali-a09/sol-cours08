import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  people = [
    {name:'Felix Lajoie', age: 14, address:'Laval'},
    {name:'Alain Liam', age: 24, address:'Québec'},
    {name:'Frederick Dupont', age: 33, address:'Montréal'}
  ]
}

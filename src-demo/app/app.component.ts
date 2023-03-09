import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';
  person = {name:'Felix Lajoie', age: 14, address:'Laval'}



  quiSuisJe():void{
    alert("Je suis l'auteur de cette application")
  }
}

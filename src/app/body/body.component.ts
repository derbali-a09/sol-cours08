import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  index = 0

  recettes = {
    entrees: [

    ],
    principaux: [
      { titre: 'Poutine', src: 'poutine.jpg' },
      { titre: 'Pâté chinois', src: 'pate_chinois.jpg' },
      { titre: 'Soupe des légumes', src: 'soupe_legumes.jpg' }
    ],
    desserts:[

    ]
  }


  recetteSuivante(){
    this.index++
    if(this.recettes.principaux.length == this.index){
      this.index = 0
    }
  }
}

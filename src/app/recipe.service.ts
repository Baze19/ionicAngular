import { Injectable } from '@angular/core';
import { Recipie } from '../app/recipies/recipieModel';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipies: Recipie[] = [
    {
      id: 'r1',
      title: 'pizza',
      imageUrl: '/assets/icon/pizza.jpg.jpg',
      ingredient: ['vegetable', 'everyevery'],
    },
    {
      id: 'r2',
      title: 'opg opoor gan',
      imageUrl: '/assets/icon/opg.oporpa.jpg',
      ingredient: ['royco', 'seasoning'],
    },
    {
      id: 'r3',
      title: 'burger',
      imageUrl: '/assets/icon/opg.oporpa.jpg',
      ingredient: ['flour', 'fruits', 'vegetables'],
    },
  ];
  constructor() {}

  getAllRecipie() {
    return [...this.recipies];
  }

  //get single recipie
  getSingleRecipie(recepieId: string) {
    return {
      ...this.recipies.find((f) => {
        return f.id === recepieId;
      }),
    };
  }

  deleteRecipie(recepieId: string) {
    this.recipies = this.recipies.filter(r => {
      return r.id !== recepieId;
    });
  }
}

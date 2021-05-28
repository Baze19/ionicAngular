import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipieModel';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.page.html',
  styleUrls: ['./recipies.page.scss'],
})
export class RecipiesPage implements OnInit {
  recipies: Recipie[] = [
    {
      id: 'r1',
      title: 'spanky vegetables',
      imageUrl: 'https://unsplash.com/photos/-YHSwy6uqvk',
      ingredient: ['vegetable', 'everyevery'],
    },
    {
      id: 'bagutte',
      title: 'maggi',
      imageUrl:
        'https://www.istockphoto.com/photo/heap-of-bread-gm995038782-269379619',
      ingredient: ['royco', 'seasoning'],
    },
  ];
  constructor(private RecipeService: RecipeService) {}

  ngOnInit() {
    this.getAllRecipie();
  }
  async getAllRecipie() {
    const data = await this.RecipeService.getAllRecipie();
    this.recipies = data;
  }

  
}

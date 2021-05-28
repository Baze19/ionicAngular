import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipie } from '../../app/recipies/recipieModel';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedrecipie: Recipie;
  constructor(
    private activatedRoute: ActivatedRoute,
    private RecipeService: RecipeService,
    private route: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('recepieId')) {
        //if the urlparams does not have that id i wasnt to just redirect or navigate to the home page
        return   this.route.navigate(['/recipies']);
      }
      const recepieId = paramMap.get('recepieId');
      console.log(recepieId);
      this.loadedrecipie = this.RecipeService.getSingleRecipie(recepieId);
      console.log('loading', this.loadedrecipie);
    });
  }
  onDelete() {
    console.log('rest', this.loadedrecipie.id);
    this.alertCtrl.create({
      header: 'Delete recipie',
      message: 'Are you sure you want to delete this recipie?',
      buttons: [
        {
          text: 'cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.RecipeService.deleteRecipie(this.loadedrecipie.id);
            this.route.navigate(['/recipies']);
          },
        },
      ],
    }).then(alertEl => alertEl.present())

  }
}

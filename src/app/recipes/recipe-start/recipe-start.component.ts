import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent implements OnInit, OnDestroy {
  message = 'Please select a Recipe.';
  recipeChangesSubscription: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeChangesSubscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          if (recipes.length === 0) {
            this.message = 'You have no recipes!';
          }
        }
      );
    this.recipeService.updateRecipes()
  }

  ngOnDestroy() {
    this.recipeChangesSubscription.unsubscribe();
  }


}

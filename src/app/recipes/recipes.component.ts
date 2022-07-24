import {Component, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";
import {ActivatedRoute, Data, Params} from "@angular/router";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  // currRecipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    // this.recipeService.recipeSelected
    //   .subscribe(
    //     (recipe: Recipe) => {this.currRecipe = recipe;}
    //       );
  }

}

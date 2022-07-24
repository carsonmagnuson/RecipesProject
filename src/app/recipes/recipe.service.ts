import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";

@Injectable({providedIn:'root'})
export class RecipeService{
  // recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'Yummy Af',
      'https://www.thespruceeats.com/thmb/n0iahXlWKJEzXiB9tWQefZjnrF4=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
      [
        new Ingredient('Uncooked Schnitzel', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe(
      'Spaetzle',
      'Just don\'t use mushrooms pls',
      'https://i0.wp.com/memoriediangelina.com/wp-content/uploads/2021/09/Spaetzle-alla-zucca-4.jpg?w=800&ssl=1',
      [
        new Ingredient('Uncooked Spaezle', 30),
        new Ingredient('Olive Oil', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice(); //using slice makes sure we return a copy instead of returning the reference itself
  }


}

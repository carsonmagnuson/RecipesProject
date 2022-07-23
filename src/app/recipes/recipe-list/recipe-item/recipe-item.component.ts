import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('currRecipe') recipe: Recipe;
  // @Output() recipeItemEv: EventEmitter<any> = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }


  onItemClick() {
    this.recipeService.recipeSelected.emit(this.recipe);
    // this.recipeItemEv.emit(this.recipe);
  }

}

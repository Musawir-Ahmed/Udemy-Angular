import { Component, OnInit,Input,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/model/ingredient.model';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeServiceService } from 'src/app/services/recipe.service.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class RecipeDetailComponent implements OnInit {

  recipe:Recipe;
  index:number;

  constructor(private recipeService:RecipeServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.recipe=this.recipeService.getRecipeThroughId(params['id']);
      this.index=params['id'];
    });
  }

  showIngredientToShoppingList(ingredients:Ingredient[])
  {
    this.recipeService.addIngredientToShoppingList(ingredients);
  } 
  
}

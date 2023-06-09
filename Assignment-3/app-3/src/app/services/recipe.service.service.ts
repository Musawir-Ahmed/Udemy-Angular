import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { Ingredient } from '../model/ingredient.model';
import { ShoppingListServiceService } from './shopping-list.service.service';
import { Router,ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  recipeSelection=new EventEmitter<any>();

  private recipes:Recipe[]=[
    new Recipe('Recipe-1','Recipe Description','https://cdn.loveandlemons.com/wp-content/uploads/2017/01/shakshuka-736x1024.jpg',[
      new Ingredient('apple',5),
      new Ingredient('tomato',10),
      new Ingredient('apple',5),
      new Ingredient('tomato',10),
      new Ingredient('apple',5),
      new Ingredient('tomato',10),
      new Ingredient('apple',5),
      new Ingredient('tomato',10),
      new Ingredient('apple',5),
      new Ingredient('tomato',10),
      new Ingredient('apple',5),
      new Ingredient('tomato',10),
    ]),
    new Recipe('Recipe-2','Recipe Description','https://cdn.loveandlemons.com/wp-content/uploads/2017/01/shakshuka-736x1024.jpg',[
      new Ingredient('Suger',5),
      new Ingredient('Corn',10),
    ])
  ];

  getRecipe()
  {
    return this.recipes.slice();
  }
  
  addIngredientToShoppingList(ingredients:Ingredient[])
  {
    this.shoppingList.addIngredients(ingredients);
  }

  constructor(private shoppingList:ShoppingListServiceService,private router: Router,private activatedRoute:ActivatedRoute) { }

  getRecipeThroughId(passedId:number)
  { 
    return this.recipes.slice()[passedId];
  }


}

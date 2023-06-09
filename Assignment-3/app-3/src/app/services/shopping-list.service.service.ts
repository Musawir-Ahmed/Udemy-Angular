import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListServiceService {

  ingredientChanged=new Subject<Ingredient[]>();

  private ingredients:Ingredient[]=[];

  getIngredients()
  {
    return this.ingredients.slice();
  }

  addIngredient(passedData:Ingredient)
  {
    this.ingredients.push(passedData);
    this.ingredientChanged.next(this.ingredients.slice())
  }
  
  addIngredients(passedData:Ingredient[])
  {
    this.ingredients.push(...passedData);
    this.ingredientChanged.next(this.ingredients.slice())
  }

  constructor() { }
}

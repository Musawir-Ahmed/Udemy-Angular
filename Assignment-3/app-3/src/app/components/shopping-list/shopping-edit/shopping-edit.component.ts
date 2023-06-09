import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/model/ingredient.model';
import { ShoppingListServiceService } from 'src/app/services/shopping-list.service.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredientAdded=new Subject<Ingredient>();

  constructor(private shopingList:ShoppingListServiceService) { }

  ngOnInit(): void {
  }

  addIngredient(nameInput:any,ammountInput:any)
  {
    const ingredient = new Ingredient(nameInput.value,ammountInput.value);
    this.shopingList.addIngredient(ingredient);
  }

}

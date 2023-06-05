import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredientAdded=new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(nameInput:any,ammountInput:any)
  {
    console.log(nameInput);
    const ingredient = new Ingredient(nameInput.value,ammountInput.value);
    this.ingredientAdded.emit(ingredient);
  }

}

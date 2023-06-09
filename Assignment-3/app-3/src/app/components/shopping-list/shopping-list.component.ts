import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Ingredient } from 'src/app/model/ingredient.model';
import { ShoppingListServiceService } from 'src/app/services/shopping-list.service.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  ingredients:Ingredient[]=[];
  private subjectInstance:Subscription;

  constructor(private shopingList:ShoppingListServiceService) { }

  ngOnInit(): void {
   this.subjectInstance= this.shopingList.ingredientChanged.subscribe((data:Ingredient[])=>{
      this.ingredients=data;
    })
    this.ingredients=this.shopingList.getIngredients();
  }

  ngOnDestroy()
  {
    this.subjectInstance.unsubscribe();
  }
}

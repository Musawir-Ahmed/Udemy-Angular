import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[]=[
    new Recipe('Recipe-1','Recipe Description','https://cdn.loveandlemons.com/wp-content/uploads/2017/01/shakshuka-736x1024.jpg'),
    new Recipe('Recipe-2','Recipe Description','https://cdn.loveandlemons.com/wp-content/uploads/2017/01/shakshuka-736x1024.jpg')
  ];

  @Output('recipeSelected') recipeSelectedLevel=new EventEmitter();

  
  constructor() { }

  ngOnInit(): void {
  }

  recipeSelected(passedData:any)
  {
    this.recipeSelectedLevel.emit(passedData);
  }

}

import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {

  selectedRecipe:Recipe=null;

  constructor() { }

  ngOnInit(): void {
  }

  recipeSelected(passedData:any)
  {
    this.selectedRecipe=passedData;
  }
}

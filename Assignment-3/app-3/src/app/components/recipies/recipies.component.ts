import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeServiceService } from 'src/app/services/recipe.service.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {

  selectedRecipe:Recipe=null;

  constructor(private recipeService:RecipeServiceService) { }

  ngOnInit(): void {

  }
}

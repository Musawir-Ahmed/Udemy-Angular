import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeServiceService } from 'src/app/services/recipe.service.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[]=[];

  @Output('recipeSelected') recipeSelectedLevel=new EventEmitter();

  
  constructor(private recipeService:RecipeServiceService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes=this.recipeService.getRecipe();
  }

  recipeSelected(passedData:any)
  {
    this.recipeSelectedLevel.emit(passedData);
  }

  goToNewRecipe()
  {
    this.route.navigate(['new'],{relativeTo:this.activatedRoute})
  }

}

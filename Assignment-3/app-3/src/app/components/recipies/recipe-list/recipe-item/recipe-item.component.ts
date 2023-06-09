import { Component, EventEmitter, Input, OnInit ,Output} from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeServiceService } from 'src/app/services/recipe.service.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  

  @Input()recipe:Recipe;
  @Input()index:number;

  constructor(private recipeService:RecipeServiceService) { }


  ngOnInit(): void {
    console.log(this.index)
  }

}

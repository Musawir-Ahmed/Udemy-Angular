import { Component, EventEmitter, Input, OnInit ,Output} from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  
  @Output() recipeSelected=new EventEmitter();

  @Input()recipe:Recipe;

  constructor() { }

  onSelect()
  {
    this.recipeSelected.emit();
  }

  ngOnInit(): void {
    console.log(this.recipe)
  }

}

import { Component } from '@angular/core';
import { AddRecipeComponent } from "../add-recipe/add-recipe.component";
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-list-recipe',
  standalone: true,
  imports: [AddRecipeComponent],
  templateUrl: './list-recipe.component.html',
  styleUrl: './list-recipe.component.css'
})
export class ListRecipeComponent {
  listarrecetas[]=Recipe[];//no lo entiendo

  recibirreceta(recipes:any){
    this.listarrecetas.push({...recipes})
  }

}

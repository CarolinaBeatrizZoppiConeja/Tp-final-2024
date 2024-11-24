import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../interfaces/recipe.interface';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [FormsModule, CommonModule],
})
export class HomeComponent implements OnInit {
  searchQuery: string = '';
  recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];
  selectedRecipe: Recipe | null = null;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.loadRecipes();
  }

  loadRecipes(): void {
    this.recipeService.getRecipes().subscribe({
      next: (recipes) => {
        this.recipes = recipes;
        this.filteredRecipes = recipes;
      },
      error: (error) => console.error('Error al cargar las recetas', error),
    });
  }

  /**
   * Filtra las recetas por categoría
   * @param category Categoría seleccionada
   */
  filterByCategory(category: string): void {
    this.filteredRecipes = this.recipes.filter((recipe) => recipe.category === category);
  }

  onSearch(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredRecipes = this.recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(query)
    );
  }

  showRecipe(recipe: Recipe): void {
    this.selectedRecipe = recipe;
    const modalElement = document.getElementById('recipeModal');
    if (modalElement) {
      const modal = new (bootstrap as any).Modal(modalElement);
      modal.show();
    }
  }
}

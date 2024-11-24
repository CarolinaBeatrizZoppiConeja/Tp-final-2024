import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Recipe } from '../interfaces/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  urlBase = 'http://localhost:3000'

  getRecipes(): Observable<Recipe[]>{

    return this.http.get<Recipe[]>(`${this.urlBase}/recipes`)

  }

  postRecipe(recipe: Recipe): Observable<Recipe>{

    return this.http.post<Recipe>(`${this.urlBase}/recipes`, recipe)

  }

  putRecipe(recipe: Recipe, id: number): Observable<Recipe>{

    return this.http.put<Recipe>(`${this.urlBase}/recipes/${id}`, recipe)
  
  }

  deleteRecipe(id: number): Observable<boolean>{

    return this.http.delete(`${this.urlBase}/recipes/${id}`)
    .pipe(
      map(resp => true),
      catchError(error => of(false))
    )



  }
}

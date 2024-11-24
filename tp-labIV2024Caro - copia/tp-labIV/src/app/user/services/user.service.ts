import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private urlBase = 'http://localhost:3000/users'; // Ruta al JSON de usuarios

  constructor(private http: HttpClient) {}

  /**
   * Obtiene todos los usuarios.
   */
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.urlBase).pipe(
      catchError((error) => {
        console.error('Error al obtener usuarios:', error);
        return of([]);
      })
    );
  }

  /**
   * Autentica al usuario.
   */
  authenticate(email: string, password: string): Observable<any> {
    return this.getUsers().pipe(
      map((users) =>
        users.find(
          (user) => user.email === email && user.password === password
        )
      )
    );
  }
  getUserById(userId: number): Observable<any> {
    return this.http.get<any>(`${this.urlBase}/users/${userId}`);
  }

  /**
   * Actualiza los datos de un usuario, como sus recetas favoritas.
   * @param userId ID del usuario
   * @param updatedUser Datos actualizados del usuario
   * @returns Observable con el usuario actualizado
   */
  updateUser(userId: number, updatedUser: any): Observable<any> {
    return this.http.put<any>(`${this.urlBase}/users/${userId}`, updatedUser);
  }

  /**
   * Obtiene las recetas favoritas del usuario.
   * @param userId ID del usuario
   * @returns Observable con las recetas favoritas
   */
  getFavoriteRecipes(userId: number): Observable<any[]> {
    return this.getUserById(userId).pipe(
      map(user => user.favoriteRecipes || [])
    );
  }
}

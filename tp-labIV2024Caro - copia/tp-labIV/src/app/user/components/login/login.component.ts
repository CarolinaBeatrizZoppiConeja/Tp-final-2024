import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports:[FormsModule],
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onLogin(): void {
    // Aquí debes implementar la lógica de autenticación
    if (this.email === 'user@example.com' && this.password === 'password') {
      // Si la autenticación es exitosa, redirigir a la página principal o a la vista de perfil
      this.router.navigate(['/']);
    } else {
      // Si la autenticación falla, mostrar un mensaje de error o hacer algo
      alert('Credenciales incorrectas');
    }
  }
}
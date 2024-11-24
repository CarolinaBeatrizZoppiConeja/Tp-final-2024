import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';  // Importa bootstrap correctamente
import { RecipeService } from '../../../../recipe/services/recipe.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  imports:[CommonModule, FormsModule],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  
}

import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  user: User  = {
    email: '',
    password: ''
  }

  
}

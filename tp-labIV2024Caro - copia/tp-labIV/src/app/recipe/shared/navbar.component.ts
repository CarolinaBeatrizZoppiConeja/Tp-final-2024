import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports:[CommonModule, RouterLink],
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  userName = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.isLoggedIn = true;
      this.userName = JSON.parse(user).name;
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.userName = '';
    this.router.navigate(['/']);
  }
}
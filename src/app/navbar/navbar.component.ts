import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isSticky: boolean = false;
  menuOpen = false;
  isDarkMode = false;

  ngOnInit() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private applyTheme() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 50;
  }
}

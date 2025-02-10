import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isSticky: boolean = false; // Define the property

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 50;
  }
}
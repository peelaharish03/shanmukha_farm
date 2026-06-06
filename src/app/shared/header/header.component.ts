import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent],
  template: `
    <header class="header" [class.scrolled]="isScrolled()">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <span class="logo-icon">
              <i class="fas fa-piggy-bank" aria-hidden="true"></i>
            </span>
            <span class="brand-name">Shanmukha Farm</span>
          </div>

          <div class="navbar-actions">
            <app-theme-toggle></app-theme-toggle>
            <button class="menu-toggle" type="button" (click)="toggleMenu()" aria-label="Toggle navigation menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <ul class="nav-menu" [class.active]="isMenuOpen()">
            <li><a href="#hero" (click)="closeMenu()">Home</a></li>
            <li><a href="#about" (click)="closeMenu()">About</a></li>
            <li><a href="#why-us" (click)="closeMenu()">Why Us</a></li>
            <li><a href="#benefits" (click)="closeMenu()">Benefits</a></li>
            <li><a href="#gallery" (click)="closeMenu()">Gallery</a></li>
            <li><a href="#testimonials" (click)="closeMenu()">Testimonials</a></li>
            <li><a href="#contact" (click)="closeMenu()">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(var(--surface-rgb), 0.92);
      backdrop-filter: blur(18px);
      border-bottom: 1px solid rgba(var(--border-rgb), 0.55);
      box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
      transition: all 0.3s ease;
    }

    .header.scrolled {
      box-shadow: 0 26px 65px rgba(15, 23, 42, 0.11);
    }

    .navbar {
      padding: 1.15rem 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.25rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

    .navbar-brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-primary);
      text-decoration: none;
      cursor: pointer;
    }

    .logo-icon {
      font-size: 1.8rem;
      color: var(--color-primary);
    }

    .brand-name {
      background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .navbar-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .nav-menu {
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }

    .nav-menu a {
      color: var(--text-primary);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      position: relative;
    }

    .nav-menu a::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--color-primary);
      transition: width 0.3s ease;
    }

    .nav-menu a:hover {
      color: var(--color-primary);
    }

    .nav-menu a:hover::after {
      width: 100%;
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      gap: 5px;
      padding: 0;
    }

    .menu-toggle span {
      width: 25px;
      height: 3px;
      background: var(--text-primary);
      border-radius: 2px;
      transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
      .menu-toggle {
        display: flex;
      }

      .nav-menu {
        position: absolute;
        top: 70px;
        left: 0;
        right: 0;
        flex-direction: column;
        background: var(--surface);
        gap: 0;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
      }

      .nav-menu.active {
        max-height: 300px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
      }

      .nav-menu li {
        border-bottom: 1px solid var(--border);
      }

      .nav-menu a {
        display: block;
        padding: 1rem 1.5rem;
      }

      .nav-menu a::after {
        display: none;
      }

      .navbar-brand {
        font-size: 1.2rem;
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = signal(false);
  isMenuOpen = signal(false);

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled.set(window.scrollY > 50);
      });
    }
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}

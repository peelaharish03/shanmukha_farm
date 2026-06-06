import { computed, inject, Injectable, signal } from '@angular/core';

type ThemeMode = 'light' | 'dark';
const THEME_STORAGE_KEY = 'shanmukha-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly themeMode = signal<ThemeMode>('light');

  readonly isDarkTheme = computed(() => this.themeMode() === 'dark');
  readonly activeTheme = computed(() => this.themeMode());

  constructor() {
    // The theme is initialized through APP_INITIALIZER for first paint consistency.
  }

  initTheme(): void {
    const storedTheme = this.getStoredTheme();
    const prefersDark = typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    const initialTheme: ThemeMode = storedTheme ?? (prefersDark ? 'dark' : 'light');
    this.setTheme(initialTheme);
  }

  toggleTheme(): void {
    this.setTheme(this.isDarkTheme() ? 'light' : 'dark');
  }

  setTheme(theme: ThemeMode): void {
    this.themeMode.set(theme);
    this.applyThemeClass(theme);
    this.storeTheme(theme);
  }

  private applyThemeClass(theme: ThemeMode): void {
    if (typeof document === 'undefined') {
      return;
    }

    document.documentElement.setAttribute('data-theme', theme);
  }

  private storeTheme(theme: ThemeMode): void {
    if (typeof window === 'undefined') {
      return;
    }

    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }

  private getStoredTheme(): ThemeMode | null {
    if (typeof window === 'undefined') {
      return null;
    }

    const value = localStorage.getItem(THEME_STORAGE_KEY);
    return value === 'dark' || value === 'light' ? value : null;
  }
}

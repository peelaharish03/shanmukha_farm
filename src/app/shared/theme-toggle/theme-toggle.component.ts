import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="theme-toggle"
      type="button"
      (click)="toggleTheme()"
      [attr.aria-label]="themeService.isDarkTheme() ? 'Switch to light mode' : 'Switch to dark mode'"
      title="Toggle dark mode"
    >
      <svg *ngIf="themeService.isDarkTheme(); else moonIcon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75Zm0 15.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm8.03-6.53a.75.75 0 0 1 .53 1.28l-1.42 1.42a.75.75 0 0 1-1.06-1.06l1.42-1.42a.75.75 0 0 1 1.06-.12Zm-15.56 0a.75.75 0 0 1 1.06-.12l1.42 1.42a.75.75 0 0 1-1.06 1.06L4.47 12.22a.75.75 0 0 1 .12-1.06Zm13.78-5.78a.75.75 0 0 1 0 1.06l-1.42 1.42a.75.75 0 0 1-1.06-1.06l1.42-1.42a.75.75 0 0 1 1.06 0Zm-13.78 0a.75.75 0 1 1 1.06 1.06L5.44 7.7a.75.75 0 0 1-1.06-1.06l1.42-1.42ZM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Zm0-2.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V5.5A.75.75 0 0 1 12 4.75Zm0 12.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Z"
        />
      </svg>
      <ng-template #moonIcon>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M21.752 15.002a.75.75 0 0 1-.771.681 8.25 8.25 0 0 1-8.292-8.29.75.75 0 0 1 .958-.712 7.5 7.5 0 1 0 8.105 8.105.75.75 0 0 1-.001.916Z"
          />
        </svg>
      </ng-template>
    </button>
  `,
  styles: [
    `
      .theme-toggle {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        padding: 0.5rem;
        border: 1px solid var(--border);
        border-radius: 999px;
        background: var(--surface);
        color: var(--icon-color);
        cursor: pointer;
        transition: var(--transition);
      }

      .theme-toggle:hover {
        background: var(--surface-strong);
        border-color: var(--color-primary);
      }

      .theme-toggle svg {
        width: 1.4rem;
        height: 1.4rem;
        fill: currentColor;
      }
    `
  ]
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}

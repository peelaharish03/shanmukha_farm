import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FEATURES } from '../../data/farm-data';
import { trigger, style, animate, transition, stagger } from '@angular/animations';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="why-us" class="why-us">
      <div class="container">
        <div class="section-header" [@fadeInUp]>
          <h2>Why Choose Shanmukha Pig Farm?</h2>
          <p>Excellence in Every Aspect of Farming</p>
        </div>

        <div class="features-grid">
          <div class="feature-card" *ngFor="let feature of features" [@fadeInScale]>
            <div class="feature-icon" [style.background]="feature.color + '20'" [style.color]="feature.color">
              <i [class]="'fas ' + feature.icon"></i>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
            <div class="feature-accent" [style.background]="feature.color"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .why-us {
      padding: 5rem 0;
      background: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-header h2 {
      font-size: 2.5rem;
      color: #111827;
      margin: 0 0 1rem 0;
      font-weight: 700;
    }

    .section-header p {
      font-size: 1.2rem;
      color: #6b7280;
      margin: 0;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      padding: 2rem;
      background: #f9fafb;
      border-radius: 12px;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      border: 1px solid #f3f4f6;
    }

    .feature-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #10b981, #059669);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
      background: white;
    }

    .feature-card:hover::before {
      transform: scaleX(1);
    }

    .feature-icon {
      width: 60px;
      height: 60px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }

    .feature-card h3 {
      font-size: 1.3rem;
      color: #111827;
      margin: 0 0 0.75rem 0;
      font-weight: 600;
    }

    .feature-card p {
      color: #6b7280;
      margin: 0;
      line-height: 1.6;
      font-size: 0.95rem;
    }

    .feature-accent {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .feature-card:hover .feature-accent {
      opacity: 0.3;
    }

    @media (max-width: 768px) {
      .why-us {
        padding: 3rem 0;
      }

      .section-header h2 {
        font-size: 2rem;
      }

      .features-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .feature-card {
        padding: 1.5rem;
      }

      .feature-icon {
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
      }

      .feature-card h3 {
        font-size: 1.1rem;
      }
    }
  `],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeInScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ], { delay: 100 })
    ])
  ]
})
export class WhyUsComponent {
  features = FEATURES;
}

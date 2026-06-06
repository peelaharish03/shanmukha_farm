import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SOCIAL_MEDIA } from '../../data/farm-data';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="social" class="social-media">
      <div class="container">
        <div class="section-header" [@fadeInUp]>
          <h2>Follow Us</h2>
          <p>Stay Updated With Our Latest News and Updates</p>
        </div>

        <div class="social-grid">
          <a *ngFor="let social of socialMedia"
             [href]="social.url"
             target="_blank"
             rel="noopener noreferrer"
             class="social-card"
             [style.--social-color]="social.color"
             [@fadeInScale]>
            <div class="social-icon">
              <i [class]="'fab ' + social.icon"></i>
            </div>
            <h3>{{ social.name }}</h3>
            <p>Follow Us</p>
            <span class="arrow">
              <i class="fas fa-arrow-right"></i>
            </span>
          </a>
        </div>

        <div class="social-info" [@fadeInUp]>
          <i class="fas fa-bell"></i>
          <p>Subscribe to our social media for daily farm updates, tips, and special offers!</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .social-media {
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

    .social-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .social-card {
      background: white;
      border: 2px solid #f3f4f6;
      padding: 2rem;
      border-radius: 12px;
      text-decoration: none;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      text-align: center;
    }

    .social-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: var(--social-color);
      opacity: 0.05;
      transition: left 0.3s ease;
      z-index: 0;
    }

    .social-card:hover::before {
      left: 0;
    }

    .social-card:hover {
      border-color: var(--social-color);
      transform: translateY(-10px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    }

    .social-icon {
      position: relative;
      z-index: 1;
      font-size: 3rem;
      margin-bottom: 1rem;
      color: var(--social-color);
      transition: transform 0.3s ease;
    }

    .social-card:hover .social-icon {
      transform: scale(1.1) rotateZ(10deg);
    }

    .social-card h3 {
      position: relative;
      z-index: 1;
      font-size: 1.4rem;
      color: #111827;
      margin: 0 0 0.5rem 0;
      font-weight: 700;
    }

    .social-card p {
      position: relative;
      z-index: 1;
      color: #6b7280;
      margin: 0 0 1rem 0;
      font-size: 0.95rem;
    }

    .arrow {
      position: relative;
      z-index: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: var(--social-color);
      color: white;
      border-radius: 50%;
      transition: all 0.3s ease;
    }

    .social-card:hover .arrow {
      transform: translateX(5px);
    }

    .social-info {
      background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
      border-left: 4px solid #0ea5e9;
      padding: 2rem;
      border-radius: 12px;
      display: flex;
      align-items: center;
      gap: 1.5rem;
      text-align: left;
    }

    .social-info i {
      font-size: 2rem;
      color: #0ea5e9;
      flex-shrink: 0;
    }

    .social-info p {
      color: #0c4a6e;
      margin: 0;
      line-height: 1.6;
      font-size: 1rem;
    }

    @media (max-width: 768px) {
      .social-media {
        padding: 3rem 0;
      }

      .section-header h2 {
        font-size: 2rem;
      }

      .social-grid {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1.5rem;
      }

      .social-card {
        padding: 1.5rem;
      }

      .social-icon {
        font-size: 2.5rem;
        margin-bottom: 0.75rem;
      }

      .social-card h3 {
        font-size: 1.1rem;
      }

      .social-info {
        flex-direction: column;
        text-align: center;
      }

      .social-info i {
        font-size: 1.5rem;
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
        animate('0.5s ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class SocialMediaComponent {
  socialMedia = SOCIAL_MEDIA;
}

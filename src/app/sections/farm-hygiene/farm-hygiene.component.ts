import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HYGIENE_PRACTICES } from '../../data/farm-data';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-farm-hygiene',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hygiene" class="farm-hygiene">
      <div class="container">
        <div class="section-header" [@fadeInUp]>
          <h2>Farm Hygiene Standards</h2>
          <p>Maintaining Excellence in Cleanliness and Animal Health</p>
        </div>

        <div class="hygiene-content">
          <div class="hygiene-intro" [@fadeInUp]>
            <p>
              At Shanmukha Pig Farm, we maintain the highest hygiene standards to ensure the health 
              and wellbeing of our livestock. Our comprehensive hygiene protocols prevent disease and 
              guarantee the quality of our products.
            </p>
          </div>

          <div class="hygiene-grid">
            <div class="hygiene-card" *ngFor="let practice of hygienePractices" [@fadeInScale]>
              <div class="hygiene-icon">
                <i [class]="'fas ' + practice.icon"></i>
              </div>
              <h4>{{ practice.title }}</h4>
              <p>{{ practice.description }}</p>
            </div>
          </div>

          <div class="hygiene-image">
            <div class="image-placeholder">
              <i class="fas fa-images"></i>
              <p>Farm Hygiene Images/Videos</p>
              <span>Add your media files in src/assets/images/ and src/assets/videos/</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .farm-hygiene {
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

    .hygiene-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .hygiene-intro {
      background: linear-gradient(135deg, #d1fae5, #a7f3d0);
      padding: 2rem;
      border-radius: 12px;
      border-left: 4px solid #10b981;
    }

    .hygiene-intro p {
      color: #065f46;
      margin: 0;
      line-height: 1.8;
      font-size: 1.05rem;
    }

    .hygiene-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .hygiene-card {
      background: #f9fafb;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      transition: all 0.3s ease;
      border: 1px solid #f3f4f6;
    }

    .hygiene-card:hover {
      background: white;
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
      border-color: #10b981;
    }

    .hygiene-icon {
      width: 70px;
      height: 70px;
      background: linear-gradient(135deg, #10b98110, #10b98120);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: #10b981;
      margin: 0 auto 1.5rem;
    }

    .hygiene-card h4 {
      font-size: 1.2rem;
      color: #111827;
      margin: 0 0 0.75rem 0;
      font-weight: 600;
    }

    .hygiene-card p {
      color: #6b7280;
      margin: 0;
      line-height: 1.6;
      font-size: 0.95rem;
    }

    .hygiene-image {
      width: 100%;
      background: linear-gradient(135deg, #f9fafb, #f3f4f6);
      border: 2px dashed #d1d5db;
      border-radius: 12px;
      min-height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .image-placeholder {
      text-align: center;
      color: #9ca3af;
    }

    .image-placeholder i {
      font-size: 3rem;
      display: block;
      margin-bottom: 1rem;
      color: #d1d5db;
    }

    .image-placeholder p {
      font-size: 1.2rem;
      margin: 0 0 0.5rem 0;
      font-weight: 600;
      color: #6b7280;
    }

    .image-placeholder span {
      font-size: 0.9rem;
      color: #9ca3af;
    }

    @media (max-width: 768px) {
      .farm-hygiene {
        padding: 3rem 0;
      }

      .section-header h2 {
        font-size: 2rem;
      }

      .hygiene-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .hygiene-card {
        padding: 1.5rem;
      }

      .hygiene-icon {
        width: 60px;
        height: 60px;
        font-size: 1.5rem;
      }

      .hygiene-image {
        min-height: 250px;
      }

      .image-placeholder i {
        font-size: 2.5rem;
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
      ])
    ])
  ]
})
export class FarmHygieneComponent {
  hygienePractices = HYGIENE_PRACTICES;
}

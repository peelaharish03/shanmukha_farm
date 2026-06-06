import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BENEFITS } from '../../data/farm-data';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="benefits" class="benefits">
      <div class="container">
        <div class="section-header" [@fadeInUp]>
          <h2>Nutritional Benefits of Pork Meat</h2>
          <p>Why Pork is an Excellent Choice for Your Family</p>
        </div>

        <div class="benefits-grid">
          <div class="benefit-card" *ngFor="let benefit of benefits; let i = index" [@fadeInUp]>
            <div class="benefit-number">{{ i + 1 }}</div>
            <div class="benefit-icon">
              <i [class]="'fas ' + benefit.icon"></i>
            </div>
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </div>

        <div class="disclaimer" [@fadeInUp]>
          <i class="fas fa-info-circle"></i>
          <p>Disclaimer: Consume pork as part of a balanced diet. Consult with healthcare professionals for personalized dietary advice.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .benefits {
      padding: 5rem 0;
      background: linear-gradient(135deg, #f9fafb, #f3f4f6);
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

    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .benefit-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
      text-align: center;
      transition: all 0.3s ease;
      position: relative;
    }

    .benefit-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    }

    .benefit-number {
      position: absolute;
      top: -15px;
      right: 20px;
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1.2rem;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
    }

    .benefit-icon {
      font-size: 3rem;
      background: linear-gradient(135deg, #10b98110, #10b98120);
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      color: #10b981;
    }

    .benefit-card h3 {
      font-size: 1.3rem;
      color: #111827;
      margin: 0 0 0.75rem 0;
      font-weight: 600;
    }

    .benefit-card p {
      color: #6b7280;
      margin: 0;
      line-height: 1.6;
      font-size: 0.95rem;
    }

    .disclaimer {
      background: linear-gradient(135deg, #fef3c7, #fef08a);
      border-left: 4px solid #f59e0b;
      padding: 1.5rem 2rem;
      border-radius: 8px;
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }

    .disclaimer i {
      color: #d97706;
      font-size: 1.5rem;
      flex-shrink: 0;
      margin-top: 2px;
    }

    .disclaimer p {
      color: #92400e;
      margin: 0;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .benefits {
        padding: 3rem 0;
      }

      .section-header h2 {
        font-size: 2rem;
      }

      .benefits-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .benefit-card {
        padding: 1.5rem;
      }

      .benefit-icon {
        width: 70px;
        height: 70px;
        font-size: 2rem;
      }

      .benefit-card h3 {
        font-size: 1.1rem;
      }

      .disclaimer {
        flex-direction: column;
      }

      .disclaimer i {
        font-size: 1.2rem;
        margin-top: 0;
      }
    }
  `],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class BenefitsComponent {
  benefits = BENEFITS;
}

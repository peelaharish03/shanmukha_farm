import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about">
      <div class="container">
        <div class="section-header" [@fadeInUp]>
          <h2>About Shanmukha Pig Farm</h2>
          <p>Building Trust Through Quality and Care</p>
        </div>

        <div class="about-content">
          <div class="about-text" [@fadeInUp]>
            <h3>Our Story</h3>
            <p>
              Shanmukha Pig Farm is a modern, professionally managed pig farming enterprise dedicated to 
              producing high-quality pork through sustainable and humane practices. With years of expertise 
              in animal husbandry, we maintain the highest standards of hygiene and animal care.
            </p>

            <h3>Our Commitment</h3>
            <p>
              We believe in transparency, quality, and customer satisfaction. Every pig is raised with 
              attention to their health and welfare. Our commitment extends from the farm to your table, 
              ensuring you receive only the best products.
            </p>

            <h3>Farm Standards</h3>
            <ul class="standards-list">
              <li><i class="fas fa-check"></i> ISO Standard Hygiene Practices</li>
              <li><i class="fas fa-check"></i> Regular Veterinary Inspections</li>
              <li><i class="fas fa-check"></i> Premium Quality Feed</li>
              <li><i class="fas fa-check"></i> Professional Animal Care</li>
              <li><i class="fas fa-check"></i> Ethical Farming Methods</li>
              <li><i class="fas fa-check"></i> Complete Traceability</li>
            </ul>
          </div>

          <div class="about-cards">
            <div class="about-card" [@fadeInUp] *ngFor="let card of aboutCards">
              <div class="card-icon">
                <i [class]="'fas ' + card.icon"></i>
              </div>
              <h4>{{ card.title }}</h4>
              <p>{{ card.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding: 5rem 0;
      background: #f9fafb;
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

    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: start;
    }

    .about-text h3 {
      font-size: 1.5rem;
      color: #111827;
      margin: 2rem 0 1rem 0;
      font-weight: 600;
    }

    .about-text h3:first-child {
      margin-top: 0;
    }

    .about-text p {
      color: #4b5563;
      line-height: 1.8;
      margin-bottom: 1rem;
      font-size: 1rem;
    }

    .standards-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .standards-list li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: #4b5563;
      font-weight: 500;
    }

    .standards-list i {
      color: #10b981;
      font-size: 1.2rem;
    }

    .about-cards {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .about-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
      transition: all 0.3s ease;
      border-left: 4px solid #10b981;
    }

    .about-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }

    .card-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #10b981, #059669);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: white;
      margin-bottom: 1rem;
    }

    .about-card h4 {
      font-size: 1.2rem;
      color: #111827;
      margin: 0 0 0.5rem 0;
      font-weight: 600;
    }

    .about-card p {
      color: #6b7280;
      margin: 0;
      line-height: 1.6;
    }

    @media (max-width: 1024px) {
      .about-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .about-cards {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .about {
        padding: 3rem 0;
      }

      .section-header h2 {
        font-size: 2rem;
      }

      .about-cards {
        grid-template-columns: 1fr;
      }

      .about-text h3 {
        font-size: 1.3rem;
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
export class AboutComponent {
  aboutCards = [
    {
      title: 'Animal Welfare',
      description: 'We prioritize the health and wellbeing of our pigs with spacious shelters, proper ventilation, and humane handling practices.',
      icon: 'fa-heart'
    },
    {
      title: 'Sustainable Practices',
      description: 'Our farming methods are environmentally responsible, minimizing waste and maintaining ecological balance.',
      icon: 'fa-leaf'
    },
    {
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous quality checks to ensure premium standards and food safety compliance.',
      icon: 'fa-certificate'
    },
    {
      title: 'Customer Trust',
      description: 'Building lasting relationships through transparent operations, reliability, and consistent product quality.',
      icon: 'fa-handshake'
    }
  ];
}

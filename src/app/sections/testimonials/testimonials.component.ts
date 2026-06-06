import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TESTIMONIALS } from '../../data/farm-data';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testimonials" class="testimonials">
      <div class="container">
        <div class="section-header" [@fadeInUp]>
          <h2>Customer Testimonials</h2>
          <p>What Our Valued Customers Say</p>
        </div>

        <div class="testimonials-carousel">
          <div class="testimonial-card" *ngFor="let testimonial of testimonials" [@fadeInScale]>
            <div class="rating">
              <i *ngFor="let i of [1,2,3,4,5]" 
                 class="fas fa-star"
                 [class.filled]="i <= testimonial.rating"></i>
            </div>

            <p class="testimonial-text">
              "{{ testimonial.content }}"
            </p>

            <div class="testimonial-author">
              <div class="author-info">
                <h4>{{ testimonial.author }}</h4>
                <p>{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-dots" [@fadeInUp]>
          <button 
            *ngFor="let i of [0, 1, 2, 3]; let isLast = last"
            [class.active]="currentTestimonial() === i"
            (click)="goToTestimonial(i)"
            [attr.aria-label]="'Go to testimonial ' + (i + 1)">
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials {
      padding: 5rem 0;
      background: linear-gradient(135deg, #f9fafb, white);
    }

    .container {
      max-width: 1000px;
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

    .testimonials-carousel {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .testimonial-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      border-top: 4px solid #10b981;
      position: relative;
    }

    .testimonial-card::before {
      content: '"';
      position: absolute;
      top: 10px;
      right: 15px;
      font-size: 3rem;
      color: #10b98120;
      font-weight: bold;
      font-family: Georgia, serif;
    }

    .testimonial-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    }

    .rating {
      display: flex;
      gap: 0.25rem;
      margin-bottom: 1rem;
    }

    .rating i {
      color: #d1d5db;
      font-size: 1rem;
      transition: color 0.3s ease;
    }

    .rating i.filled {
      color: #fbbf24;
    }

    .testimonial-text {
      color: #4b5563;
      margin: 0 0 1.5rem 0;
      line-height: 1.7;
      font-style: italic;
      font-size: 0.95rem;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 1rem;
      border-top: 1px solid #f3f4f6;
      padding-top: 1rem;
    }

    .author-info h4 {
      font-size: 1rem;
      color: #111827;
      margin: 0;
      font-weight: 600;
    }

    .author-info p {
      font-size: 0.85rem;
      color: #6b7280;
      margin: 0.25rem 0 0 0;
    }

    .carousel-dots {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .carousel-dots button {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 2px solid #d1d5db;
      background: transparent;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .carousel-dots button:hover {
      border-color: #10b981;
    }

    .carousel-dots button.active {
      background: #10b981;
      border-color: #10b981;
      transform: scale(1.3);
    }

    @media (max-width: 768px) {
      .testimonials {
        padding: 3rem 0;
      }

      .section-header h2 {
        font-size: 2rem;
      }

      .testimonials-carousel {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .testimonial-card {
        padding: 1.5rem;
      }

      .testimonial-text {
        font-size: 0.9rem;
      }

      .rating i {
        font-size: 0.9rem;
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
export class TestimonialsComponent {
  testimonials = TESTIMONIALS;
  currentTestimonial = signal(0);

  goToTestimonial(index: number) {
    this.currentTestimonial.set(index);
  }
}

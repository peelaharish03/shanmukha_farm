import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FARM_INFO } from '../../data/farm-data';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-header" [@fadeInUp]>
          <h2>Contact Us</h2>
          <p>Get In Touch With Shanmukha Pig Farm</p>
        </div>

        <div class="contact-content">
          <!-- Contact Information -->
          <div class="contact-info" [@fadeInUp]>
            <h3>Farm Information</h3>

            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-building"></i>
              </div>
              <div class="info-content">
                <h4>Farm Name</h4>
                <p>{{ farmInfo.name }}</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-user"></i>
              </div>
              <div class="info-content">
                <h4>Proprietor</h4>
                <p>{{ farmInfo.proprietor }}</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-phone"></i>
              </div>
              <div class="info-content">
                <h4>Phone</h4>
                <a [href]="'tel:+91' + farmInfo.mobile">+91 {{ farmInfo.mobile }}</a>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="info-content">
                <h4>Email</h4>
                <a [href]="'mailto:' + farmInfo.email">{{ farmInfo.email }}</a>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="info-content">
                <h4>Location</h4>
                <p>{{ farmInfo.location }}</p>
              </div>
            </div>
          </div>

          <!-- Map -->
          <div class="contact-map" [@fadeInScale]>
            <div class="map-placeholder">
              <i class="fas fa-map"></i>
              <h4>Location Map</h4>
              <p>Google Map Integration</p>
              <div class="coordinates">
                <p><strong>Latitude:</strong> {{ farmInfo.latitude }}</p>
                <p><strong>Longitude:</strong> {{ farmInfo.longitude }}</p>
              </div>
              <p class="instruction">Replace LATITUDE_HERE and LONGITUDE_HERE with actual coordinates</p>
            </div>
          </div>
        </div>

        <!-- Quick Action -->
        <div class="quick-action" [@fadeInUp]>
          <h3>Quick Contact</h3>
          <p>Reach out to us through your preferred channel</p>
          <div class="action-buttons">
            <a [href]="'tel:+91' + farmInfo.mobile" class="action-btn phone">
              <i class="fas fa-phone"></i>
              <span>Call Now</span>
            </a>
            <a [href]="'mailto:' + farmInfo.email" class="action-btn email">
              <i class="fas fa-envelope"></i>
              <span>Send Email</span>
            </a>
            <a href="https://wa.me/919705047662?text=Hello%20Shanmukha%20Pig%20Farm%2C%20I%20would%20like%20to%20know%20more%20about%20your%20pigs%20and%20meat%20availability." 
               target="_blank" rel="noopener noreferrer" class="action-btn whatsapp">
              <i class="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
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

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      margin-bottom: 4rem;
    }

    .contact-info h3 {
      font-size: 1.5rem;
      color: #111827;
      margin: 0 0 2rem 0;
      font-weight: 600;
    }

    .info-card {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      margin-bottom: 1.5rem;
      display: flex;
      gap: 1rem;
      align-items: flex-start;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
      transition: all 0.3s ease;
      border-left: 4px solid transparent;
    }

    .info-card:hover {
      border-left-color: #10b981;
      transform: translateX(5px);
    }

    .info-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #10b98120, #10b98130);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #10b981;
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    .info-content h4 {
      font-size: 1rem;
      color: #111827;
      margin: 0 0 0.5rem 0;
      font-weight: 600;
    }

    .info-content p,
    .info-content a {
      color: #6b7280;
      margin: 0;
      font-size: 0.95rem;
    }

    .info-content a {
      color: #10b981;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .info-content a:hover {
      color: #059669;
    }

    .contact-map {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      overflow: hidden;
    }

    .map-placeholder {
      width: 100%;
      height: 100%;
      min-height: 400px;
      background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
      border: 2px dashed #bfdbfe;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      text-align: center;
      color: #0c4a6e;
    }

    .map-placeholder i {
      font-size: 3rem;
      color: #0ea5e9;
      margin-bottom: 1rem;
    }

    .map-placeholder h4 {
      font-size: 1.3rem;
      color: #0c4a6e;
      margin: 0 0 0.5rem 0;
      font-weight: 600;
    }

    .map-placeholder p {
      margin: 0 0 1.5rem 0;
      color: #0369a1;
    }

    .coordinates {
      background: white;
      padding: 1rem;
      border-radius: 8px;
      margin: 1rem 0;
      font-family: monospace;
      font-size: 0.9rem;
    }

    .coordinates p {
      margin: 0.5rem 0;
      color: #0c4a6e;
    }

    .instruction {
      font-size: 0.85rem;
      color: #0369a1;
      font-style: italic;
    }

    .quick-action {
      background: linear-gradient(135deg, #d1fae5, #a7f3d0);
      border: 2px solid #10b981;
      padding: 3rem;
      border-radius: 12px;
      text-align: center;
    }

    .quick-action h3 {
      font-size: 1.5rem;
      color: #065f46;
      margin: 0 0 0.5rem 0;
      font-weight: 600;
    }

    .quick-action p {
      color: #0d6e4f;
      margin: 0 0 2rem 0;
      font-size: 1rem;
    }

    .action-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .action-btn {
      padding: 1rem 1.5rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
      font-size: 0.95rem;
    }

    .action-btn.phone {
      background: white;
      color: #10b981;
      border: 2px solid #10b981;
    }

    .action-btn.phone:hover {
      background: #10b981;
      color: white;
      transform: translateY(-3px);
    }

    .action-btn.email {
      background: white;
      color: #f59e0b;
      border: 2px solid #f59e0b;
    }

    .action-btn.email:hover {
      background: #f59e0b;
      color: white;
      transform: translateY(-3px);
    }

    .action-btn.whatsapp {
      background: white;
      color: #25D366;
      border: 2px solid #25D366;
    }

    .action-btn.whatsapp:hover {
      background: #25D366;
      color: white;
      transform: translateY(-3px);
    }

    @media (max-width: 1024px) {
      .contact-content {
        grid-template-columns: 1fr;
      }

      .map-placeholder {
        min-height: 300px;
      }
    }

    @media (max-width: 768px) {
      .contact {
        padding: 3rem 0;
      }

      .section-header h2 {
        font-size: 2rem;
      }

      .quick-action {
        padding: 2rem 1.5rem;
      }

      .action-buttons {
        flex-direction: column;
      }

      .action-btn {
        width: 100%;
        justify-content: center;
      }

      .info-card {
        padding: 1rem;
        margin-bottom: 1rem;
      }

      .info-icon {
        width: 45px;
        height: 45px;
        font-size: 1.2rem;
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
export class ContactComponent {
  farmInfo = FARM_INFO;
}

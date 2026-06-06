import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FARM_INFO, SOCIAL_MEDIA } from '../../data/farm-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="container">
          <div class="footer-grid">
            <!-- Brand Section -->
            <div class="footer-section">
              <div class="footer-brand">
                <i class="fas fa-piggy-bank"></i>
                <h3>{{ farmInfo.name }}</h3>
              </div>
              <p class="footer-description">
                Committed to delivering premium quality pork through hygienic farming practices and animal care.
              </p>
              <div class="social-links">
                <a *ngFor="let social of socialMedia" 
                   [href]="social.url"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="social-link"
                   [title]="social.name">
                  <i [class]="'fab ' + social.icon"></i>
                </a>
              </div>
            </div>

            <!-- Quick Links -->
            <div class="footer-section">
              <h4>Quick Links</h4>
              <ul class="footer-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <!-- Contact Info -->
            <div class="footer-section">
              <h4>Contact Info</h4>
              <div class="contact-item">
                <i class="fas fa-phone"></i>
                <div>
                  <p class="label">Phone</p>
                  <a [href]="'tel:+91' + farmInfo.mobile">+91 {{ farmInfo.mobile }}</a>
                </div>
              </div>
              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <div>
                  <p class="label">Email</p>
                  <a [href]="'mailto:' + farmInfo.email">{{ farmInfo.email }}</a>
                </div>
              </div>
              <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                  <p class="label">Location</p>
                  <p>{{ farmInfo.location }}</p>
                </div>
              </div>
            </div>

            <!-- Information -->
            <div class="footer-section">
              <h4>Information</h4>
              <ul class="footer-links">
                <li><a href="#benefits">Health Benefits</a></li>
                <li><a href="#hygiene">Farm Hygiene</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
              </ul>
            </div>
          </div>

          <div class="footer-divider"></div>

          <!-- Copyright -->
          <div class="footer-bottom">
            <p>&copy; 2026 {{ farmInfo.name }}. All Rights Reserved.</p>
            <p class="design-credit">Built with care for quality</p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #1f2937, #111827);
      color: #e5e7eb;
      margin-top: 5rem;
    }

    .footer-content {
      padding: 4rem 0 2rem;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 3rem;
      margin-bottom: 2rem;
    }

    .footer-section h4 {
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
      color: #10b981;
      font-weight: 600;
    }

    .footer-brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .footer-brand i {
      font-size: 2rem;
      color: #10b981;
    }

    .footer-brand h3 {
      font-size: 1.3rem;
      margin: 0;
      color: white;
    }

    .footer-description {
      color: #9ca3af;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .social-link {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      color: white;
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .social-link:hover {
      background: #10b981;
      transform: translateY(-3px);
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 0.75rem;
    }

    .footer-links a {
      color: #9ca3af;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: #10b981;
    }

    .contact-item {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .contact-item i {
      color: #10b981;
      font-size: 1.2rem;
      margin-top: 0.25rem;
    }

    .contact-item .label {
      font-size: 0.85rem;
      color: #6b7280;
      margin: 0 0 0.25rem 0;
    }

    .contact-item p {
      margin: 0;
      color: #e5e7eb;
    }

    .contact-item a {
      color: #10b981;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .contact-item a:hover {
      color: #059669;
    }

    .footer-divider {
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin: 2rem 0;
    }

    .footer-bottom {
      text-align: center;
      color: #6b7280;
      padding: 1rem 0;
    }

    .footer-bottom p {
      margin: 0.5rem 0;
    }

    .design-credit {
      font-size: 0.9rem;
      color: #4b5563;
    }

    @media (max-width: 768px) {
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .footer-content {
        padding: 3rem 0 1.5rem;
      }
    }
  `]
})
export class FooterComponent {
  farmInfo = FARM_INFO;
  socialMedia = SOCIAL_MEDIA;
}

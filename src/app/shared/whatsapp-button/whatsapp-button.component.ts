import { Component, signal } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { WHATSAPP_LINK } from '../../data/farm-data';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  template: `
    <a 
      [href]="whatsappLink" 
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-button"
      [title]="'Contact on WhatsApp'"
      @fadeInScale>
      <i class="fab fa-whatsapp"></i>
    </a>
  `,
  styles: [`
    .whatsapp-button {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 60px;
      height: 60px;
      background: #25D366;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 2rem;
      text-decoration: none;
      z-index: 999;
      box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
      transition: all 0.3s ease;
      animation: pulse 2s infinite;
    }

    .whatsapp-button:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
      animation: none;
    }

    @keyframes pulse {
      0%, 100% {
        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
      }
      50% {
        box-shadow: 0 4px 20px rgba(37, 211, 102, 0.8);
      }
    }

    @media (max-width: 768px) {
      .whatsapp-button {
        width: 55px;
        height: 55px;
        bottom: 1.5rem;
        right: 1.5rem;
        font-size: 1.8rem;
      }
    }
  `],
  animations: [
    trigger('fadeInScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class WhatsappButtonComponent {
  whatsappLink = WHATSAPP_LINK;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="hero">
      <div class="hero-deco deco-left"></div>
      <div class="hero-deco deco-right"></div>
      <div class="hero-grid"></div>

      <div class="container hero-inner">
        <div class="hero-copy" [@fadeInUp]>
          <span class="eyebrow">Premium Pig Farming</span>
          <h1>Shanmukha Pig Farm</h1>
          <p>
            We grow healthy pigs with hygienic farm practices, premium nutrition, and trusted delivery for top-quality meat.
          </p>

          <div class="hero-ctas">
            <a href="#gallery" class="cta-btn primary">
              <i class="fas fa-images"></i>
              View Farm Gallery
            </a>
            <a href="https://wa.me/919705047662?text=Hello%20Shanmukha%20Pig%20Farm%2C%20I%20would%20like%20to%20know%20more%20about%20your%20pigs%20and%20meat%20availability." 
               target="_blank" rel="noopener noreferrer" class="cta-btn secondary">
              <i class="fab fa-whatsapp"></i>
              Order on WhatsApp
            </a>
          </div>

          <div class="hero-stats">
            <div class="hero-stat">
              <span class="stat-icon">
                <i class="fas fa-shield-alt" aria-hidden="true"></i>
              </span>
              <div>
                <strong>Farm Certified</strong>
                <p>Hygiene-first protocols for safer meat.</p>
              </div>
            </div>
            <div class="hero-stat">
              <span class="stat-icon">
                <i class="fas fa-leaf" aria-hidden="true"></i>
              </span>
              <div>
                <strong>Natural Nutrition</strong>
                <p>Balanced feed for stronger, healthier livestock.</p>
              </div>
            </div>
          </div>
        </div>

        <aside class="hero-panel" [@fadeInUp]>
          <div class="hero-panel-top">
            <span class="badge">Trusted Quality</span>
            <h2>Farm-to-table excellence</h2>
          </div>

          <div class="hero-panel-body">
            <p>
              Shanmukha Farm blends modern farming with premium care so every cut is fresh, flavorful, and built on transparency.
            </p>

            <ul>
              <li><strong>24/7 animal care</strong> from expert staff</li>
              <li><strong>Zero compromise</strong> on cleanliness</li>
              <li><strong>Fast delivery</strong> to your door</li>
            </ul>
          </div>

          <div class="hero-panel-footer">
            <div>
              <strong>45+</strong>
              <span>Years of expertise</span>
            </div>
            <div>
              <strong>99%</strong>
              <span>Customer satisfaction</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: calc(100vh - 90px);
      display: flex;
      align-items: center;
      overflow: hidden;
      padding: 4rem 0;
      color: var(--text-primary);
      --hero-box-bg: rgba(8, 28, 35, 0.78);
      --hero-box-bg-strong: rgba(8, 28, 35, 0.9);
      --hero-box-bg-soft: rgba(255, 255, 255, 0.06);
      --hero-box-border: rgba(148, 163, 184, 0.2);
    }

    .hero-deco {
      position: absolute;
      border-radius: 50%;
      filter: blur(120px);
      opacity: 0.65;
      pointer-events: none;
      z-index: 0;
    }

    .deco-left {
      width: 420px;
      height: 420px;
      top: -120px;
      left: -100px;
      background: rgba(59, 130, 246, 0.18);
    }

    .deco-right {
      width: 360px;
      height: 360px;
      bottom: -140px;
      right: -80px;
      background: rgba(16, 185, 129, 0.18);
    }

    .hero-grid {
      position: absolute;
      inset: 0;
      background-image: radial-gradient(circle at 20% 10%, rgba(255,255,255,0.16), transparent 14%),
        radial-gradient(circle at 90% 45%, rgba(16,185,129,0.12), transparent 18%);
      opacity: 1;
      pointer-events: none;
      z-index: 0;
    }

    .hero-inner {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: minmax(320px, 1.15fr) minmax(320px, 0.85fr);
      gap: 2.5rem;
      align-items: center;
    }

    .hero-copy {
      max-width: 640px;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1.25rem;
      color: var(--color-primary);
      letter-spacing: 0.2em;
      text-transform: uppercase;
      font-size: 0.85rem;
      font-weight: 700;
    }

    .hero-copy h1 {
      font-size: clamp(3rem, 5vw, 5rem);
      line-height: 0.95;
      margin: 0 0 1.5rem;
      letter-spacing: -0.05em;
    }

    .hero-copy p {
      font-size: 1.15rem;
      max-width: 600px;
      margin-bottom: 2rem;
      color: var(--text-secondary);
      line-height: 1.9;
    }

    .hero-ctas {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .cta-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      border-radius: 999px;
      padding: 1rem 1.8rem;
      font-size: 1rem;
      font-weight: 600;
      transition: transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;
      text-decoration: none;
      box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
    }

    .cta-btn.primary {
      background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
      color: #ffffff;
    }

    .cta-btn.primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 22px 55px rgba(16, 185, 129, 0.28);
    }

    .cta-btn.secondary {
      background: var(--hero-box-bg);
      color: var(--text-primary);
      border: 1px solid var(--hero-box-border);
    }

    .cta-btn.secondary:hover {
      transform: translateY(-3px);
      background: var(--hero-box-bg-strong);
      box-shadow: 0 18px 40px rgba(15, 23, 42, 0.1);
    }

    .hero-stats {
      display: grid;
      gap: 1rem;
      max-width: 520px;
    }

    .hero-stat {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 1rem;
      padding: 1.25rem 1.5rem;
      border-radius: 24px;
      background: var(--hero-box-bg);
      border: 1px solid var(--hero-box-border);
      color: var(--text-primary);
      box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
    }

    .hero-stat strong {
      display: block;
      font-size: 1rem;
      margin-bottom: 0.35rem;
    }

    .hero-stat p {
      margin: 0;
      color: var(--text-secondary);
      font-size: 0.98rem;
      line-height: 1.8;
    }

    .stat-icon {
      width: 3rem;
      height: 3rem;
      min-width: 3rem;
      display: grid;
      place-items: center;
      border-radius: 18px;
      background: rgba(16, 185, 129, 0.15);
      color: var(--color-primary);
      font-size: 1.1rem;
    }

    .hero-panel {
      position: relative;
      padding: 2rem;
      border-radius: 32px;
      background: var(--hero-box-bg);
      border: 1px solid var(--hero-box-border);
      box-shadow: 0 32px 80px rgba(15, 23, 42, 0.12);
      backdrop-filter: blur(18px);
    }

    .hero-panel-top {
      margin-bottom: 1.75rem;
    }

    .badge {
      display: inline-flex;
      padding: 0.55rem 1rem;
      border-radius: 999px;
      background: rgba(16, 185, 129, 0.12);
      color: var(--color-primary);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    .hero-panel h2 {
      font-size: 2rem;
      margin: 0;
      color: var(--text-primary);
      line-height: 1.1;
    }

    .hero-panel-body p {
      margin: 0 0 1.5rem;
      color: var(--text-secondary);
      line-height: 1.9;
    }

    .hero-panel-body ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: 0.9rem;
    }

    .hero-panel-body li {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      color: var(--text-secondary);
    }

    .hero-panel-body li::before {
      content: '•';
      color: var(--color-primary);
      line-height: 1;
      font-size: 1.25rem;
      margin-top: 0.15rem;
    }

    .hero-panel-footer {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
      margin-top: 2rem;
    }

    .hero-panel-footer div {
      padding: 1.4rem;
      border-radius: 24px;
      background: var(--hero-box-bg-soft);
      border: 1px solid var(--hero-box-border);
    }

    .hero-panel-footer strong {
      display: block;
      font-size: 1.8rem;
      margin-bottom: 0.35rem;
    }

    .hero-panel-footer span {
      color: var(--text-secondary);
      font-size: 0.95rem;
    }

    @media (max-width: 1024px) {
      .hero-inner {
        grid-template-columns: 1fr;
      }

      .hero-panel {
        padding: 1.75rem;
      }
    }

    @media (max-width: 768px) {
      .hero {
        min-height: auto;
        padding: 3.5rem 0;
      }

      .hero-inner {
        gap: 1.75rem;
      }

      .hero-copy h1 {
        font-size: 3rem;
      }

      .hero-stats {
        grid-template-columns: 1fr;
      }

      .hero-panel-footer {
        grid-template-columns: 1fr;
      }

      .hero-deco {
        display: none;
      }
    }
  `],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.8s 0.2s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HeroComponent {}

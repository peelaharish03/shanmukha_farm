import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WhatsappButtonComponent } from './shared/whatsapp-button/whatsapp-button.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { WhyUsComponent } from './sections/why-us/why-us.component';
import { BenefitsComponent } from './sections/benefits/benefits.component';
import { FarmHygieneComponent } from './sections/farm-hygiene/farm-hygiene.component';
import { GalleryComponent } from './sections/gallery/gallery.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { SocialMediaComponent } from './sections/social-media/social-media.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    WhatsappButtonComponent,
    HeroComponent,
    AboutComponent,
    WhyUsComponent,
    BenefitsComponent,
    FarmHygieneComponent,
    GalleryComponent,
    TestimonialsComponent,
    SocialMediaComponent,
    ContactComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-why-us></app-why-us>
      <app-benefits></app-benefits>
      <app-farm-hygiene></app-farm-hygiene>
      <app-gallery></app-gallery>
      <app-testimonials></app-testimonials>
      <app-social-media></app-social-media>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
    <app-whatsapp-button></app-whatsapp-button>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Shanmukha Pig Farm';
}

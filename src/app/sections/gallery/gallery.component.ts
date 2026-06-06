import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="gallery" class="gallery">
      <div class="container">
        <div class="section-header" [@fadeInUp]>
          <h2>Farm Gallery</h2>
          <p>Explore Our Farming Operations</p>
        </div>

        <!-- Filter Buttons -->
        <div class="filter-buttons" [@fadeInUp]>
          <button 
            *ngFor="let category of categories"
            [class.active]="selectedCategory() === category"
            (click)="filterByCategory(category)"
            class="filter-btn">
            {{ category }}
          </button>
        </div>

        <!-- Gallery Grid -->
        <div class="gallery-grid" [@fadeInUp]>
          <div *ngIf="filteredMedia().length === 0" class="empty-gallery">
            <i class="fas fa-image"></i>
            <p>No media files found</p>
            <span>Add images and videos to src/assets/images/ and src/assets/videos/</span>
          </div>
          
          <div *ngFor="let item of filteredMedia()" 
               class="gallery-item"
               [class.video]="item.type === 'video'"
               [@fadeInScale]>
            <div class="gallery-item-image">
              <img [src]="item.thumbnail" [alt]="item.title" loading="lazy">
              <div class="gallery-overlay">
                <button class="view-btn" title="View">
                  <i [class]="item.type === 'video' ? 'fas fa-play' : 'fas fa-search-plus'"></i>
                </button>
              </div>
            </div>
            <div class="gallery-item-info">
              <p class="media-type">
                <i [class]="item.type === 'video' ? 'fas fa-video' : 'fas fa-image'"></i>
                {{ item.type | uppercase }}
              </p>
              <h4>{{ item.title }}</h4>
              <p class="description">{{ item.description }}</p>
            </div>
          </div>
        </div>

        <div class="gallery-info" [@fadeInUp]>
          <p>
            <i class="fas fa-info-circle"></i>
            Click on any image or video to view it in full screen
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .gallery {
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
      margin-bottom: 3rem;
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

    .filter-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: 0.75rem 1.5rem;
      border: 2px solid #d1d5db;
      background: white;
      border-radius: 50px;
      cursor: pointer;
      font-weight: 600;
      color: #6b7280;
      transition: all 0.3s ease;
    }

    .filter-btn:hover {
      border-color: #10b981;
      color: #10b981;
    }

    .filter-btn.active {
      background: #10b981;
      border-color: #10b981;
      color: white;
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .empty-gallery {
      grid-column: 1 / -1;
      text-align: center;
      padding: 4rem 2rem;
      background: white;
      border-radius: 12px;
      border: 2px dashed #d1d5db;
    }

    .empty-gallery i {
      font-size: 3rem;
      color: #d1d5db;
      margin-bottom: 1rem;
      display: block;
    }

    .empty-gallery p {
      font-size: 1.2rem;
      color: #6b7280;
      margin: 0 0 0.5rem 0;
      font-weight: 600;
    }

    .empty-gallery span {
      font-size: 0.9rem;
      color: #9ca3af;
    }

    .gallery-item {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .gallery-item:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    }

    .gallery-item.video {
      border-left: 4px solid #3b82f6;
    }

    .gallery-item-image {
      position: relative;
      width: 100%;
      padding-bottom: 75%;
      overflow: hidden;
      background: #f3f4f6;
    }

    .gallery-item-image img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .gallery-item:hover .gallery-item-image img {
      transform: scale(1.05);
    }

    .gallery-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .gallery-item:hover .gallery-overlay {
      opacity: 1;
    }

    .view-btn {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #10b981;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }

    .view-btn:hover {
      background: #059669;
      transform: scale(1.1);
    }

    .gallery-item-info {
      padding: 1.5rem;
    }

    .media-type {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: #f3f4f6;
      padding: 0.4rem 0.8rem;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      color: #6b7280;
      margin: 0 0 0.75rem 0;
    }

    .gallery-item.video .media-type {
      background: #dbeafe;
      color: #1e40af;
    }

    .gallery-item-info h4 {
      font-size: 1.1rem;
      color: #111827;
      margin: 0 0 0.5rem 0;
      font-weight: 600;
    }

    .gallery-item-info .description {
      color: #6b7280;
      margin: 0;
      font-size: 0.9rem;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .gallery-info {
      text-align: center;
      padding: 1.5rem;
      background: linear-gradient(135deg, #d1fae5, #a7f3d0);
      border-radius: 12px;
      color: #065f46;
    }

    .gallery-info p {
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
    }

    .gallery-info i {
      color: #10b981;
    }

    @media (max-width: 768px) {
      .gallery {
        padding: 3rem 0;
      }

      .section-header h2 {
        font-size: 2rem;
      }

      .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1.5rem;
      }

      .gallery-item-image {
        padding-bottom: 80%;
      }

      .filter-buttons {
        gap: 0.75rem;
        margin-bottom: 2rem;
      }

      .filter-btn {
        padding: 0.6rem 1.2rem;
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
export class GalleryComponent implements OnInit {
  categories = ['All', 'Images', 'Videos', 'Hygiene', 'Feeding', 'Environment'];
  selectedCategory = signal('All');
  mediaItems = signal<any[]>([]);

  ngOnInit() {
    this.loadMediaItems();
  }

  loadMediaItems() {
    // In a real application, you would load from assets folder dynamically
    // For now, showing placeholder structure
    const sampleMedia = [
      {
        id: '1',
        title: 'Farm Overview',
        description: 'Beautiful view of our modern pig farm facility',
        type: 'image' as const,
        thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="20" fill="%236b7280" text-anchor="middle" dy=".3em"%3EFarm Image"%3E%3C/text%3E%3C/svg%3E',
        category: 'Images'
      },
      {
        id: '2',
        title: 'Feeding Process',
        description: 'Healthy feeding with premium quality feed',
        type: 'video' as const,
        thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23dbeafe" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="20" fill="%231e40af" text-anchor="middle" dy=".3em"%3EVideo Thumbnail"%3E%3C/text%3E%3C/svg%3E',
        category: 'Feeding'
      },
      {
        id: '3',
        title: 'Hygiene Check',
        description: 'Daily hygiene inspection and maintenance',
        type: 'image' as const,
        thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="20" fill="%236b7280" text-anchor="middle" dy=".3em"%3EHygiene Image"%3E%3C/text%3E%3C/svg%3E',
        category: 'Hygiene'
      }
    ];
    this.mediaItems.set(sampleMedia);
  }

  filteredMedia() {
    const category = this.selectedCategory();
    if (category === 'All') {
      return this.mediaItems();
    }
    return this.mediaItems().filter(item => item.category === category || item.type === category.toLowerCase());
  }

  filterByCategory(category: string) {
    this.selectedCategory.set(category);
  }
}

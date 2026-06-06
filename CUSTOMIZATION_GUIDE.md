# 🎨 Customization Guide

## How to Customize Your Shanmukha Pig Farm Website

### 1. 📝 Update Farm Information

**File**: `src/app/data/farm-data.ts`

```typescript
export const FARM_INFO: FarmInfo = {
  name: 'Shanmukha Pig Farm',              // Farm name
  proprietor: 'Maddla Srinovasarao',       // Owner name
  mobile: '9705047662',                     // Phone number
  email: 'maddala@gmail.com',              // Email address
  location: 'Tumapala, Andhra Pradesh, India',  // Farm location
  latitude: 'LATITUDE_HERE',               // GPS latitude
  longitude: 'LONGITUDE_HERE'              // GPS longitude
};
```

### 2. 🌐 Change Colors & Theme

**File**: `src/styles.scss`

Update the CSS variables:

```scss
:root {
  --color-primary: #10b981;              // Primary green
  --color-primary-dark: #059669;         // Dark green for hover
  --color-primary-light: #d1fae5;        // Light green background
  --color-secondary: #3b82f6;            // Secondary blue
  
  // Gray shades
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  // ... etc
}
```

### 3. 📸 Add Images & Videos

#### Upload Images:
1. Create high-quality farm images (JPG, PNG, or WebP)
2. Place them in: `src/assets/images/`
3. Suggested images:
   - Farm overview (hero section)
   - Animal housing
   - Feeding area
   - Hygiene maintenance
   - Team photos
   - Product photos

#### Upload Videos:
1. Create or record farm videos (MP4 format recommended)
2. Place them in: `src/assets/videos/`
3. Video ideas:
   - Farm tour (2-3 minutes)
   - Hygiene practices
   - Animal feeding process
   - Daily operations

#### Update Gallery Component:
File: `src/app/sections/gallery/gallery.component.ts`

```typescript
loadMediaItems() {
  const sampleMedia = [
    {
      id: '1',
      title: 'Your Image Title',
      description: 'Your image description',
      type: 'image' as const,
      thumbnail: 'assets/images/your-image.jpg',
      category: 'Images'
    },
    {
      id: '2',
      title: 'Your Video Title',
      description: 'Your video description',
      type: 'video' as const,
      thumbnail: 'assets/images/video-thumbnail.jpg',
      category: 'Feeding'
    }
  ];
  this.mediaItems.set(sampleMedia);
}
```

### 4. 👥 Update Testimonials

**File**: `src/app/data/farm-data.ts`

```typescript
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Customer Name',
    role: 'Restaurant Owner',
    content: 'Their quality is outstanding! Highly recommended.',
    rating: 5
  },
  // Add more testimonials...
];
```

### 5. 🔗 Update Social Media Links

**File**: `src/app/data/farm-data.ts`

```typescript
export const SOCIAL_MEDIA: SocialMedia[] = [
  {
    name: 'Instagram',
    icon: 'fa-instagram',
    url: 'https://instagram.com/your-handle',  // Update your link
    color: '#E4405F'
  },
  {
    name: 'Facebook',
    icon: 'fa-facebook',
    url: 'https://facebook.com/your-page',     // Update your link
    color: '#1877F2'
  },
  // ... etc
];
```

### 6. 📱 Update WhatsApp Message

**File**: `src/app/data/farm-data.ts`

```typescript
export const WHATSAPP_LINK = 'https://wa.me/919705047662?text=Your%20Custom%20Message%20Here';
```

### 7. ✏️ Update Feature Cards

**File**: `src/app/data/farm-data.ts`

```typescript
export const FEATURES: FeatureCard[] = [
  {
    title: 'Feature Title',
    description: 'Feature description...',
    icon: 'fa-icon-name',  // FontAwesome icon
    color: '#10b981'       // Card color
  },
  // ... more features
];
```

Available FontAwesome icons:
- `fa-water` - Water/Hygiene
- `fa-leaf` - Nature/Health
- `fa-stethoscope` - Medical/Care
- `fa-dna` - Breeding
- `fa-box` - Products
- `fa-smile` - Satisfaction
- `fa-heart` - Heart/Care
- `fa-certificate` - Quality
- `fa-handshake` - Partnership
- And [many more...](https://fontawesome.com/icons)

### 8. 📞 Update Contact Section Text

**File**: `src/app/sections/contact/contact.component.ts`

```typescript
// Contact information is automatically pulled from FARM_INFO
// To change displayed text, edit the template in the component
```

### 9. 🎯 Change Hero Section Content

**File**: `src/app/sections/hero/hero.component.ts`

Update template strings:
```typescript
template: `
  <h1 class="hero-title">
    Shanmukha Pig Farm          <!-- Your farm name -->
  </h1>
  <p class="hero-subtitle">
    Healthy Pigs • Hygienic Farming • Quality Meat   <!-- Your tagline -->
  </p>
`
```

### 10. 🏢 Update Section Titles & Content

Edit the `template` property in each component:
- `src/app/sections/about/about.component.ts`
- `src/app/sections/why-us/why-us.component.ts`
- `src/app/sections/benefits/benefits.component.ts`
- `src/app/sections/farm-hygiene/farm-hygiene.component.ts`
- `src/app/sections/gallery/gallery.component.ts`
- `src/app/sections/testimonials/testimonials.component.ts`
- `src/app/sections/contact/contact.component.ts`

### 11. 📰 Update Footer Content

**File**: `src/app/shared/footer/footer.component.ts`

The footer automatically displays:
- Farm name and logo
- Contact information
- Social media links
- Copyright year

To customize the footer text, modify the template in the component.

### 12. 🔍 Update SEO Meta Tags

**File**: `src/index.html`

```html
<title>Shanmukha Pig Farm | Premium Quality Pork | Hygienic Farming</title>
<meta name="description" content="Your description here">
<meta name="keywords" content="pig farm, pork, meat, quality">
```

### 13. 🎨 Modify Component Styles

Each component has its own SCSS styles. To customize colors and styling:

**Example**: `src/app/sections/hero/hero.component.ts`

```typescript
styles: [`
  .hero {
    padding: 5rem 0;
    background: linear-gradient(135deg, #color1, #color2);
  }
  // Modify colors, sizes, spacing here
`]
```

### 14. 🏷️ Update Website Title & SEO

**File**: `src/index.html`

```html
<title>Your Farm Name | Your Tagline</title>
<meta name="author" content="Your Farm Name">
<meta property="og:title" content="Your Farm Name">
```

## 📊 Data Structure Reference

### FarmInfo Interface
```typescript
interface FarmInfo {
  name: string;              // Farm name
  proprietor: string;        // Owner name
  mobile: string;            // Phone number
  email: string;             // Email address
  location: string;          // Physical location
  latitude: string;          // GPS latitude
  longitude: string;         // GPS longitude
}
```

### MediaItem Interface
```typescript
interface MediaItem {
  id: string;                // Unique ID
  title: string;             // Media title
  description: string;       // Media description
  type: 'image' | 'video';   // Type
  thumbnail: string;         // Thumbnail URL
  url: string;               // Full media URL
  uploadDate: Date;          // Upload date
  category?: string;         // Category tag
}
```

### FeatureCard Interface
```typescript
interface FeatureCard {
  title: string;             // Card title
  description: string;       // Card description
  icon: string;              // FontAwesome icon
  color?: string;            // Card color (hex)
}
```

## 🔧 Advanced Customization

### Change Primary Colors Globally
1. Edit `src/styles.scss`
2. Update `--color-primary` and related colors
3. All components will automatically use the new colors

### Modify Typography
1. Edit `src/styles.scss`
2. Adjust font sizes and weights
3. Supports responsive typography

### Add Custom Animations
1. Edit individual component animations
2. Use Angular's `@Component` decorator with `animations` property
3. Reference: [Angular Animations Docs](https://angular.io/guide/animations)

### Responsive Breakpoints
- Desktop: 1024px and up
- Tablet: 768px to 1023px
- Mobile: Below 768px

Edit `@media (max-width: 768px)` queries in components to adjust responsive design.

## 🚀 After Customization

1. **Test locally**:
   ```bash
   ng serve
   ```

2. **Build for production**:
   ```bash
   ng build --configuration production
   ```

3. **Test production build**:
   ```bash
   npm install -g http-server
   http-server dist/shamukha-farm/
   ```

4. **Deploy**:
   ```bash
   # Choose your deployment method
   netlify deploy --prod --dir=dist/shamukha-farm
   ```

## 📱 Testing Responsiveness

Use Chrome DevTools to test on different screen sizes:
1. Press F12 to open DevTools
2. Click mobile icon (top-left of DevTools)
3. Select different devices to test
4. Test on real devices if possible

## 🆘 Need Help?

- Review the [SETUP_GUIDE.md](./SETUP_GUIDE.md) for technical setup
- Check [NEXT_STEPS.md](./NEXT_STEPS.md) for deployment guidance
- Refer to [Angular Documentation](https://angular.io/docs)
- FontAwesome Icons: [fontawesome.com/icons](https://fontawesome.com/icons)

---

**Happy Customizing!** 🎉

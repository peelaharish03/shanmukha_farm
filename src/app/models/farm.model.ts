export interface FarmInfo {
  name: string;
  proprietor: string;
  mobile: string;
  email: string;
  location: string;
  latitude: string;
  longitude: string;
}

export interface MediaItem {
  id: string;
  title: string;
  description: string;
  type: 'image' | 'video';
  thumbnail: string;
  url: string;
  uploadDate: Date;
  category?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface SocialMedia {
  name: string;
  icon: string;
  url: string;
  color: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: string;
  color?: string;
}

export interface BenefitCard {
  title: string;
  description: string;
  icon: string;
}

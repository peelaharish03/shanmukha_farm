// Environment configuration for development
// This file is replaced during build with environment.prod.ts for production builds

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
  siteUrl: 'http://localhost:4200',
  siteName: 'Shanmukha Pig Farm',
  
  // Farm Information
  farm: {
    name: 'Shanmukha Pig Farm',
    proprietor: 'Maddla Srinovasarao',
    phone: '+91 9705047662',
    email: 'maddala@gmail.com',
    location: 'Tumapala, Andhra Pradesh, India',
    latitude: 'LATITUDE_HERE',
    longitude: 'LONGITUDE_HERE'
  },
  
  // Social Media Links
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    youtube: 'https://youtube.com/',
    twitter: 'https://twitter.com/',
    whatsapp: 'https://wa.me/919705047662'
  },
  
  // Analytics
  analytics: {
    enabled: false,
    googleAnalyticsId: ''
  },
  
  // Feature Flags
  features: {
    enableGallery: true,
    enableContactForm: false,
    enableNewsletterSignup: false,
    enableBooking: false
  }
};

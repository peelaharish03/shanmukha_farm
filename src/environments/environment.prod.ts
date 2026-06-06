// Environment configuration for production
// This file is used in production builds

export const environment = {
  production: true,
  apiUrl: 'https://api.shanmukhapigfarm.com',
  siteUrl: 'https://shanmukhapigfarm.com',
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
    enabled: true,
    googleAnalyticsId: 'G-XXXXXXXXXX'  // Add your GA ID here
  },
  
  // Feature Flags
  features: {
    enableGallery: true,
    enableContactForm: true,
    enableNewsletterSignup: false,
    enableBooking: false
  }
};

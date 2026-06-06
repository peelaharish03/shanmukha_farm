import { FarmInfo, Testimonial, SocialMedia, FeatureCard, BenefitCard } from '../models/farm.model';

export const FARM_INFO: FarmInfo = {
  name: 'Shanmukha Pig Farm',
  proprietor: 'Maddla Srinovasarao',
  mobile: '9705047662',
  email: 'maddala@gmail.com',
  location: 'Tumapala, Andhra Pradesh, India',
  latitude: 'LATITUDE_HERE',
  longitude: 'LONGITUDE_HERE'
};

export const WHATSAPP_LINK = 'https://wa.me/919705047662?text=Hello%20Shanmukha%20Pig%20Farm%2C%20I%20would%20like%20to%20know%20more%20about%20your%20pigs%20and%20meat%20availability.';

export const FEATURES: FeatureCard[] = [
  {
    title: 'Hygienic Environment',
    description: 'Our farm maintains strict hygiene standards with daily cleaning and sanitization protocols.',
    icon: 'fa-water',
    color: '#10b981'
  },
  {
    title: 'Healthy Feeding',
    description: 'Pigs are fed with premium quality feed formulated for optimal health and growth.',
    icon: 'fa-leaf',
    color: '#06b6d4'
  },
  {
    title: 'Veterinary Care',
    description: 'Regular health checkups and professional veterinary supervision ensure animal wellness.',
    icon: 'fa-stethoscope',
    color: '#f59e0b'
  },
  {
    title: 'Quality Breeding',
    description: 'We maintain superior genetic lines for consistent quality and healthy offspring.',
    icon: 'fa-dna',
    color: '#8b5cf6'
  },
  {
    title: 'Farm Fresh Supply',
    description: 'Fresh pork delivered with complete transparency and traceability from farm to table.',
    icon: 'fa-box',
    color: '#ef4444'
  },
  {
    title: 'Customer Satisfaction',
    description: 'Dedicated to providing exceptional service and building long-term relationships.',
    icon: 'fa-smile',
    color: '#ec4899'
  }
];

export const BENEFITS: BenefitCard[] = [
  {
    title: 'High Protein Source',
    description: 'Pork meat is an excellent source of complete protein with all essential amino acids.',
    icon: 'fa-fire'
  },
  {
    title: 'Rich in Vitamins',
    description: 'Contains B vitamins essential for energy metabolism and nervous system function.',
    icon: 'fa-capsules'
  },
  {
    title: 'Energy Boosting',
    description: 'High iron and B12 content helps combat fatigue and boost energy levels.',
    icon: 'fa-bolt'
  },
  {
    title: 'Muscle Growth',
    description: 'Perfect for muscle building and recovery with high-quality amino acid profile.',
    icon: 'fa-dumbbell'
  },
  {
    title: 'Nutritional Value',
    description: 'Rich in selenium, zinc, and phosphorus for overall health and immunity.',
    icon: 'fa-heart'
  },
  {
    title: 'Essential Minerals',
    description: 'Contains crucial minerals for bone health, nerve function, and metabolic processes.',
    icon: 'fa-gem'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Rajesh Kumar',
    role: 'Hotel Manager',
    content: 'Shanmukha Pig Farm delivers the freshest and highest quality pork. Our customers love it, and the farm maintains excellent hygiene standards.',
    rating: 5
  },
  {
    id: '2',
    author: 'Priya Patel',
    role: 'Restaurant Owner',
    content: 'The quality of meat and consistency is outstanding. Communication is seamless, and they always deliver on time with best quality products.',
    rating: 5
  },
  {
    id: '3',
    author: 'Vikram Singh',
    role: 'Meat Distributor',
    content: 'Working with Shanmukha for 2 years now. Their commitment to animal welfare and product quality is unmatched in the region.',
    rating: 5
  },
  {
    id: '4',
    author: 'Anita Sharma',
    role: 'Corporate Chef',
    content: 'We exclusively source from Shanmukha for our premium events. The meat quality and farm hygiene standards are exemplary.',
    rating: 5
  }
];

export const SOCIAL_MEDIA: SocialMedia[] = [
  {
    name: 'Instagram',
    icon: 'fa-instagram',
    url: 'https://instagram.com/',
    color: '#E4405F'
  },
  {
    name: 'Facebook',
    icon: 'fa-facebook',
    url: 'https://facebook.com/',
    color: '#1877F2'
  },
  {
    name: 'YouTube',
    icon: 'fa-youtube',
    url: 'https://youtube.com/',
    color: '#FF0000'
  },
  {
    name: 'WhatsApp',
    icon: 'fa-whatsapp',
    url: WHATSAPP_LINK,
    color: '#25D366'
  },
  {
    name: 'X (Twitter)',
    icon: 'fa-x-twitter',
    url: 'https://twitter.com/',
    color: '#000000'
  }
];

export const HYGIENE_PRACTICES = [
  {
    title: 'Daily Cleaning Process',
    description: 'Shelters are cleaned twice daily with sanitized equipment and eco-friendly disinfectants.',
    icon: 'fa-broom'
  },
  {
    title: 'Water Management',
    description: 'Clean, treated water is available 24/7 with automated systems for hygiene.',
    icon: 'fa-droplet'
  },
  {
    title: 'Disease Prevention',
    description: 'Strict quarantine protocols and preventive health measures minimize disease risks.',
    icon: 'fa-shield'
  },
  {
    title: 'Veterinary Inspections',
    description: 'Regular veterinary checkups and health certifications ensure livestock wellness.',
    icon: 'fa-stethoscope'
  },
  {
    title: 'Healthy Feeding Systems',
    description: 'Automated feeding systems ensure consistent nutrition and minimal waste.',
    icon: 'fa-wheat'
  }
];

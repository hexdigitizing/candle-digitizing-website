export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  turnaround: string;
  startingPrice: string;
  formats: string[];
  features: string[];
  idealFor: string;
  sampleImage: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  category: '3D Puff' | 'Left Chest' | 'Logos' | 'Caps' | 'Jacket Back' | 'Vector Art' | 'Patches' | 'Small Text' | 'Applique' | string;
  clientIndustry: string;
  dimensions: string;
  stitchCount: number;
  colorStops: number;
  format: string;
  turnaroundTime: string;
  originalArtImage: string;
  digitizedStitchImage: string;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  verifiedOrder: string;
  comment: string;
  highlight: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featuredImage: string;
  tags: string[];
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceType: string;
  placement: string;
  requiredFormat: string;
  dimensions: string;
  fabricType: string;
  turnaround: string;
  notes: string;
  fileName?: string;
  fileSize?: string;
  estimatedStitches?: number;
  estimatedPrice?: number;
}

export interface OrderTimelineStep {
  title: string;
  desc: string;
  timestamp: string;
  status: 'completed' | 'current' | 'upcoming';
}

export interface CustomerOrder {
  id: string; // e.g. "CD-748921"
  pin: string; // e.g. "4921"
  email: string;
  fullName: string;
  phone: string;
  companyName: string;
  serviceType: string;
  placement?: string;
  dimensions: string;
  requiredFormat: string;
  turnaround: string;
  notes: string;
  fileName?: string;
  fileSize?: string;
  status: 'Received' | 'In Digitizing' | 'Sewout QC' | 'Completed' | 'Ready for Download';
  submittedAt: string;
  estimatedCompletion: string;
  estimatedStitches?: number;
  timeline: OrderTimelineStep[];
  downloadablePreview?: string;
}

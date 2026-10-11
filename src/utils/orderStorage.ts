import { CustomerOrder } from '../types';

const STORAGE_KEY = 'candle_digitizing_orders_v2';

// Initial pre-seeded demo orders so users can immediately test the "Find My Orders" feature
const SEED_ORDERS: CustomerOrder[] = [
  {
    id: 'CD-884219',
    pin: '1234',
    email: 'client@example.com',
    fullName: 'Sarah Jenkins',
    phone: '+1 (555) 234-5678',
    companyName: 'Apex Sportswear Ltd',
    serviceType: '3D Puff Cap Digitizing',
    placement: 'Cap Center Front',
    dimensions: '4.5" W x 2.25" H',
    requiredFormat: 'Tajima (.DST)',
    turnaround: 'Rush (4-8h)',
    notes: 'Need high underlay density for structured 6-panel twill cap. Ensure zero foam peeking.',
    fileName: 'apex-hawk-logo.png',
    fileSize: '3.4 MB',
    status: 'In Digitizing',
    submittedAt: '2026-09-19T10:15:00Z',
    estimatedCompletion: 'Today at 4:30 PM (Rush Shift)',
    estimatedStitches: 14250,
    downloadablePreview: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80',
    timeline: [
      {
        title: 'Order Received & Vector Prepped',
        desc: 'Artwork verified and scaled to 4.5" width. Stitch density parameters configured.',
        timestamp: '10:15 AM',
        status: 'completed',
      },
      {
        title: '3D Foam Digitizing & Pull Compensation',
        desc: 'Senior digitizer calibrating column capping, auto-split satin stitches, and needle trims.',
        timestamp: '11:40 AM',
        status: 'current',
      },
      {
        title: 'Tajima Head Test Sew-out',
        desc: 'Running sample sewout on 2.5mm EVA high-density foam on Barudan commercial head.',
        timestamp: 'Scheduled 2:15 PM',
        status: 'upcoming',
      },
      {
        title: 'QC Inspection & Production Package Dispatch',
        desc: 'Final high-res sewout photography, color sequence worksheet, and DST file delivery.',
        timestamp: 'Scheduled 4:00 PM',
        status: 'upcoming',
      },
    ],
  },
  {
    id: 'CD-731904',
    pin: '5521',
    email: 'candledigitizing@gmail.com',
    fullName: 'Marcus Vance',
    phone: '+1 (800) 555-4393',
    companyName: 'Vance Custom Apparel',
    serviceType: 'Left Chest Corporate Logo',
    placement: 'Left Chest Pique Polo',
    dimensions: '3.5" W x 2.0" H',
    requiredFormat: 'Barudan (.DSB)',
    turnaround: 'Standard (12-24h)',
    notes: 'Small serif text at bottom must remain crisp and readable with 65/9 needle.',
    fileName: 'crest-shield-vector.ai',
    fileSize: '5.1 MB',
    status: 'Ready for Download',
    submittedAt: '2026-09-18T16:00:00Z',
    estimatedCompletion: 'Ready Now (QC Approved)',
    estimatedStitches: 8920,
    downloadablePreview: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
    timeline: [
      {
        title: 'Order Received & Scaled',
        desc: 'Order accepted and routed to micro-text specialist.',
        timestamp: 'Yesterday 4:00 PM',
        status: 'completed',
      },
      {
        title: 'Pathing & Center-Out Underlay',
        desc: 'Tack-down edge runs applied to prevent fabric puckering on pique weave.',
        timestamp: 'Yesterday 7:30 PM',
        status: 'completed',
      },
      {
        title: 'Live Commercial Sew-out Tested',
        desc: 'Stitched at 850 RPM with zero thread breaks. Small 4.5mm text passed 100% legibility.',
        timestamp: 'Today 8:20 AM',
        status: 'completed',
      },
      {
        title: 'Production Package Ready',
        desc: 'Delivered Tajima DST, Barudan DSB, EMB source file and PDF color run sheet.',
        timestamp: 'Today 9:00 AM',
        status: 'completed',
      },
    ],
  },
];

/**
 * Retrieves all stored customer orders, initializing with seed data if none exist.
 */
export function getAllOrders(): CustomerOrder[] {
  if (typeof window === 'undefined') return SEED_ORDERS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_ORDERS));
      return SEED_ORDERS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : SEED_ORDERS;
  } catch (err) {
    console.error('Failed to parse stored orders from localStorage', err);
    return SEED_ORDERS;
  }
}

/**
 * Generates a clean, highly memorable 4-digit PIN (e.g. "8492").
 */
export function generateOrderPin(): string {
  // 4-digit numerical PIN between 1000 and 9999
  const pinNum = Math.floor(1000 + Math.random() * 9000);
  return pinNum.toString();
}

/**
 * Generates a human-friendly unique order reference (e.g. "CD-648291").
 */
export function generateOrderId(): string {
  const num = Math.floor(100000 + Math.random() * 900000);
  return `CD-${num}`;
}

/**
 * Saves a new customer order into localStorage.
 */
export function saveOrder(order: CustomerOrder): CustomerOrder {
  if (typeof window === 'undefined') return order;
  try {
    const current = getAllOrders();
    // Add new order to the beginning
    const updated = [order, ...current.filter((o) => o.id !== order.id)];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save order to localStorage', err);
  }
  return order;
}

/**
 * Searches for orders by email and PIN (case-insensitive email matching, trimmed PIN).
 */
export function findOrdersByEmailAndPin(email: string, pin: string): CustomerOrder[] {
  const orders = getAllOrders();
  const cleanEmail = email.trim().toLowerCase();
  const cleanPin = pin.trim();

  if (!cleanEmail || !cleanPin) return [];

  return orders.filter(
    (order) =>
      order.email.trim().toLowerCase() === cleanEmail &&
      order.pin.trim() === cleanPin
  );
}

/**
 * Helper to get a pre-existing demo credential for quick-testing in UI.
 */
export function getDemoCredentials(): { email: string; pin: string; orderId: string } {
  return {
    email: 'client@example.com',
    pin: '1234',
    orderId: 'CD-884219',
  };
}

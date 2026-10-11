import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { ServicesShowcase } from './components/ServicesShowcase';
import { AboutSection } from './components/AboutSection';
import { HowItWorks } from './components/HowItWorks';
import { GallerySection } from './components/GallerySection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { PricingSection } from './components/PricingSection';
import { StatsSection } from './components/StatsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialSlider } from './components/TestimonialSlider';
import { BlogSection } from './components/BlogSection';
import { FaqSection } from './components/FaqSection';
import { ContactForm } from './components/ContactForm';
import { FindMyOrdersPage } from './components/FindMyOrdersPage';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { Footer } from './components/Footer';
import { QuoteDialog } from './components/QuoteDialog';
import { Service, GalleryProject } from './types';
import { MessageCircle, Zap } from 'lucide-react';

const getInitialPage = (): 'home' | 'find-orders' | 'login' | 'register' => {
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  if (path === '/login' || hash === '#login') return 'login';
  if (path === '/register' || path === '/signup' || hash === '#register' || hash === '#signup') return 'register';
  if (path === '/find-orders' || hash === '#find-orders') return 'find-orders';
  return 'home';
};

export default function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'find-orders' | 'login' | 'register'>(getInitialPage());
  const [orderLookupCredentials, setOrderLookupCredentials] = useState<{ email?: string; pin?: string } | null>(null);
  
  // Separate Quote Dialog state
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);
  const [quoteDefaultPlacement, setQuoteDefaultPlacement] = useState<string | undefined>(undefined);

  // Sync state with URL hash and path, support browser back/forward and direct refresh
  useEffect(() => {
    const handleLocationChange = () => {
      const page = getInitialPage();
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateToHome = () => {
    setCurrentPage('home');
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToLogin = () => {
    setCurrentPage('login');
    window.history.pushState(null, '', '/login');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToRegister = () => {
    setCurrentPage('register');
    window.history.pushState(null, '', '/register');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToFindOrders = (email?: string, pin?: string) => {
    if (email || pin) {
      setOrderLookupCredentials({ email, pin });
    }
    setCurrentPage('find-orders');
    window.history.pushState(null, '', '#find-orders');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToOrder = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      window.history.pushState(null, '', '/');
      setTimeout(() => {
        const contactElem = document.getElementById('order') || document.getElementById('contact');
        if (contactElem) {
          contactElem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    const contactElem = document.getElementById('order') || document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuoteDialog = (placementOrPlan?: string) => {
    setQuoteDefaultPlacement(placementOrPlan);
    setIsQuoteDialogOpen(true);
  };

  const handleCloseQuoteDialog = () => {
    setIsQuoteDialogOpen(false);
  };

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
    scrollToOrder();
  };

  const handleSelectPlan = (_planId: string) => {
    scrollToOrder();
  };

  const handleRequestSimilarProject = (project: GalleryProject) => {
    setSelectedService({
      id: project.id,
      title: `${project.category} Digitizing`,
      shortDesc: project.description,
      fullDesc: project.description,
      iconName: 'Layers',
      badge: 'Portfolio Order',
      turnaround: project.turnaroundTime,
      startingPrice: '$18',
      formats: [project.format],
      features: project.highlights,
      idealFor: project.clientIndustry,
      sampleImage: project.digitizedStitchImage,
    });
    scrollToOrder();
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] flex flex-col selection:bg-[#FEA800] selection:text-[#1F2244] font-body text-slate-800 antialiased">
      
      {/* Top Bar with Phone, Email, Business Hours & Account Links */}
      <TopBar 
        onNavigateToLogin={navigateToLogin}
        onNavigateToRegister={navigateToRegister}
      />

      {/* Primary Sticky Header Navigation with Separate Order & Quote Triggers */}
      <Navbar 
        onOpenOrder={scrollToOrder}
        onOpenQuote={() => handleOpenQuoteDialog()}
        currentView={currentPage}
        onNavigateToHome={navigateToHome}
        onNavigateToFindOrders={() => navigateToFindOrders()}
        onNavigateToLogin={navigateToLogin}
        onNavigateToRegister={navigateToRegister}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {currentPage === 'login' ? (
          <LoginPage 
            onBackToHome={navigateToHome}
            onNavigateToRegister={navigateToRegister}
          />
        ) : currentPage === 'register' ? (
          <RegisterPage 
            onBackToHome={navigateToHome}
            onNavigateToLogin={navigateToLogin}
          />
        ) : currentPage === 'find-orders' ? (
          <FindMyOrdersPage 
            onBackToHome={navigateToHome}
            initialEmail={orderLookupCredentials?.email}
            initialPin={orderLookupCredentials?.pin}
          />
        ) : (
          <>
            {/* 1. Hero Section with Sleek Carousel, Order CTAs, and Get Quote Trigger */}
            <Hero 
              onOpenOrder={scrollToOrder}
              onOpenQuote={handleOpenQuoteDialog} 
            />

            {/* 2. Four Feature Pillars / Trust Badges */}
            <TrustBadges />

            {/* 3. Services Showcase (9 Services with Kiddino rounded cards & detail modal) */}
            <ServicesShowcase onSelectService={handleSelectService} />

            {/* 4. About Section: Technical Precision in Every Stitch */}
            <AboutSection onOpenQuote={scrollToOrder} />

            {/* 5. How It Works (4-step commercial digitizing workflow) */}
            <HowItWorks />

            {/* 6. Client Project Gallery (Our Recent Work with Category Filters & Modal) */}
            <GallerySection onRequestSimilar={handleRequestSimilarProject} />

            {/* 7. Before / After Comparison: From Artwork to Stitches */}
            <BeforeAfterSection onOpenQuote={() => handleOpenQuoteDialog()} />

            {/* 8. Pricing Section (Get a Quote cards + Custom Stitch Quote button) */}
            <PricingSection 
              onSelectPlan={handleSelectPlan} 
              onOpenQuote={handleOpenQuoteDialog} 
            />

            {/* 9. Statistics / Counter Blocks (10K+, 98%, 24H, 50+ Formats) */}
            <StatsSection />

            {/* 10. Why Choose Us (8 Colorful Reason Blocks) */}
            <WhyChooseUs onOpenQuote={scrollToOrder} />

            {/* 11. Testimonial Slider (What Our Clients Say) */}
            <TestimonialSlider />

            {/* 12. Blog Section (Embroidery Insights & Tips) */}
            <BlogSection onOpenQuote={() => handleOpenQuoteDialog()} />

            {/* 13. Frequently Asked Questions Accordion */}
            <FaqSection />

            {/* 14. Comprehensive Existing Order Form with PIN Generation + Banner */}
            <ContactForm 
              selectedService={selectedService}
              onNavigateToFindOrders={navigateToFindOrders}
            />
          </>
        )}
      </main>

      {/* 15. Comprehensive Themed Footer with Request Free Sew-out Estimate Quote Trigger */}
      <Footer 
        onNavigateToFindOrders={() => navigateToFindOrders()} 
        onOpenQuote={() => handleOpenQuoteDialog()}
        onNavigateToLogin={navigateToLogin}
        onNavigateToRegister={navigateToRegister}
      />

      {/* Separate Quote Dialog Modal (Triggered by Get Quote, Custom Stitch Quote, Sew-out Estimate) */}
      <QuoteDialog
        isOpen={isQuoteDialogOpen}
        onClose={handleCloseQuoteDialog}
        defaultPlacement={quoteDefaultPlacement}
        onOpenFullOrder={scrollToOrder}
      />

      {/* Floating Fast WhatsApp Order Button */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        <a
          href="https://wa.me/18005554393?text=Hi%20Candle%20Digitizing!%20I%20have%20an%20embroidery%20digitizing%20order."
          target="_blank"
          rel="noopener noreferrer"
          className="vs-btn vs-btn-green font-bold text-xs !py-3 !px-4 shadow-2xl flex items-center gap-2 hover:scale-105 transition-all group"
          title="Direct WhatsApp Inquiry"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">WhatsApp Order</span>
        </a>
      </div>

    </div>
  );
}

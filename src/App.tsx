import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LatestCollection } from './components/LatestCollection';
import { ManifestoSection } from './components/ManifestoSection';
import { SpotlightSection } from './components/SpotlightSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PremiumCollection } from './components/PremiumCollection';
import { FooterExact } from './components/FooterExact';
import { ProductsPage } from './components/ProductsPage';
import { OrderModal } from './components/OrderModal';
import { ScrollReveal } from './components/ScrollReveal';
import { ProductItem, LATEST_COLLECTION, HERO_ASSETS } from './data/furnitureData';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'products'>('home');
  const [currency, setCurrency] = useState<'USD' | 'PKR'>('USD');
  const [cart, setCart] = useState<ProductItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'USD' ? 'PKR' : 'USD'));
  };

  const handleAddToCart = (item: ProductItem) => {
    setCart((prev) => [...prev, item]);
  };

  const handleOpenShop = () => {
    setSelectedProduct(LATEST_COLLECTION[0]);
  };

  const handleSpotlightBuy = () => {
    setSelectedProduct({
      id: 'spotlight-exec',
      name: 'Executive Office Sofa',
      category: 'Sofas',
      description: 'Smooth, innovative office sofa collection with comfortable posture and durable frame.',
      priceUSD: 2850.65,
      pricePKR: 795000,
      image: HERO_ASSETS.spotlightSofa,
      tag: 'Executive Choice',
    });
  };

  const handleHotspotClick = () => {
    setSelectedProduct({
      id: 'trenola-sofa',
      name: 'Trenola Modern Sofa',
      category: 'Living',
      description: 'Signature plush low-profile sofa with sink-in posture and stain-resistant fabric.',
      priceUSD: 450,
      pricePKR: 125000,
      image: HERO_ASSETS.testimonialRoom,
      tag: 'Customer Favorite',
    });
  };

  return (
    <div className="min-h-screen bg-[#f7f3ed] text-[#261e19] font-sans selection:bg-[#8c5234] selection:text-white w-full">
      
      {/* Viewport Container with warm earthy canvas */}
      <div className="w-full max-w-[1536px] mx-auto px-1 sm:px-3">
        
        {/* Navigation Bar with View Switcher */}
        <Navbar
          currency={currency}
          onToggleCurrency={handleToggleCurrency}
          onOpenShop={handleOpenShop}
          cartCount={cart.length}
          currentView={currentView}
          onNavigateView={setCurrentView}
        />

        {currentView === 'home' ? (
          <main className="w-full space-y-4 sm:space-y-6">
            {/* 1. Hero Section: with scroll reveal */}
            <ScrollReveal direction="down" duration={700}>
              <HeroSection
                onExploreClick={() => {
                  const el = document.getElementById('latest-collection');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </ScrollReveal>

            {/* 2. "Explore latest collection": with scroll reveal */}
            <ScrollReveal direction="up" duration={600} delay={100}>
              <LatestCollection
                currency={currency}
                onSelectProduct={setSelectedProduct}
              />
            </ScrollReveal>

            {/* 3. "WHY FROM US?": with scroll reveal */}
            <ScrollReveal direction="up" duration={650}>
              <ManifestoSection />
            </ScrollReveal>

            {/* 4. "EXCELLENT QUALITY": with scroll reveal */}
            <ScrollReveal direction="up" duration={650}>
              <SpotlightSection
                currency={currency}
                onBuyNow={handleSpotlightBuy}
              />
            </ScrollReveal>

            {/* 5. "TESTIMONIALS": with scroll reveal */}
            <ScrollReveal direction="up" duration={650}>
              <TestimonialsSection
                currency={currency}
                onSpotlightClick={handleHotspotClick}
              />
            </ScrollReveal>

            {/* 6. "Our premium collection": with scroll reveal */}
            <ScrollReveal direction="up" duration={650}>
              <PremiumCollection
                currency={currency}
                onSelectProduct={setSelectedProduct}
              />
            </ScrollReveal>

            {/* 7. Dark Modern Footer with newsletter */}
            <ScrollReveal direction="up" duration={500}>
              <FooterExact onJoinClick={handleOpenShop} />
            </ScrollReveal>
          </main>
        ) : (
          <main className="w-full">
            {/* Dedicated Glassmorphism Products Page */}
            <ProductsPage
              currency={currency}
              onSelectProduct={setSelectedProduct}
              onBackToHome={() => setCurrentView('home')}
            />
            {/* Footer on products page */}
            <FooterExact onJoinClick={handleOpenShop} />
          </main>
        )}

      </div>

      {/* Interactive Detail & Order Modal */}
      <OrderModal
        product={selectedProduct}
        currency={currency}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

    </div>
  );
}

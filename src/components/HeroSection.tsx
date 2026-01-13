import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import goldBarsHero from '@/assets/gold-bars-hero.jpg';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Content animations
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const headlineScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.96]);
  
  // Subheadline fades slower than headline
  const subheadlineOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
  
  // Gold image scroll transforms - subtle and elegant
  const goldScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.92]);
  const goldY = useTransform(scrollYProgress, [0, 0.6], [0, 80]);
  const goldRotate = useTransform(scrollYProgress, [0, 0.6], [0, 3]);
  
  // Background depth
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.4]);
  
  // CTA glow intensity
  const ctaGlow = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900"
    >
      {/* Deep Navy Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
      
      {/* Subtle gold ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--gold-400)/0.08)_0%,_transparent_60%)]" />
      
      {/* Darkening overlay on scroll */}
      <motion.div 
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-navy-900/60 z-[1]"
      />

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-24">
          
          {/* Left: Text Content */}
          <motion.div 
            style={{ opacity: contentOpacity, y: contentY }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-gold-400/30 bg-navy-800/50 backdrop-blur-sm"
            >
              <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-gold" />
              <span className="text-xs font-medium tracking-luxury text-gold-200 uppercase">
                UAE Licensed & Regulated
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{ scale: headlineScale }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight"
            >
              Real Gold.
              <br />
              <span className="text-gradient-gold">Real Ownership.</span>
            </motion.h1>

            {/* Subheadline - fades slower */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              style={{ opacity: subheadlineOpacity }}
              className="text-lg md:text-xl text-gold-100/70 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Buy and sell 24K investment-grade gold digitally. 
              Fully backed by physical gold stored in insured UAE vaults.
            </motion.p>

            {/* CTA Buttons with scroll-enhanced glow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
            >
              <motion.a 
                href="#cta" 
                style={{ 
                  boxShadow: useTransform(ctaGlow, v => `0 0 ${20 + v * 30}px hsl(var(--gold-400) / ${0.3 + v * 0.4})`)
                }}
                className="btn-gold rounded-full text-base font-medium min-w-[200px] transition-all duration-300"
              >
                Buy Gold Now
              </motion.a>
              <a 
                href="#how-it-works" 
                className="px-8 py-3 rounded-full text-base font-medium min-w-[200px] border border-gold-400/40 text-gold-200 hover:bg-gold-400/10 hover:border-gold-400/60 transition-all duration-300"
              >
                How It Works
              </a>
            </motion.div>

            {/* App Store Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on App Store" 
                  className="h-10"
                />
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-10"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Gold Bars Image with scroll animations */}
          <motion.div 
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
            style={{ 
              scale: goldScale,
              y: goldY,
              rotateZ: goldRotate
            }}
          >
            {/* Gold glow behind image */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--gold-400)/0.25)_0%,_transparent_70%)] blur-3xl scale-110" />
            
            {/* Main gold image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative"
            >
              <img 
                src={goldBarsHero}
                alt="Premium 24K Gold Bars"
                className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain drop-shadow-2xl"
              />
              
              {/* Subtle reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gold-300/60"
        >
          <span className="text-xs tracking-luxury uppercase">Scroll to Explore</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

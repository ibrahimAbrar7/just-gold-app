import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const goldY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const goldRotate = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.3]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Background Gold Particles */}
      <div className="absolute inset-0 gold-particles" />
      
      {/* Ambient Gold Glow */}
      <motion.div 
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-navy-900/20"
      />
      
      {/* Floating Gold Elements */}
      <motion.div
        style={{ y: goldY, rotate: goldRotate }}
        className="absolute top-1/4 right-[15%] w-32 h-32 rounded-full bg-gradient-to-br from-gold-300/40 to-gold-500/20 blur-2xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
        className="absolute bottom-1/3 left-[10%] w-48 h-48 rounded-full bg-gradient-to-br from-gold-400/30 to-gold-600/10 blur-3xl"
      />

      {/* Main Content */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 container mx-auto px-6 lg:px-12 text-center"
      >
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-gold-200 bg-white/80 backdrop-blur-sm"
        >
          <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse-gold" />
          <span className="text-xs font-medium tracking-luxury text-navy-600 uppercase">
            UAE Licensed & Regulated
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-navy-900 mb-6 leading-tight"
        >
          Real Gold.
          <br />
          <span className="text-gradient-gold">Real Ownership.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-navy-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Buy and sell 24K investment-grade gold digitally. 
          Fully backed by physical gold stored in insured UAE vaults.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a href="#cta" className="btn-gold rounded-full text-base font-medium min-w-[200px]">
            Buy Gold Now
          </a>
          <a href="#how-it-works" className="btn-outline-gold rounded-full text-base font-medium min-w-[200px]">
            How It Works
          </a>
        </motion.div>

        {/* App Store Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center gap-4"
        >
          <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
              alt="Download on App Store" 
              className="h-10"
            />
          </a>
          <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Get it on Google Play" 
              className="h-10"
            />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-navy-400"
        >
          <span className="text-xs tracking-luxury uppercase">Scroll to Explore</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

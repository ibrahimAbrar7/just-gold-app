import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const glowIntensity = useTransform(scrollYProgress, [0.3, 0.7], [0.2, 0.6]);

  return (
    <section id="cta" ref={containerRef} className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gold-50/50 to-white" />
      
      {/* Gold Glow Effect */}
      <motion.div
        style={{ opacity: glowIntensity }}
        className="absolute inset-0 bg-gradient-to-r from-gold-300/30 via-gold-400/20 to-gold-300/30"
      />
      
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-400/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-gold-300 bg-white/80">
            <div className="w-2 h-2 rounded-full bg-gold-500" />
            <span className="text-xs font-medium tracking-luxury text-navy-600 uppercase">
              Start Your Journey
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-navy-900 mb-6 leading-tight">
            Begin Your
            <br />
            <span className="text-gradient-gold">Gold Legacy Today</span>
          </h2>

          <p className="text-lg md:text-xl text-navy-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Join thousands of investors who trust JustGold for their precious metals investment. 
            Open your account in minutes and start building wealth that lasts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-gold rounded-full text-lg font-medium min-w-[240px] flex items-center justify-center gap-2 group"
            >
              Create Free Account
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <a 
              href="#how-it-works" 
              className="text-navy-600 hover:text-gold-600 font-medium transition-colors"
            >
              Learn more about us
            </a>
          </div>

          {/* Trust Line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-sm text-navy-400"
          >
            No credit card required • Start with just AED 50 • Fully regulated
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;

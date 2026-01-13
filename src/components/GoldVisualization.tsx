import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const GoldVisualization = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const barY = useTransform(scrollYProgress, [0.2, 0.6], [100, 0]);
  const barRotate = useTransform(scrollYProgress, [0.2, 0.6], [-5, 0]);

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-navy-gradient overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-wide-luxury text-gold-400 uppercase mb-4 block">
              Digital to Physical
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
              Your Digital Gold,
              <br />
              <span className="text-gradient-gold">Backed by Reality</span>
            </h2>
            <p className="text-lg text-navy-200 mb-8 leading-relaxed">
              Every gram you own is matched by LBMA-certified gold bars stored in 
              high-security vaults across the UAE. Request physical delivery of 
              your gold anytime.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="font-serif text-4xl text-gold-400 mb-2">500+</div>
                <div className="text-sm text-navy-300">Kilograms in Vault</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-gold-400 mb-2">99.99%</div>
                <div className="text-sm text-navy-300">Purity Guaranteed</div>
              </div>
            </div>
          </motion.div>

          {/* Gold Bar Visualization */}
          <motion.div
            style={{ scale }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 to-gold-600/10 blur-3xl rounded-full" />
            
            {/* Gold Bars Stack */}
            <motion.div 
              style={{ y: barY, rotate: barRotate }}
              className="relative"
            >
              {/* Main Bar */}
              <div className="relative w-72 h-40 md:w-96 md:h-52">
                <div 
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: 'linear-gradient(145deg, #f5d78e 0%, #d4a952 30%, #b8942e 60%, #8b7021 100%)',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.3)',
                  }}
                >
                  {/* Stamped Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-xs text-gold-900/60 tracking-widest mb-1">JUSTGOLD</div>
                    <div className="font-serif text-3xl text-gold-900/70 font-bold">1 KG</div>
                    <div className="text-xs text-gold-900/50 mt-1">999.9 FINE GOLD</div>
                  </div>
                </div>
              </div>

              {/* Second Bar (behind) */}
              <div 
                className="absolute -bottom-4 left-4 w-72 h-40 md:w-96 md:h-52 rounded-lg opacity-60 -z-10"
                style={{
                  background: 'linear-gradient(145deg, #d4a952 0%, #b8942e 50%, #8b7021 100%)',
                }}
              />

              {/* Third Bar (behind) */}
              <div 
                className="absolute -bottom-8 left-8 w-72 h-40 md:w-96 md:h-52 rounded-lg opacity-30 -z-20"
                style={{
                  background: 'linear-gradient(145deg, #b8942e 0%, #8b7021 100%)',
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GoldVisualization;

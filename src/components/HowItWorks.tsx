import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, CreditCard, Vault } from 'lucide-react';

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  
  const lineWidth1 = useTransform(scrollYProgress, [0.2, 0.4], ["0%", "100%"]);
  const lineWidth2 = useTransform(scrollYProgress, [0.3, 0.5], ["0%", "100%"]);
  const lineWidth3 = useTransform(scrollYProgress, [0.4, 0.6], ["0%", "100%"]);
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ['0%', '100%']);

  const steps = [
    {
      icon: Smartphone,
      number: "01",
      title: "Download the App",
      description: "Your gold journey begins here. Download on iOS or Android.",
    },
    {
      icon: CreditCard,
      number: "02",
      title: "Register Instantly",
      description: "Complete a fast, secure, and compliant sign-up in minutes.",
    },
    {
      icon: Vault,
      number: "03",
      title: "Start Investing",
      description: "Buy 24K gold from AED 10 — secure, ethical, and insured.",
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="py-24 lg:py-32 bg-gold-50/50"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-medium tracking-wide-luxury text-gold-600 uppercase mb-4 block">
            Simple Process
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy-900 mb-6">
            How It Works
          </h2>
          <div className="max-w-4xl mx-auto mb-16">
            <motion.div
              style={{ width: lineWidth1 }}
              className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mb-8"
            />
            <motion.div
              style={{ width: lineWidth2 }}
              className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mb-8 ml-auto"
            />
            <motion.div
              style={{ width: lineWidth3 }}
              className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"
            />
          </div>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-px bg-gold-200">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Icon Container */}
                <div className="relative inline-flex mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-gold-100">
                    <step.icon className="w-8 h-8 text-gold-600" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold-500 text-white text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl text-navy-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-navy-500 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import { motion } from 'framer-motion';
import { Shield, Lock, Award, Building2 } from 'lucide-react';

const TrustStrip = () => {

  const trustItems = [
    { icon: Shield, label: 'Licensed by UAE Central Bank' },
    { icon: Lock, label: '100% Insured Storage' },
    { icon: Award, label: 'LBMA Certified Gold' },
    { icon: Building2, label: 'Secure UAE Vaults' },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }
    },
  };

  return (
    <section className="py-16 bg-white border-y border-gold-100">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-gold-600" />
              </div>
              <span className="text-sm font-medium text-navy-700">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustStrip;

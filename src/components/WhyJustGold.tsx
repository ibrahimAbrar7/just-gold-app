import { motion } from 'framer-motion';
import { TrendingUp, Clock, Coins, Truck, PieChart, Headphones } from 'lucide-react';

const WhyJustGold = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Live Market Prices',
      description: 'Buy and sell at real-time international gold rates with transparent pricing.',
    },
    {
      icon: Clock,
      title: '24/7 Trading',
      description: 'Trade gold anytime. Your investment never sleeps, and neither does our platform.',
    },
    {
      icon: Coins,
      title: 'Start From AED 50',
      description: 'No minimum investment barrier. Build your gold holdings at your own pace.',
    },
    {
      icon: Truck,
      title: 'Physical Delivery',
      description: 'Convert your digital gold to physical bars or coins delivered to your door.',
    },
    {
      icon: PieChart,
      title: 'Zero Storage Fees',
      description: 'No hidden costs. Your gold is stored and insured at no additional charge.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Personal assistance from our gold specialists whenever you need it.',
    },
  ];

  return (
    <section id="why-justgold" className="py-24 lg:py-32 bg-white">
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
            Your Advantage
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy-900 mb-6">
            Why Choose JustGold
          </h2>
          <p className="text-lg text-navy-500 max-w-2xl mx-auto">
            The most trusted platform for digital gold investment in the UAE.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group card-premium transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-gold-50 flex items-center justify-center mb-6 group-hover:bg-gold-100 transition-colors">
                <feature.icon className="w-7 h-7 text-gold-600" />
              </div>
              <h3 className="font-serif text-xl text-navy-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-navy-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJustGold;

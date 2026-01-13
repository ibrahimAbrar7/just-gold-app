import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AppPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const leftPhoneY = useTransform(scrollYProgress, [0.2, 0.8], [100, -50]);
  const rightPhoneY = useTransform(scrollYProgress, [0.2, 0.8], [50, -100]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-gold-50/30 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone Mockups */}
          <div className="relative h-[500px] order-2 lg:order-1">
            {/* Left Phone */}
            <motion.div
              style={{ y: leftPhoneY, opacity }}
              className="absolute left-0 lg:left-10 top-10 w-56 md:w-64"
            >
              <div className="relative bg-navy-900 rounded-[2.5rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-navy-800 text-white px-4 py-2 flex justify-between items-center text-xs">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-white rounded-sm" />
                    </div>
                  </div>
                  {/* App Content */}
                  <div className="p-4 space-y-4">
                    <div className="text-center">
                      <div className="text-xs text-navy-400 mb-1">Your Balance</div>
                      <div className="font-serif text-3xl text-navy-900">12.847g</div>
                      <div className="text-sm text-gold-600">≈ AED 8,392</div>
                    </div>
                    <div className="h-px bg-gold-200" />
                    <div className="space-y-2">
                      <div className="text-xs text-navy-400">Live Gold Price</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-semibold text-navy-800">AED 652.40</span>
                        <span className="text-xs text-green-600">+1.2%</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button className="bg-gold-500 text-navy-900 py-2 rounded-lg text-sm font-medium">Buy</button>
                      <button className="border border-navy-200 text-navy-700 py-2 rounded-lg text-sm font-medium">Sell</button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Phone */}
            <motion.div
              style={{ y: rightPhoneY, opacity }}
              className="absolute right-0 lg:right-10 bottom-0 w-56 md:w-64"
            >
              <div className="relative bg-navy-900 rounded-[2.5rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-white text-navy-800 px-4 py-2 flex justify-between items-center text-xs">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-navy-800 rounded-sm" />
                    </div>
                  </div>
                  {/* App Content - Transaction History */}
                  <div className="p-4 space-y-3">
                    <div className="text-sm font-medium text-navy-800 mb-3">Recent Activity</div>
                    {[
                      { type: 'Buy', amount: '2.5g', value: 'AED 1,631', time: 'Today' },
                      { type: 'Sell', amount: '1.0g', value: 'AED 651', time: 'Yesterday' },
                      { type: 'Buy', amount: '5.0g', value: 'AED 3,245', time: '3 days ago' },
                    ].map((tx, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-gold-100 last:border-0">
                        <div>
                          <div className={`text-sm font-medium ${tx.type === 'Buy' ? 'text-green-600' : 'text-navy-600'}`}>
                            {tx.type} {tx.amount}
                          </div>
                          <div className="text-xs text-navy-400">{tx.time}</div>
                        </div>
                        <div className="text-sm text-navy-700">{tx.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-xs font-medium tracking-wide-luxury text-gold-600 uppercase mb-4 block">
              Gold at Your Fingertips
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-6 leading-tight">
              The Most Elegant
              <br />
              Gold Investment App
            </h2>
            <p className="text-lg text-navy-500 mb-8 leading-relaxed">
              Track live prices, buy and sell instantly, and manage your gold portfolio 
              with our award-winning mobile app. Available on iOS and Android.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Real-time portfolio tracking',
                'Instant buy & sell orders',
                'Price alerts & notifications',
                'Secure biometric login',
              ].map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3 text-navy-600"
                >
                  <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gold-500" />
                  </div>
                  {feature}
                </motion.li>
              ))}
            </ul>

            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on App Store" 
                  className="h-12"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-12"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;

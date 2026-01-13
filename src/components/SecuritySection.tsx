import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, FileCheck, Eye } from "lucide-react";

const SecuritySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineWidth1 = useTransform(scrollYProgress, [0.2, 0.4], ["0%", "100%"]);
  const lineWidth2 = useTransform(scrollYProgress, [0.3, 0.5], ["0%", "100%"]);
  const lineWidth3 = useTransform(scrollYProgress, [0.4, 0.6], ["0%", "100%"]);

  const securityFeatures = [
    {
      icon: Shield,
      title: "Licensed & Regulated",
      description:
        "Our gold and silver savings platform is fully licensed by the UAE Central Bank and regulated by financial authorities.",
    },
    {
      icon: Lock,
      title: "Bank-Grade Security",
      description:
        "256-bit encryption, multi-factor authentication, and continuous monitoring protect your gold and silver holdings.",
    },
    {
      icon: FileCheck,
      title: "Regular Audits",
      description:
        "Independent third-party audits verify the gold and silver stored in our vaults quarterly.",
    },
    {
      icon: Eye,
      title: "Full Transparency",
      description:
        "Track your gold and silver allocation and storage in real-time, ensuring complete transparency of your savings.",
    },
  ];

  return (
    <section
      id="security"
      ref={containerRef}
      className="py-24 lg:py-32 bg-navy-900"
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
          <span className="text-xs font-medium tracking-wide-luxury text-gold-400 uppercase mb-4 block">
            Your Trust, Our Priority
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Security for Gold & Silver Savings
          </h2>
          <p className="text-lg text-navy-300 max-w-2xl mx-auto">
            Your gold and silver savings are protected with the highest security
            standards, regulated by UAE authorities and fully audited for peace
            of mind.
          </p>
        </motion.div>

        {/* Animated Gold Lines */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            style={{ width: lineWidth1 }}
            className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mb-8"
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

        {/* Security Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-navy-800 border border-gold-500/30 flex items-center justify-center mb-6 group-hover:border-gold-400/50 transition-colors">
                <feature.icon className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-navy-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 pt-16 border-t border-navy-700"
        >
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <span className="text-sm font-medium text-navy-400">
              Regulated by UAE Central Bank
            </span>
            <span className="text-sm font-medium text-navy-400">
              LBMA Good Delivery (Gold & Silver)
            </span>
            <span className="text-sm font-medium text-navy-400">
              ISO 27001 Certified
            </span>
            <span className="text-sm font-medium text-navy-400">
              Dubai Multi Commodities Centre
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;

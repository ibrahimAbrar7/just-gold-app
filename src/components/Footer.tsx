import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#" },
    ],
    product: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#" },
      { label: "Physical Delivery", href: "#" },
      { label: "Mobile App", href: "#" },
    ],
    resources: [
      { label: "Help Center", href: "#" },
      { label: "Gold & Silver Guide", href: "#" },
      { label: "Blog", href: "#" },
      { label: "FAQs", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Risk Disclosure", href: "#" },
      { label: "Regulatory Info", href: "#" },
    ],
  };

  return (
    <footer id="about" className="bg-navy-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              {/* Logo Image */}
              <div className="w-32 h-32 md:w-52 md:h-52 relative">
                <img
                  src={logo} // import your logo at the top: import logo from "@/assets/logo.png";
                  alt="JustGold & Silver Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <p className="text-navy-300 mb-6 leading-relaxed max-w-xs">
              The trusted platform for digital gold and silver savings in the
              UAE. Real precious metals, real ownership, real security.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-medium text-white mb-4 capitalize">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-navy-400 hover:text-gold-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-navy-400">
              © 2026 JustGold & Silver. All rights reserved. Licensed by UAE
              Central Bank.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-navy-500">Member of DMCC</span>
              <span className="text-xs text-navy-500">LBMA Associate</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

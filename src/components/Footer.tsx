import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    product: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pricing', href: '#' },
      { label: 'Physical Delivery', href: '#' },
      { label: 'Mobile App', href: '#' },
    ],
    resources: [
      { label: 'Help Center', href: '#' },
      { label: 'Gold Guide', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'FAQs', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Risk Disclosure', href: '#' },
      { label: 'Regulatory Info', href: '#' },
    ],
  };

  return (
    <footer id="about" className="bg-navy-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <span className="text-white font-serif font-bold">J</span>
              </div>
              <span className="font-serif text-2xl font-semibold">
                Just<span className="text-gold-400">Gold</span>
              </span>
            </a>
            <p className="text-navy-300 mb-6 leading-relaxed max-w-xs">
              The trusted platform for digital gold investment in the UAE. 
              Real gold, real ownership, real security.
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
              {['twitter', 'linkedin', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-navy-700 flex items-center justify-center hover:border-gold-500 hover:bg-gold-500/10 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-navy-400" style={{ maskImage: `url(/icons/${social}.svg)` }} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-medium text-white mb-4 capitalize">{title}</h4>
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
              © 2024 JustGold. All rights reserved. Licensed by UAE Central Bank.
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

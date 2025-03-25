import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Paripath Solutions</h3>
            <p className="text-gray-400 mb-6">
              Innovative engineering solutions for tomorrow's challenges. We specialize in embedded systems, machine learning, and custom software development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                "Embedded Systems",
                "Machine Learning Models",
                "Web Development",
                "App Development",
                "Drone Development",
                "PCB Designing"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Contact", href: "#contact" },
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Lucknow, Uttar Pradesh, India</li>
              <li>
                <a href="mailto:mayank@paripathsolutions.com" className="hover:text-white transition-colors duration-300">
                  mayank@paripathsolutions.com
                </a>
              </li>
              <li>
                <a href="tel:+911234567890" className="hover:text-white transition-colors duration-300">
                  +91 123 456 7890
                </a>
              </li>
              <li>
                <a href="https://paripathsolutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                  paripathsolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Paripath Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

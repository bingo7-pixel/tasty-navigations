import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <footer className="bg-restaurant-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif mb-4">Contact Us</h3>
            <p className="mb-2">123 Restaurant Street</p>
            <p className="mb-2">New York, NY 10001</p>
            <p className="mb-2">Phone: (555) 123-4567</p>
            <p>Email: info@restaurant.com</p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-serif mb-4">Hours</h3>
            <p className="mb-2">Monday - Friday: 11am - 10pm</p>
            <p className="mb-2">Saturday: 10am - 11pm</p>
            <p>Sunday: 10am - 9pm</p>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-serif mb-4">Subscribe to Our Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news and special offers.</p>
            <Newsletter />
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-restaurant-gold transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-restaurant-gold transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-restaurant-gold transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-restaurant-gold transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p>&copy; {new Date().getFullYear()} Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
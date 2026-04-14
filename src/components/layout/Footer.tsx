import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-brand-coral flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <span className="font-heading font-bold text-2xl text-white tracking-tight">
                Servv
              </span>
            </Link>
            <p className="text-brand-gray/70 mb-8 max-w-sm text-lg">
              The all-in-one POS and management platform built to grow your
              hospitality business.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-coral transition-colors">
                
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-coral transition-colors">
                
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-coral transition-colors">
                
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-coral transition-colors">
                
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Product</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  to="/features/pos"
                  className="text-brand-gray/70 hover:text-white transition-colors">
                  
                  Point of Sale
                </Link>
              </li>
              <li>
                <Link
                  to="/features/inventory"
                  className="text-brand-gray/70 hover:text-white transition-colors">
                  
                  Inventory
                </Link>
              </li>
              <li>
                <Link
                  to="/features/online-ordering"
                  className="text-brand-gray/70 hover:text-white transition-colors">
                  
                  Online Ordering
                </Link>
              </li>
              <li>
                <Link
                  to="/features/analytics"
                  className="text-brand-gray/70 hover:text-white transition-colors">
                  
                  Analytics
                </Link>
              </li>
              <li>
                <Link
                  to="/servv-iq"
                  className="text-brand-teal hover:text-white transition-colors">
                  
                  Servv IQ
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-brand-gray/70 hover:text-white transition-colors">
                  
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">
              Solutions
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  to="/outlets/restaurants"
                  className="text-brand-gray/70 hover:text-white transition-colors">
                  
                  Restaurants
                </Link>
              </li>
              <li>
                <Link
                  to="/outlets/bars-lounges"
                  className="text-brand-gray/70 hover:text-white transition-colors">
                  
                  Bars & Lounges
                </Link>
              </li>
              <li>
                <Link
                  to="/outlets/hotels-spas"
                  className="text-brand-gray/70 hover:text-white transition-colors">
                  
                  Hotels & Spas
                </Link>
              </li>
              <li>
                <Link
                  to="/outlets/cafes"
                  className="text-brand-gray/70 hover:text-white transition-colors">
                  
                  Cafes & Coffee Shops
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  to="/about"
                  className="text-brand-gray/70 hover:text-white transition-colors">
                  
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-brand-gray/70 hover:text-white transition-colors">
                  
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-brand-gray/70 hover:text-white transition-colors">
                  
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-brand-gray/70 hover:text-white transition-colors">
                  
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="text-brand-gray/70 hover:text-white transition-colors">
                  
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-gray/50 text-sm">
            © {new Date().getFullYear()} Servv Technologies Inc. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/privacy"
              className="text-brand-gray/50 hover:text-white transition-colors">
              
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-brand-gray/50 hover:text-white transition-colors">
              
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}
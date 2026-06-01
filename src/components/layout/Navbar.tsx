import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  MonitorSmartphone,
  Package,
  ShoppingBag,
  BarChart3,
  LayoutGrid,
  Users,
  UtensilsCrossed,
  Wine,
  Hotel,
  Coffee,
  BrainCircuit } from
'lucide-react';
const features = [
{
  name: 'Point of Sale',
  description: 'Fast, intuitive POS',
  href: '/features/pos',
  icon: MonitorSmartphone
},
{
  name: 'Inventory',
  description: 'Real-time stock tracking',
  href: '/features/inventory',
  icon: Package
},
{
  name: 'Online Ordering',
  description: 'Accept orders anywhere',
  href: '/features/online-ordering',
  icon: ShoppingBag
},
{
  name: 'Analytics',
  description: 'Data-driven insights',
  href: '/features/analytics',
  icon: BarChart3
},
{
  name: 'Table Management',
  description: 'Smart floor plans',
  href: '/features/table-management',
  icon: LayoutGrid
},
{
  name: 'Staff Management',
  description: 'Scheduling & time tracking',
  href: '/features/staff-management',
  icon: Users
}];

const outlets = [
{
  name: 'Restaurants',
  description: 'Full & quick service',
  href: '/outlets/restaurants',
  icon: UtensilsCrossed
},
{
  name: 'Bars & Lounges',
  description: 'Nightlife operations',
  href: '/outlets/bars-lounges',
  icon: Wine
},
{
  name: 'Hotels & Spas',
  description: 'Guest management',
  href: '/outlets/hotels-spas',
  icon: Hotel
},
{
  name: 'Cafes',
  description: 'Quick orders & loyalty',
  href: '/outlets/cafes',
  icon: Coffee
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);
  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) setActiveDropdown(null);else
    setActiveDropdown(name);
  };
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-soft py-3' : 'bg-white/90 backdrop-blur-md py-5'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-brand-coral flex items-center justify-center text-white font-bold text-xl group-hover:bg-brand-coral-dark transition-colors">
              S
            </div>
            <span className="font-heading font-bold text-2xl text-brand-navy tracking-tight">
              Servv
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Features Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('features')}
              onMouseLeave={() => setActiveDropdown(null)}>
              
              <button className="flex items-center gap-1 text-gray-600 hover:text-brand-coral font-medium transition-colors py-2">
                Features <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'features' &&
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  exit={{
                    opacity: 0,
                    y: 10
                  }}
                  transition={{
                    duration: 0.2
                  }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-xl shadow-card border border-gray-100 p-6 grid grid-cols-2 gap-x-8 gap-y-6">
                  
                    {features.map((item) =>
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-start gap-4 group/item hover:bg-brand-gray p-3 rounded-lg transition-colors -m-3">
                    
                        <div className="p-2 rounded-md bg-brand-gray group-hover/item:bg-white group-hover/item:text-brand-coral transition-colors text-brand-navy">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-brand-navy group-hover/item:text-brand-coral transition-colors">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-500 mt-0.5">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                  )}
                  </motion.div>
                }
              </AnimatePresence>
            </div>

            {/* Outlets Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('outlets')}
              onMouseLeave={() => setActiveDropdown(null)}>
              
              <button className="flex items-center gap-1 text-gray-600 hover:text-brand-coral font-medium transition-colors py-2">
                Outlet Type <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'outlets' &&
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  exit={{
                    opacity: 0,
                    y: 10
                  }}
                  transition={{
                    duration: 0.2
                  }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[320px] bg-white rounded-xl shadow-card border border-gray-100 p-4 flex flex-col gap-2">
                  
                    {outlets.map((item) =>
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center gap-3 group/item hover:bg-brand-gray p-3 rounded-lg transition-colors">
                    
                        <div className="p-2 rounded-md bg-brand-gray group-hover/item:bg-white group-hover/item:text-brand-coral transition-colors text-brand-navy">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-brand-navy group-hover/item:text-brand-coral transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                  )}
                  </motion.div>
                }
              </AnimatePresence>
            </div>


            <Link
              to="/rms"
              className="text-gray-600 hover:text-brand-coral font-medium transition-colors py-2">
              RMS
            </Link>
            <Link
              to="/hms"
              className="text-gray-600 hover:text-brand-coral font-medium transition-colors py-2">
              HMS
            </Link>

            <Link
              to="/servv-iq"
              className="flex items-center gap-1.5 text-brand-navy font-semibold hover:text-brand-teal transition-colors py-2">
              
              <BrainCircuit className="w-4 h-4 text-brand-teal" />
              Servv IQ
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="text-brand-navy font-medium hover:text-brand-coral transition-colors px-4 py-2">
              
              Request Demo
            </Link>
            <Link
              to="/contact"
              className="bg-brand-coral hover:bg-brand-coral-dark text-white font-medium px-6 py-2.5 rounded-lg transition-colors shadow-sm">
              
              Sign Up Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-brand-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            
            {mobileMenuOpen ?
            <X className="w-6 h-6" /> :

            <Menu className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-soft absolute top-full left-0 right-0 max-h-[calc(100vh-80px)] overflow-y-auto">
          
            <div className="px-4 py-6 flex flex-col gap-6">
              {/* Mobile Features */}
              <div>
                <button
                onClick={() => toggleDropdown('mobile-features')}
                className="flex items-center justify-between w-full text-lg font-semibold text-brand-navy mb-2">
                
                  Features
                  <ChevronDown
                  className={`w-5 h-5 transition-transform ${activeDropdown === 'mobile-features' ? 'rotate-180' : ''}`} />
                
                </button>
                <AnimatePresence>
                  {activeDropdown === 'mobile-features' &&
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0
                  }}
                  animate={{
                    opacity: 1,
                    height: 'auto'
                  }}
                  exit={{
                    opacity: 0,
                    height: 0
                  }}
                  className="flex flex-col gap-3 pl-4 border-l-2 border-brand-gray mt-3 overflow-hidden">
                  
                      {features.map((item) =>
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-600 py-1 flex items-center gap-2">
                    
                          <item.icon className="w-4 h-4" /> {item.name}
                        </Link>
                  )}
                    </motion.div>
                }
                </AnimatePresence>
              </div>

              {/* Mobile Outlets */}
              <div>
                <button
                onClick={() => toggleDropdown('mobile-outlets')}
                className="flex items-center justify-between w-full text-lg font-semibold text-brand-navy mb-2">
                
                  Outlet Type
                  <ChevronDown
                  className={`w-5 h-5 transition-transform ${activeDropdown === 'mobile-outlets' ? 'rotate-180' : ''}`} />
                
                </button>
                <AnimatePresence>
                  {activeDropdown === 'mobile-outlets' &&
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0
                  }}
                  animate={{
                    opacity: 1,
                    height: 'auto'
                  }}
                  exit={{
                    opacity: 0,
                    height: 0
                  }}
                  className="flex flex-col gap-3 pl-4 border-l-2 border-brand-gray mt-3 overflow-hidden">
                  
                      {outlets.map((item) =>
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-600 py-1 flex items-center gap-2">
                    
                          <item.icon className="w-4 h-4" /> {item.name}
                        </Link>
                  )}
                    </motion.div>
                }
                </AnimatePresence>
              </div>

              <Link
              to="/servv-iq"
              className="text-lg font-semibold text-brand-teal flex items-center gap-2">
              
                <BrainCircuit className="w-5 h-5" /> Servv IQ
              </Link>

              <div className="flex flex-col gap-3 mt-4 pt-6 border-t border-gray-100">
                <Link
                to="/contact"
                className="w-full py-3 text-center text-brand-navy font-semibold border border-gray-200 rounded-lg">
                
                  Request Demo
                </Link>
                <Link
                to="/contact"
                className="w-full py-3 text-center bg-brand-coral text-white font-semibold rounded-lg">
                
                  Sign Up Free
                </Link>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}
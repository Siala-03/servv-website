import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  UtensilsCrossed,
  MonitorSmartphone,
  LayoutGrid,
  ChefHat,
  BarChart3,
  Package,
  CheckCircle2,
  Quote,
  Star,
  ArrowRight } from
'lucide-react';
export function Restaurants() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6
              }}
              className="max-w-2xl">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold mb-6">
                <UtensilsCrossed className="w-5 h-5" /> For Restaurants
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold font-heading text-brand-navy leading-[1.1] mb-6">
                Built to Run Your <br />
                <span className="text-orange-600">Restaurant</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                From quick-service to fine dining, Servv handles the complexity
                so you can focus on the food.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-center text-lg shadow-soft">
                  
                  Start Free Trial
                </Link>
              </div>
            </motion.div>

            {/* Hero Mockup */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.2
              }}
              className="relative h-[500px] w-full hidden lg:block">
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-[4/3] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
                <div className="h-12 bg-gray-900 flex items-center px-4 gap-4">
                  <div className="text-white font-bold">KDS - Line 1</div>
                  <div className="text-gray-400 text-sm">3 Active Tickets</div>
                </div>
                <div className="flex-grow bg-gray-800 p-4 grid grid-cols-3 gap-4">
                  {[
                  {
                    id: '1042',
                    time: '4m',
                    items: [
                    '1x Classic Burger',
                    '  - No Onions',
                    '  - Med Rare',
                    '1x Truffle Fries']

                  },
                  {
                    id: '1043',
                    time: '2m',
                    items: [
                    '2x Caesar Salad',
                    '  - Add Chicken',
                    '1x Calamari']

                  },
                  {
                    id: '1044',
                    time: 'New',
                    items: [
                    '1x Ribeye Steak',
                    '  - Med',
                    '  - Side Asparagus']

                  }].
                  map((ticket, i) =>
                  <div
                    key={i}
                    className="bg-white rounded-lg overflow-hidden flex flex-col">
                    
                      <div
                      className={`p-2 font-bold flex justify-between text-white ${i === 0 ? 'bg-red-500' : i === 1 ? 'bg-amber-500' : 'bg-green-500'}`}>
                      
                        <span>#{ticket.id}</span>
                        <span>{ticket.time}</span>
                      </div>
                      <div className="p-3 text-sm flex-grow">
                        {ticket.items.map((item, j) =>
                      <div
                        key={j}
                        className={`mb-1 ${item.startsWith('  -') ? 'text-red-600 text-xs pl-2' : 'font-bold'}`}>
                        
                            {item}
                          </div>
                      )}
                      </div>
                      <div className="p-2 border-t border-gray-100 text-center text-sm font-bold text-gray-500 hover:bg-gray-50 cursor-pointer">
                        BUMP
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-heading text-brand-navy mb-4">
              We understand your challenges
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
            {
              problem: 'Slow order processing during rush',
              solution:
              'Lightning-fast POS interface designed for speed, with handhelds for line-busting.'
            },
            {
              problem: 'Inventory waste and over-ordering',
              solution:
              'Ingredient-level tracking and automated low-stock alerts prevent waste.'
            },
            {
              problem: 'Disconnected front and back of house',
              solution:
              'Seamless integration between POS and Kitchen Display Systems (KDS).'
            },
            {
              problem: 'Lack of real-time business visibility',
              solution:
              'Live dashboards show sales, labor costs, and table turns instantly.'
            }].
            map((item, i) =>
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex gap-4">
              
                <div className="w-8 h-8 rounded-full bg-brand-coral/20 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-brand-coral" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-navy mb-2">
                    {item.problem}
                  </h4>
                  <p className="text-gray-600">{item.solution}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-heading text-brand-navy mb-4">
              Everything a restaurant needs
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
            {
              icon: MonitorSmartphone,
              title: 'Point of Sale',
              link: '/features/pos'
            },
            {
              icon: LayoutGrid,
              title: 'Table Management',
              link: '/features/table-management'
            },
            {
              icon: ChefHat,
              title: 'Kitchen Display',
              link: '/features/pos'
            },
            {
              icon: Package,
              title: 'Inventory Control',
              link: '/features/inventory'
            },
            {
              icon: BarChart3,
              title: 'Analytics',
              link: '/features/analytics'
            },
            {
              icon: UtensilsCrossed,
              title: 'Menu Engineering',
              link: '/features/analytics'
            }].
            map((feature, i) =>
            <Link
              key={i}
              to={feature.link}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-4 group">
              
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="font-bold text-lg text-brand-navy">
                  {feature.title}
                </div>
                <ArrowRight className="w-5 h-5 ml-auto text-gray-300 group-hover:text-orange-600 transition-colors" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/20 to-transparent opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Quote className="w-16 h-16 text-orange-500/50 mx-auto mb-8" />
          <div className="flex justify-center gap-1 mb-8 text-amber-400">
            {[...Array(5)].map((_, j) =>
            <Star key={j} className="w-6 h-6 fill-current" />
            )}
          </div>
          <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-10">
            "Switching to Servv was the best decision for our restaurant group.
            The multi-location management and real-time analytics have
            completely transformed how we operate."
          </p>
          <div>
            <div className="font-bold text-xl">Sarah Jenkins</div>
            <div className="text-gray-400">
              Operations Director, The Rustic Collective
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-brand-coral relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)',
            backgroundSize: '30px 30px'
          }}>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold font-heading text-white mb-6">
            Ready to transform your restaurant?
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-5 py-4 rounded-xl border-none focus:outline-none focus:ring-4 focus:ring-white/30 text-lg" />
            
            <button className="bg-brand-navy hover:bg-brand-navy-light text-white font-semibold px-8 py-4 rounded-xl transition-colors whitespace-nowrap text-lg shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>);

}
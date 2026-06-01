import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Store,
  Truck,
  RefreshCw,
  CheckCircle2,
  Globe } from
'lucide-react';
export function OnlineOrdering() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-purple-50">
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
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold mb-6">
                <ShoppingBag className="w-5 h-5" /> Online Ordering
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold font-heading text-brand-navy leading-[1.1] mb-6">
                Online Ordering, <br />
                <span className="text-purple-600">Your Way</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Accept orders directly from your branded website or integrate
                with UberEats, DoorDash, and more — all flowing into one unified
                system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-center text-lg shadow-soft">
                  
                  Start Free Trial
                </Link>
                <Link
                  to="/contact"
                  className="bg-white hover:bg-gray-50 text-brand-navy border border-gray-200 font-semibold px-8 py-4 rounded-xl transition-colors text-center text-lg">
                  
                  Request Demo
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
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[550px] bg-white rounded-[2.5rem] shadow-2xl border-8 border-gray-900 overflow-hidden flex flex-col">
                {/* Mobile App Mockup */}
                <div className="h-48 bg-purple-600 p-6 text-white flex flex-col justify-end relative">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl"></div>
                  <h3 className="text-2xl font-bold mb-1">The Rustic Cafe</h3>
                  <p className="text-sm opacity-80">Pickup in 15-20 mins</p>
                </div>
                <div className="flex-grow bg-gray-50 p-4 space-y-4 overflow-hidden">
                  <div className="font-bold text-gray-800">Popular Items</div>
                  {[1, 2, 3].map((i) =>
                  <div
                    key={i}
                    className="bg-white p-3 rounded-xl shadow-sm flex gap-3">
                    
                      <div className="w-16 h-16 bg-gray-200 rounded-lg shrink-0"></div>
                      <div className="flex-grow">
                        <div className="font-semibold text-sm">
                          Avocado Toast
                        </div>
                        <div className="text-xs text-gray-500 mt-1">RWF 15,000</div>
                      </div>
                      <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold">
                        +
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-heading text-brand-navy mb-4">
              Grow your off-premise revenue
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
              icon: Store,
              title: 'Branded Ordering',
              desc: 'Your own commission-free online storefront matching your brand.'
            },
            {
              icon: Truck,
              title: 'Delivery Apps',
              desc: 'Integrate major delivery platforms directly into your POS.'
            },
            {
              icon: RefreshCw,
              title: 'Real-Time Sync',
              desc: 'Menu updates and 86s sync instantly across all platforms.'
            },
            {
              icon: Globe,
              title: 'No Commissions',
              desc: 'Keep 100% of the profits from orders placed on your direct site.'
            }].
            map((benefit, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: i * 0.1
              }}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-purple-600 mb-4 shadow-sm">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-heading mb-4">
              How it works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-0.5 bg-white/10"></div>
            {[
            {
              step: '1',
              title: 'Publish your menu',
              desc: 'Select which items to offer online and set specific online pricing.'
            },
            {
              step: '2',
              title: 'Customers order',
              desc: 'Guests order via your website or third-party delivery apps.'
            },
            {
              step: '3',
              title: 'Straight to kitchen',
              desc: 'Orders bypass the counter and print directly in the kitchen.'
            }].
            map((item, i) =>
            <div
              key={i}
              className="relative z-10 flex flex-col items-center text-center">
              
                <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-white text-2xl font-bold mb-6 border-4 border-brand-navy">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FEATURE DETAILS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {/* Detail 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}>
              
              <h3 className="text-3xl font-bold font-heading text-brand-navy mb-6">
                Your own branded ordering site
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Stop paying 30% commissions. Give your loyal customers a
                beautiful, easy way to order directly from you.
              </p>
              <ul className="space-y-4">
                {[
                'Customizable colors and logos',
                'Mobile-optimized experience',
                'Accept credit cards and Apple/Google Pay',
                'Loyalty program integration'].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                )}
              </ul>
            </motion.div>
            <div className="relative h-[400px] bg-gray-100 rounded-2xl border border-gray-200 p-8 flex items-center justify-center">
              <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gray-800 p-3 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="p-6 text-center border-b">
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    Order Online
                  </div>
                  <div className="flex justify-center gap-4 text-sm font-medium">
                    <span className="text-purple-600 border-b-2 border-purple-600 pb-1">
                      Pickup
                    </span>
                    <span className="text-gray-500">Delivery</span>
                  </div>
                </div>
                <div className="p-6 bg-gray-50 h-48 flex items-center justify-center text-gray-400">
                  [Menu Grid Interface]
                </div>
              </div>
            </div>
          </div>

          {/* Detail 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] bg-gray-100 rounded-2xl border border-gray-200 p-8 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center font-bold text-green-600">
                  UberEats
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center font-bold text-red-600">
                  DoorDash
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center font-bold text-orange-500">
                  Grubhub
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center font-bold text-blue-500">
                  Postmates
                </div>
              </div>
            </div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{
                opacity: 0,
                x: 20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}>
              
              <h3 className="text-3xl font-bold font-heading text-brand-navy mb-6">
                Third-party delivery aggregation
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Ditch the tablet farm. All your third-party delivery orders flow
                directly into your POS and kitchen display system.
              </p>
              <ul className="space-y-4">
                {[
                'Manage all delivery apps from one screen',
                'Centralized menu management',
                'Order throttling during busy times',
                'Consolidated reporting'].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                )}
              </ul>
            </motion.div>
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
            Ready to take more orders?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Set up your online ordering in minutes and start growing your
            revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-5 py-4 rounded-xl border-none focus:outline-none focus:ring-4 focus:ring-white/30 text-lg" />
            
            <button className="bg-brand-navy hover:bg-brand-navy-light text-white font-semibold px-8 py-4 rounded-xl transition-colors whitespace-nowrap text-lg shadow-lg">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>
    </div>);

}
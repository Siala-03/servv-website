import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Package,
  AlertTriangle,
  Calculator,
  Trash2,
  CheckCircle2 } from
'lucide-react';
export function Inventory() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-teal-50">
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
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 text-brand-teal font-semibold mb-6">
                <Package className="w-5 h-5" /> Inventory Management
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold font-heading text-brand-navy leading-[1.1] mb-6">
                Real-Time <br />
                <span className="text-brand-teal">Inventory Control</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Never run out of your best sellers. Track stock levels, automate
                purchase orders, and reduce waste with intelligent inventory
                management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-brand-teal hover:bg-teal-500 text-brand-navy font-semibold px-8 py-4 rounded-xl transition-colors text-center text-lg shadow-soft">
                  
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
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                  <div className="font-bold text-lg text-brand-navy">
                    Inventory Dashboard
                  </div>
                  <div className="px-3 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded-full flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4" /> 2 Low Stock Alerts
                  </div>
                </div>
                <div className="p-6 space-y-4 bg-gray-50 flex-grow">
                  {[
                  {
                    name: 'Avocados',
                    qty: '12 cases',
                    status: 'Good',
                    color: 'bg-green-500'
                  },
                  {
                    name: 'IPA Beer Kegs',
                    qty: '1 keg',
                    status: 'Low',
                    color: 'bg-red-500'
                  },
                  {
                    name: 'Coffee Beans',
                    qty: '5 lbs',
                    status: 'Low',
                    color: 'bg-red-500'
                  },
                  {
                    name: 'Napkins',
                    qty: '40 boxes',
                    status: 'Good',
                    color: 'bg-green-500'
                  }].
                  map((item, i) =>
                  <div
                    key={i}
                    className="bg-white p-4 rounded-xl border border-gray-100 flex justify-between items-center shadow-sm">
                    
                      <div className="flex items-center gap-3">
                        <div
                        className={`w-3 h-3 rounded-full ${item.color}`}>
                      </div>
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className="text-gray-500">{item.qty}</span>
                        <div className="w-20 h-8 bg-gray-100 rounded flex items-center justify-center text-sm font-medium text-brand-navy">
                          Details
                        </div>
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
              Take control of your costs
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
              icon: Package,
              title: 'Live Stock Tracking',
              desc: 'Inventory updates instantly with every order processed through the POS.'
            },
            {
              icon: AlertTriangle,
              title: 'Automated Alerts',
              desc: 'Get notified before you run out of crucial ingredients.'
            },
            {
              icon: Calculator,
              title: 'Recipe Costing',
              desc: 'Know your exact food cost per dish to optimize menu pricing.'
            },
            {
              icon: Trash2,
              title: 'Waste Reduction',
              desc: 'Log spills, mistakes, and spoilage to identify areas for improvement.'
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
              
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-teal mb-4 shadow-sm">
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
              title: 'Input ingredients',
              desc: 'Add your raw ingredients, vendors, and unit costs.'
            },
            {
              step: '2',
              title: 'Build recipes',
              desc: 'Link ingredients to menu items to track usage automatically.'
            },
            {
              step: '3',
              title: 'Monitor & order',
              desc: 'Watch stock levels drop in real-time and generate POs with one click.'
            }].
            map((item, i) =>
            <div
              key={i}
              className="relative z-10 flex flex-col items-center text-center">
              
                <div className="w-16 h-16 rounded-full bg-brand-teal flex items-center justify-center text-brand-navy text-2xl font-bold mb-6 border-4 border-brand-navy">
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
                Ingredient-level tracking
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Don't just track the burger—track the bun, the patty, and the
                cheese. Our recipe management system deducts exact quantities
                with every sale.
              </p>
              <ul className="space-y-4">
                {[
                'Map multiple ingredients to a single menu item',
                'Track sub-recipes and batch prep',
                'Calculate exact profit margins per dish',
                'Account for modifiers and add-ons'].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                )}
              </ul>
            </motion.div>
            <div className="relative h-[400px] bg-gray-100 rounded-2xl border border-gray-200 p-8 flex items-center justify-center">
              <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <div className="font-bold text-lg mb-4">
                  Recipe: Classic Burger
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm">Beef Patty (8oz)</span>
                    <span className="text-sm font-medium text-gray-500">
                      RWF 1,500
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm">Brioche Bun (1)</span>
                    <span className="text-sm font-medium text-gray-500">
                      RWF 400
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm">Cheddar Slice (1)</span>
                    <span className="text-sm font-medium text-gray-500">
                      RWF 250
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-bold">Total Cost</span>
                    <span className="font-bold text-brand-coral">RWF 2,150</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detail 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] bg-gray-100 rounded-2xl border border-gray-200 p-8 flex items-center justify-center">
              <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center">
                <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Low Stock Alert</h4>
                <p className="text-gray-600 text-sm mb-6">
                  IPA Beer Kegs are below the minimum threshold (1 remaining).
                </p>
                <div className="w-full py-3 bg-brand-navy text-white rounded-lg font-medium">
                  Generate Purchase Order
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
                Automated purchasing
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Stop guessing what to order. Set par levels and let Servv
                generate purchase orders automatically when stock gets low.
              </p>
              <ul className="space-y-4">
                {[
                'Set custom low-stock thresholds',
                'Manage multiple vendors in one place',
                'One-click purchase order generation',
                'Track receiving and price fluctuations'].
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
            Ready to optimize your inventory?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Stop wasting money on spoilage and start tracking your true costs.
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
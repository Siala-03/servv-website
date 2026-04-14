import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Zap,
  CreditCard,
  WifiOff,
  Settings2,
  CheckCircle2,
  ArrowRight,
  MonitorSmartphone,
  Smartphone,
  Tablet } from
'lucide-react';
export function POS() {
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
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-coral/10 text-brand-coral font-semibold mb-6">
                <MonitorSmartphone className="w-5 h-5" /> Point of Sale
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold font-heading text-brand-navy leading-[1.1] mb-6">
                Lightning-Fast <br />
                <span className="text-brand-coral">Point of Sale</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Process orders in seconds with an intuitive interface designed
                for high-volume hospitality environments. Dine-in, takeaway, and
                delivery — all from one screen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-brand-coral hover:bg-brand-coral-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors text-center text-lg shadow-soft">
                  
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
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-[4/3] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
                <div className="h-12 border-b border-gray-100 flex items-center px-4 bg-gray-50 gap-4">
                  <div className="w-16 h-6 bg-brand-coral/20 rounded"></div>
                  <div className="w-16 h-6 bg-gray-200 rounded"></div>
                  <div className="w-16 h-6 bg-gray-200 rounded"></div>
                </div>
                <div className="flex-grow flex p-4 gap-4 bg-gray-50/50">
                  <div className="flex-grow grid grid-cols-3 gap-3">
                    {[...Array(9)].map((_, i) =>
                    <div
                      key={i}
                      className="bg-white rounded-xl border border-gray-100 p-3 flex flex-col justify-between shadow-sm">
                      
                        <div className="w-10 h-10 bg-orange-100 rounded-lg mb-2"></div>
                        <div className="w-full h-2 bg-gray-200 rounded-full mb-1"></div>
                        <div className="w-1/2 h-2 bg-gray-200 rounded-full"></div>
                      </div>
                    )}
                  </div>
                  <div className="w-64 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col">
                    <div className="p-3 border-b border-gray-100 font-semibold text-sm">
                      Ticket #1042
                    </div>
                    <div className="flex-grow p-3 flex flex-col gap-2">
                      {[...Array(3)].map((_, i) =>
                      <div
                        key={i}
                        className="flex justify-between items-center">
                        
                          <div className="w-20 h-2 bg-gray-200 rounded-full"></div>
                          <div className="w-8 h-2 bg-gray-200 rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <div className="p-3 border-t border-gray-100 bg-gray-50">
                      <div className="w-full h-10 bg-brand-coral rounded-lg"></div>
                    </div>
                  </div>
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
              Everything you need to run the front of house
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
              icon: Zap,
              title: 'Speed & Efficiency',
              desc: 'Process orders 3x faster with our optimized, tap-friendly interface.'
            },
            {
              icon: CreditCard,
              title: 'Flexible Payments',
              desc: 'Accept tap, chip, swipe, mobile wallets, and easily split checks.'
            },
            {
              icon: WifiOff,
              title: 'Offline Mode',
              desc: 'Keep taking orders and processing payments even if the internet drops.'
            },
            {
              icon: Settings2,
              title: 'Custom Menus',
              desc: 'Handle complex modifiers, combos, coursing, and time-based menus.'
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
              
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-coral mb-4 shadow-sm">
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
            <p className="text-gray-400 text-lg">
              Get up and running in minutes, not days.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-0.5 bg-white/10"></div>
            {[
            {
              step: '1',
              title: 'Set up your menu',
              desc: 'Import your existing menu or build it from scratch with our easy-to-use menu editor.'
            },
            {
              step: '2',
              title: 'Take orders anywhere',
              desc: 'Use countertop terminals, handheld devices, or tablets to take orders where your customers are.'
            },
            {
              step: '3',
              title: 'Process payments',
              desc: 'Close out tickets instantly with integrated payment processing and digital receipts.'
            }].
            map((item, i) =>
            <div
              key={i}
              className="relative z-10 flex flex-col items-center text-center">
              
                <div className="w-16 h-16 rounded-full bg-brand-coral flex items-center justify-center text-2xl font-bold mb-6 border-4 border-brand-navy">
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
                Advanced order management
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Handle the most complex ordering scenarios with ease. Our POS is
                built to adapt to your workflow, not the other way around.
              </p>
              <ul className="space-y-4">
                {[
                'Manage open tabs and pre-authorize cards',
                'Split checks by item, seat, or custom amounts',
                'Hold and fire courses to the kitchen',
                'Quick reorder for rounds of drinks'].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                )}
              </ul>
            </motion.div>
            <div className="relative h-[400px] bg-gray-100 rounded-2xl border border-gray-200 p-8 flex items-center justify-center">
              <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-gray-100 p-4">
                <div className="text-center font-bold border-b pb-2 mb-4">
                  Split Check
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="flex-1 bg-brand-coral/10 border border-brand-coral rounded-lg p-3 text-center font-semibold text-brand-coral">
                    Seat 1
                  </div>
                  <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-3 text-center text-gray-500">
                    Seat 2
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Burger</span>
                    <span>$15.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">IPA Beer</span>
                    <span>$8.00</span>
                  </div>
                </div>
                <div className="w-full h-10 bg-brand-navy rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Detail 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] bg-gray-100 rounded-2xl border border-gray-200 p-8 flex items-center justify-center">
              <div className="flex gap-6 items-end">
                <div className="w-32 h-48 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center justify-center gap-2">
                  <Smartphone className="w-8 h-8 text-gray-400" />
                  <div className="text-xs font-medium text-gray-500">
                    Handheld
                  </div>
                </div>
                <div className="w-48 h-64 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center justify-center gap-2">
                  <Tablet className="w-10 h-10 text-gray-400" />
                  <div className="text-sm font-medium text-gray-500">
                    Tablet
                  </div>
                </div>
                <div className="w-64 h-80 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center justify-center gap-2">
                  <MonitorSmartphone className="w-12 h-12 text-brand-coral" />
                  <div className="text-base font-medium text-brand-navy">
                    Terminal
                  </div>
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
                Multi-device synchronization
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Start a tab at the bar, add to it from a handheld at the table,
                and close it out at the host stand. Everything syncs instantly.
              </p>
              <ul className="space-y-4">
                {[
                'Real-time order syncing across all devices',
                'Cloud-based architecture',
                'Hardware agnostic options',
                'Instant menu updates across locations'].
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

      {/* INTEGRATIONS */}
      <section className="py-20 bg-brand-gray border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold font-heading text-brand-navy mb-8">
            Plays well with your favorite tools
          </h2>
          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale">
            {/* Placeholder logos for integrations */}
            <div className="text-xl font-bold font-heading">QuickBooks</div>
            <div className="text-xl font-bold font-heading">Xero</div>
            <div className="text-xl font-bold font-heading">UberEats</div>
            <div className="text-xl font-bold font-heading">DoorDash</div>
            <div className="text-xl font-bold font-heading">7shifts</div>
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
            Ready to speed up your service?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join thousands of venues using Servv POS to streamline their
            operations.
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
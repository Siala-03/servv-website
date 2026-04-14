import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Hotel,
  BedDouble,
  Calendar,
  UserCheck,
  CreditCard,
  LayoutGrid,
  CheckCircle2,
  Quote,
  Star,
  ArrowRight } from
'lucide-react';
export function HotelsSpas() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-blue-50">
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
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-6">
                <Hotel className="w-5 h-5" /> For Hotels & Spas
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold font-heading text-brand-navy leading-[1.1] mb-6">
                Elevate Your <br />
                <span className="text-blue-600">Guest Experience</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Seamless room service, spa bookings, restaurant management, and
                guest billing — all connected to your property management
                system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-center text-lg shadow-soft">
                  
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
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                  <div className="font-bold text-lg text-brand-navy">
                    Guest Profile
                  </div>
                  <div className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded">
                    Room 412
                  </div>
                </div>
                <div className="flex-grow p-6 flex gap-6">
                  <div className="w-1/3 border-r border-gray-100 pr-6">
                    <div className="w-20 h-20 bg-gray-200 rounded-full mb-4"></div>
                    <div className="font-bold text-xl mb-1">James Wilson</div>
                    <div className="text-sm text-gray-500 mb-6">
                      VIP Guest • 3rd Stay
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Check-in</span>
                        <span className="font-medium">Oct 12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Check-out</span>
                        <span className="font-medium">Oct 15</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-2/3">
                    <div className="font-bold mb-4">Folio Charges</div>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
                        <div>
                          <div className="font-medium">Lobby Bar</div>
                          <div className="text-xs text-gray-500">
                            Oct 12, 8:45 PM
                          </div>
                        </div>
                        <div className="font-bold">$42.50</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
                        <div>
                          <div className="font-medium">
                            Room Service (Breakfast)
                          </div>
                          <div className="text-xs text-gray-500">
                            Oct 13, 7:30 AM
                          </div>
                        </div>
                        <div className="font-bold">$38.00</div>
                      </div>
                      <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg flex justify-between items-center">
                        <div>
                          <div className="font-medium text-blue-800">
                            Spa Treatment (Upcoming)
                          </div>
                          <div className="text-xs text-blue-600">
                            Today, 2:00 PM
                          </div>
                        </div>
                        <div className="font-bold text-blue-800">$150.00</div>
                      </div>
                    </div>
                  </div>
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
              problem: 'Disconnected systems across departments',
              solution:
              'One unified platform for F&B, retail, and spa that talks to your PMS.'
            },
            {
              problem: 'Poor guest experience with slow service',
              solution:
              'Mobile ordering for room service and poolside dining.'
            },
            {
              problem: 'Manual booking and scheduling for spa',
              solution:
              'Integrated scheduling system tied directly to guest profiles.'
            },
            {
              problem: 'No unified guest profile',
              solution:
              'See guest preferences, allergies, and history across all outlets.'
            }].
            map((item, i) =>
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex gap-4">
              
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
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
              Connect your entire property
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
            {
              icon: BedDouble,
              title: 'Room Service Integration',
              link: '/features/online-ordering'
            },
            {
              icon: Calendar,
              title: 'Spa Scheduling',
              link: '/features/table-management'
            },
            {
              icon: UserCheck,
              title: 'Guest Profiles',
              link: '/features/pos'
            },
            {
              icon: Hotel,
              title: 'PMS Integration',
              link: '/features/pos'
            },
            {
              icon: LayoutGrid,
              title: 'Multi-Outlet Management',
              link: '/features/analytics'
            },
            {
              icon: CreditCard,
              title: 'Charge-to-Room',
              link: '/features/pos'
            }].
            map((feature, i) =>
            <Link
              key={i}
              to={feature.link}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-4 group">
              
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="font-bold text-lg text-brand-navy">
                  {feature.title}
                </div>
                <ArrowRight className="w-5 h-5 ml-auto text-gray-300 group-hover:text-blue-600 transition-colors" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/20 to-transparent opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Quote className="w-16 h-16 text-blue-500/50 mx-auto mb-8" />
          <div className="flex justify-center gap-1 mb-8 text-amber-400">
            {[...Array(5)].map((_, j) =>
            <Star key={j} className="w-6 h-6 fill-current" />
            )}
          </div>
          <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-10">
            "Having our restaurant, lobby bar, and spa all on one system that
            syncs perfectly with Opera PMS has eliminated billing errors and
            improved the guest experience immensely."
          </p>
          <div>
            <div className="font-bold text-xl">David Thompson</div>
            <div className="text-gray-400">
              Director of F&B, The Grand Hotel
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
            Ready to elevate your property?
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
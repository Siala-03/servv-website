import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  LayoutGrid,
  Clock,
  CalendarCheck,
  MessageSquare,
  CheckCircle2,
  Users } from
'lucide-react';
export function TableManagement() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-amber-50">
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
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-semibold mb-6">
                <LayoutGrid className="w-5 h-5" /> Table Management
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold font-heading text-brand-navy leading-[1.1] mb-6">
                Smart Table <br />
                <span className="text-amber-600">Management</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Maximize covers with intelligent floor plans, real-time table
                status, and seamless reservation management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-center text-lg shadow-soft">
                  
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
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                  <div className="font-bold text-lg text-brand-navy">
                    Main Dining Room
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  </div>
                </div>
                <div className="flex-grow p-8 bg-gray-100 relative">
                  {/* Abstract Floor Plan */}
                  <div className="absolute top-10 left-10 w-24 h-24 rounded-full border-4 border-green-500 bg-white flex items-center justify-center font-bold text-gray-500 shadow-sm">
                    T1
                  </div>
                  <div className="absolute top-10 left-40 w-24 h-24 rounded-full border-4 border-amber-500 bg-white flex items-center justify-center font-bold text-gray-500 shadow-sm">
                    T2
                  </div>
                  <div className="absolute top-10 right-10 w-32 h-20 rounded-xl border-4 border-red-500 bg-white flex items-center justify-center font-bold text-gray-500 shadow-sm">
                    T3
                  </div>

                  <div className="absolute bottom-10 left-10 w-20 h-20 rounded-lg border-4 border-gray-300 bg-white flex items-center justify-center font-bold text-gray-500 shadow-sm">
                    B1
                  </div>
                  <div className="absolute bottom-10 left-36 w-20 h-20 rounded-lg border-4 border-green-500 bg-white flex items-center justify-center font-bold text-gray-500 shadow-sm">
                    B2
                  </div>

                  <div className="absolute bottom-10 right-10 w-48 h-16 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
                    BAR
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
              Turn tables faster
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
              icon: LayoutGrid,
              title: 'Visual Floor Plans',
              desc: 'Drag-and-drop editor to match your exact restaurant layout.'
            },
            {
              icon: Clock,
              title: 'Live Table Status',
              desc: 'Color-coded tables show exactly where guests are in their meal.'
            },
            {
              icon: CalendarCheck,
              title: 'Reservation System',
              desc: 'Accept online bookings and manage them alongside walk-ins.'
            },
            {
              icon: MessageSquare,
              title: 'Waitlist Management',
              desc: 'Send automated SMS notifications when a table is ready.'
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
              
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-amber-600 mb-4 shadow-sm">
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
              title: 'Design your floor',
              desc: 'Use our simple editor to draw your rooms, tables, and bar areas.'
            },
            {
              step: '2',
              title: 'Seat guests',
              desc: 'Host stand assigns tables, instantly updating status across all POS devices.'
            },
            {
              step: '3',
              title: 'Track progress',
              desc: 'Table colors change automatically as orders are fired, served, and paid.'
            }].
            map((item, i) =>
            <div
              key={i}
              className="relative z-10 flex flex-col items-center text-center">
              
                <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-white text-2xl font-bold mb-6 border-4 border-brand-navy">
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
                Interactive floor plan editor
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Your digital floor plan should match reality. Easily create
                multiple rooms, adjust table shapes, and combine tables for
                large parties on the fly.
              </p>
              <ul className="space-y-4">
                {[
                'Support for multiple rooms and patios',
                'Combine and split tables seamlessly',
                'Assign server sections easily',
                'Track covers and turn times per table'].
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
                <div className="flex justify-between items-center mb-4 pb-2 border-b">
                  <div className="font-bold">Table 12</div>
                  <div className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded">
                    Appetizers
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Users className="w-4 h-4" /> 4 Guests • Seated 25m ago
                </div>
                <div className="space-y-2">
                  <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 rounded font-medium text-sm transition-colors">
                    View Ticket
                  </button>
                  <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 rounded font-medium text-sm transition-colors">
                    Transfer Table
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Detail 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] bg-gray-100 rounded-2xl border border-gray-200 p-8 flex items-center justify-center">
              <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-brand-navy p-4 text-white font-bold">
                  Waitlist
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                  {
                    name: 'Smith Party',
                    size: 4,
                    wait: '15m',
                    status: 'Waiting'
                  },
                  {
                    name: 'Johnson',
                    size: 2,
                    wait: '5m',
                    status: 'Notified',
                    highlight: true
                  }].
                  map((party, i) =>
                  <div
                    key={i}
                    className={`p-4 flex justify-between items-center ${party.highlight ? 'bg-amber-50' : ''}`}>
                    
                      <div>
                        <div className="font-bold text-brand-navy">
                          {party.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          Party of {party.size} • Quoted {party.wait}
                        </div>
                      </div>
                      <button
                      className={`px-3 py-1 rounded text-xs font-bold ${party.highlight ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                      
                        {party.status === 'Notified' ? 'Seat' : 'Notify'}
                      </button>
                    </div>
                  )}
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
                Reservation and waitlist
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Ditch the pen and paper at the host stand. Manage walk-ins and
                reservations in one unified system that talks directly to your
                POS.
              </p>
              <ul className="space-y-4">
                {[
                'Two-way SMS communication with guests',
                'Customizable online booking widget',
                'Guest notes and allergy tracking',
                'Accurate wait time quoting based on live data'].
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
            Ready to maximize your covers?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Streamline your front-of-house operations and turn tables faster.
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
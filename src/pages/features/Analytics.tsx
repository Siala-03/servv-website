import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  TrendingUp,
  Users,
  FileText,
  CheckCircle2,
  PieChart,
  LineChart } from
'lucide-react';
export function Analytics() {
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
                <BarChart3 className="w-5 h-5" /> Analytics & Reporting
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold font-heading text-brand-navy leading-[1.1] mb-6">
                Data-Driven <br />
                <span className="text-blue-600">Decisions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Understand your business at a glance. From sales trends to staff
                performance, get the insights you need to grow revenue and cut
                costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-center text-lg shadow-soft">
                  
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
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                  <div className="font-bold text-lg text-brand-navy">
                    Sales Overview
                  </div>
                  <div className="px-3 py-1 bg-white border border-gray-200 text-sm font-medium rounded-md">
                    Today vs Last Week
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 rounded-xl">
                      <div className="text-sm text-gray-500 mb-1">
                        Net Sales
                      </div>
                      <div className="text-2xl font-bold text-brand-navy">
                        $4,250
                      </div>
                      <div className="text-sm text-green-600 font-medium mt-1">
                        +12.5%
                      </div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl">
                      <div className="text-sm text-gray-500 mb-1">Orders</div>
                      <div className="text-2xl font-bold text-brand-navy">
                        142
                      </div>
                      <div className="text-sm text-green-600 font-medium mt-1">
                        +5.2%
                      </div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-xl">
                      <div className="text-sm text-gray-500 mb-1">
                        Avg Ticket
                      </div>
                      <div className="text-2xl font-bold text-brand-navy">
                        $29.92
                      </div>
                      <div className="text-sm text-green-600 font-medium mt-1">
                        +6.8%
                      </div>
                    </div>
                  </div>
                  <div className="h-40 bg-gray-50 rounded-xl border border-gray-100 flex items-end justify-between p-4 gap-2">
                    {[40, 60, 45, 80, 100, 75, 50].map((h, i) =>
                    <div
                      key={i}
                      className="w-full bg-blue-400 rounded-t-sm"
                      style={{
                        height: `${h}%`
                      }}>
                    </div>
                    )}
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
              Insights that drive action
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
              icon: BarChart3,
              title: 'Real-Time Dashboards',
              desc: 'Monitor sales, labor, and comps from anywhere, on any device.'
            },
            {
              icon: TrendingUp,
              title: 'Sales Analytics',
              desc: 'Identify your best sellers, peak hours, and seasonal trends.'
            },
            {
              icon: Users,
              title: 'Labor Reports',
              desc: 'Track labor cost percentage and staff productivity in real-time.'
            },
            {
              icon: FileText,
              title: 'Custom Reports',
              desc: 'Build and schedule custom reports delivered straight to your inbox.'
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
              
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 mb-4 shadow-sm">
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
              title: 'Data is captured',
              desc: 'Every transaction, clock-in, and inventory change is logged automatically.'
            },
            {
              step: '2',
              title: 'Insights are generated',
              desc: 'Raw data is transformed into easy-to-read charts and actionable insights.'
            },
            {
              step: '3',
              title: 'You take action',
              desc: 'Adjust staffing, tweak menu prices, and optimize operations based on facts.'
            }].
            map((item, i) =>
            <div
              key={i}
              className="relative z-10 flex flex-col items-center text-center">
              
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold mb-6 border-4 border-brand-navy">
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
                Product mix and menu engineering
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Stop guessing what's making you money. Our menu engineering
                reports categorize your items into stars, plowhorses, puzzles,
                and dogs.
              </p>
              <ul className="space-y-4">
                {[
                'Identify high-margin, low-volume items to promote',
                'Spot low-margin, high-volume items to reprice',
                'Track modifier attachment rates',
                'Analyze sales by category and daypart'].
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
                <div className="flex items-center gap-2 mb-6">
                  <PieChart className="w-6 h-6 text-blue-500" />
                  <div className="font-bold text-lg">Sales by Category</div>
                </div>
                <div className="space-y-4">
                  {[
                  {
                    name: 'Food',
                    pct: '65%',
                    color: 'bg-blue-500'
                  },
                  {
                    name: 'Beverage',
                    pct: '25%',
                    color: 'bg-purple-500'
                  },
                  {
                    name: 'Merch',
                    pct: '10%',
                    color: 'bg-green-500'
                  }].
                  map((item, i) =>
                  <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{item.name}</span>
                        <span>{item.pct}</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                        className={`h-full ${item.color}`}
                        style={{
                          width: item.pct
                        }}>
                      </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Detail 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] bg-gray-100 rounded-2xl border border-gray-200 p-8 flex items-center justify-center">
              <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-6">
                  <LineChart className="w-6 h-6 text-red-500" />
                  <div className="font-bold text-lg">Labor vs Sales</div>
                </div>
                <div className="h-32 relative border-b border-l border-gray-200 mb-4">
                  {/* Abstract chart lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="none">
                    
                    <path
                      d="M0,100 Q30,80 60,90 T120,40 T180,60 T240,20"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="3" />
                    
                    <path
                      d="M0,120 Q30,110 60,115 T120,80 T180,90 T240,70"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="3" />
                    
                  </svg>
                </div>
                <div className="flex justify-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>{' '}
                    Sales
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>{' '}
                    Labor Cost
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
                Labor cost optimization
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Keep your labor costs in check. Compare scheduled vs. actual
                hours and monitor labor percentage against real-time sales.
              </p>
              <ul className="space-y-4">
                {[
                'Real-time labor cost percentage tracking',
                'Overtime alerts and reporting',
                'Sales per labor hour metrics',
                'Server performance and tip reporting'].
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
            Ready to understand your business?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Stop guessing and start making data-driven decisions today.
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
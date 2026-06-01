import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Wine,
  CreditCard,
  Clock,
  GlassWater,
  Users,
  ShieldCheck,
  CheckCircle2,
  Quote,
  Star,
  ArrowRight } from
'lucide-react';
export function BarsLounges() {
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
                <Wine className="w-5 h-5" /> For Bars & Lounges
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold font-heading text-brand-navy leading-[1.1] mb-6">
                Nightlife, <br />
                <span className="text-purple-600">Simplified</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Fast tabs, smart inventory, and seamless operations for bars,
                lounges, and nightclubs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-center text-lg shadow-soft">
                  
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
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-[4/3] bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden flex flex-col text-white">
                <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-black">
                  <div className="font-bold text-lg">Speed Screen</div>
                  <div className="px-3 py-1 bg-purple-600 text-sm font-bold rounded">
                    Happy Hour Active
                  </div>
                </div>
                <div className="flex-grow flex p-2 gap-2">
                  <div className="flex-grow grid grid-cols-4 gap-2">
                    {[
                    'Draft Beer',
                    'Bottled Beer',
                    'Vodka',
                    'Tequila',
                    'Whiskey',
                    'Rum',
                    'Gin',
                    'Wine',
                    'Cocktails',
                    'Shots',
                    'Mixers',
                    'Food'].
                    map((cat, i) =>
                    <div
                      key={i}
                      className="bg-gray-800 rounded flex items-center justify-center text-center p-2 text-sm font-bold border border-gray-700 hover:bg-gray-700 cursor-pointer">
                      
                        {cat}
                      </div>
                    )}
                  </div>
                  <div className="w-64 bg-black rounded border border-gray-800 flex flex-col">
                    <div className="p-3 border-b border-gray-800 font-bold flex justify-between">
                      <span>Tab: Smith</span>
                      <span className="text-purple-400">Pre-Auth</span>
                    </div>
                    <div className="flex-grow p-3 flex flex-col gap-2 text-sm">
                      <div className="flex justify-between">
                        <span>2x IPA Draft</span>
                        <span>RWF 15,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>1x Tito's Soda</span>
                        <span>RWF 11,500</span>
                      </div>
                    </div>
                    <div className="p-3 border-t border-gray-800">
                      <div className="flex justify-between font-bold text-lg mb-2">
                        <span>Total</span>
                        <span>RWF 27,000</span>
                      </div>
                      <div className="w-full py-3 bg-green-600 rounded text-center font-bold">
                        CLOSE TAB
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
              problem: 'Slow tab management during peak hours',
              solution:
              'Pre-authorize cards instantly and use speed screens for 2-tap ordering.'
            },
            {
              problem: 'Liquor inventory shrinkage',
              solution:
              'Precise pour tracking and recipe costing to identify missing inventory.'
            },
            {
              problem: 'Complex happy hour pricing',
              solution:
              'Automated time-based pricing that switches without manual intervention.'
            },
            {
              problem: 'High staff turnover',
              solution:
              'Intuitive interface that new bartenders can learn in 10 minutes.'
            }].
            map((item, i) =>
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex gap-4">
              
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
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
              Built for speed
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
            {
              icon: CreditCard,
              title: 'Quick Tab Management',
              link: '/features/pos'
            },
            {
              icon: GlassWater,
              title: 'Liquor Inventory',
              link: '/features/inventory'
            },
            {
              icon: Clock,
              title: 'Happy Hour Automation',
              link: '/features/pos'
            },
            {
              icon: ShieldCheck,
              title: 'Pre-authorization',
              link: '/features/pos'
            },
            {
              icon: Users,
              title: 'Event Management',
              link: '/features/table-management'
            },
            {
              icon: Wine,
              title: 'Speed Screens',
              link: '/features/pos'
            }].
            map((feature, i) =>
            <Link
              key={i}
              to={feature.link}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-4 group">
              
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="font-bold text-lg text-brand-navy">
                  {feature.title}
                </div>
                <ArrowRight className="w-5 h-5 ml-auto text-gray-300 group-hover:text-purple-600 transition-colors" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/20 to-transparent opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Quote className="w-16 h-16 text-purple-500/50 mx-auto mb-8" />
          <div className="flex justify-center gap-1 mb-8 text-amber-400">
            {[...Array(5)].map((_, j) =>
            <Star key={j} className="w-6 h-6 fill-current" />
            )}
          </div>
          <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-10">
            "The handheld devices have increased our table turn times by 20%.
            Servers love them, and tips are up because the payment process is so
            seamless."
          </p>
          <div>
            <div className="font-bold text-xl">Marcus Chen</div>
            <div className="text-gray-400">General Manager, Elevate Lounge</div>
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
            Ready to speed up your bar?
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
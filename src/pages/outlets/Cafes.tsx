import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Coffee,
  Zap,
  Heart,
  Package,
  Smartphone,
  ArrowUpCircle,
  CheckCircle2,
  Quote,
  Star,
  ArrowRight } from
'lucide-react';
export function Cafes() {
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
                <Coffee className="w-5 h-5" /> For Cafes & Coffee Shops
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold font-heading text-brand-navy leading-[1.1] mb-6">
                Speed Meets <br />
                <span className="text-amber-600">Simplicity</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Purpose-built for high-volume cafes and coffee shops. Fast
                ordering, loyalty programs, and precise inventory tracking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-center text-lg shadow-soft">
                  
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
                    New Order
                  </div>
                  <div className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-bold rounded flex items-center gap-1">
                    <Heart className="w-4 h-4" /> VIP Customer
                  </div>
                </div>
                <div className="flex-grow flex p-4 gap-4">
                  <div className="w-2/3 grid grid-cols-2 gap-3">
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer">
                      <div className="font-bold text-lg text-amber-800">
                        Latte
                      </div>
                      <div className="text-sm text-amber-600">RWF 6,000</div>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer">
                      <div className="font-bold text-lg">Cappuccino</div>
                      <div className="text-sm text-gray-500">RWF 6,000</div>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer">
                      <div className="font-bold text-lg">Americano</div>
                      <div className="text-sm text-gray-500">RWF 4,500</div>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer">
                      <div className="font-bold text-lg">Cold Brew</div>
                      <div className="text-sm text-gray-500">RWF 6,500</div>
                    </div>
                  </div>
                  <div className="w-1/3 bg-gray-50 rounded-xl border border-gray-200 flex flex-col">
                    <div className="p-3 border-b border-gray-200 font-bold">
                      Modifiers
                    </div>
                    <div className="flex-grow p-2 space-y-2">
                      <div className="bg-white p-2 rounded border border-amber-500 text-sm font-bold text-amber-700">
                        Oat Milk (+RWF 1,000)
                      </div>
                      <div className="bg-white p-2 rounded border border-gray-200 text-sm">
                        Almond Milk
                      </div>
                      <div className="bg-white p-2 rounded border border-amber-500 text-sm font-bold text-amber-700">
                        Vanilla Syrup (+RWF 700)
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
              problem: 'Long queues during morning rush',
              solution:
              'Lightning-fast POS and mobile order-ahead to keep the line moving.'
            },
            {
              problem: 'Inconsistent drink preparation',
              solution:
              'Digital KDS shows exact modifier recipes to baristas.'
            },
            {
              problem: 'No customer loyalty program',
              solution:
              'Built-in rewards program tied to phone numbers or credit cards.'
            },
            {
              problem: 'Ingredient waste from poor tracking',
              solution: 'Track milk, syrups, and beans down to the ounce.'
            }].
            map((item, i) =>
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex gap-4">
              
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-amber-600" />
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
              Everything a cafe needs
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
            {
              icon: Zap,
              title: 'Quick Order Entry',
              link: '/features/pos'
            },
            {
              icon: Heart,
              title: 'Loyalty & Rewards',
              link: '/features/pos'
            },
            {
              icon: Package,
              title: 'Ingredient Inventory',
              link: '/features/inventory'
            },
            {
              icon: Smartphone,
              title: 'Mobile Ordering',
              link: '/features/online-ordering'
            },
            {
              icon: ArrowUpCircle,
              title: 'Combo Prompts',
              link: '/features/pos'
            },
            {
              icon: Coffee,
              title: 'Multi-Location',
              link: '/features/analytics'
            }].
            map((feature, i) =>
            <Link
              key={i}
              to={feature.link}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-4 group">
              
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="font-bold text-lg text-brand-navy">
                  {feature.title}
                </div>
                <ArrowRight className="w-5 h-5 ml-auto text-gray-300 group-hover:text-amber-600 transition-colors" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/20 to-transparent opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Quote className="w-16 h-16 text-amber-500/50 mx-auto mb-8" />
          <div className="flex justify-center gap-1 mb-8 text-amber-400">
            {[...Array(5)].map((_, j) =>
            <Star key={j} className="w-6 h-6 fill-current" />
            )}
          </div>
          <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-10">
            "The loyalty program integration is seamless. Customers just tap
            their card and earn points automatically. It's increased our repeat
            customer rate by 35%."
          </p>
          <div>
            <div className="font-bold text-xl">Jessica Lee</div>
            <div className="text-gray-400">Owner, Daily Grind Roasters</div>
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
            Ready to speed up your line?
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
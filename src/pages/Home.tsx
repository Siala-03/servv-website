import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Package,
  ShoppingBag,
  BarChart3,
  Users,
  UtensilsCrossed,
  Wine,
  Hotel,
  Coffee,
  BrainCircuit,
  ArrowRight,
  CheckCircle2,
  Star,
  Quote } from
'lucide-react';
export function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
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
              
              <h1 className="text-5xl lg:text-6xl font-bold font-heading text-brand-navy leading-[1.1] mb-6">
                Africa’s Hospitality IT Partner<br />
                <span className="text-brand-coral">Servv: All-in-One Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Servv provides comprehensive IT solutions for the hospitality industry in Africa. From restaurant and hotel management systems (RMS & HMS) to digital marketing, website development, and custom software/app development, we empower your business to thrive in a digital world.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/50 focus:border-brand-coral transition-all text-lg" />
                
                <button className="bg-brand-coral hover:bg-brand-coral-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors whitespace-nowrap text-lg shadow-soft">
                  Sign Up Free
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-teal" /> No credit
                card required. 14-day free trial.
              </p>
            </motion.div>

            {/* Hero Mockup Area */}
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
              className="relative h-[500px] lg:h-[600px] w-full hidden md:block">
              
              {/* Main POS Interface Mockup */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] max-w-[700px] aspect-[4/3] bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden flex flex-col">
                {/* Header */}
                <div className="h-14 border-b border-gray-100 flex items-center justify-between px-6 bg-gray-50">
                  <div className="flex gap-4">
                    <div className="w-20 h-6 bg-gray-200 rounded-md"></div>
                    <div className="w-20 h-6 bg-brand-coral/20 rounded-md"></div>
                    <div className="w-20 h-6 bg-gray-200 rounded-md"></div>
                  </div>
                  <div className="w-32 h-8 bg-brand-navy rounded-md"></div>
                </div>
                {/* Body */}
                <div className="flex-grow flex p-4 gap-4 bg-gray-50/50">
                  {/* Left Menu Grid */}
                  <div className="flex-grow grid grid-cols-3 gap-3">
                    {[...Array(9)].map((_, i) =>
                    <div
                      key={i}
                      className="bg-white rounded-xl border border-gray-100 p-3 flex flex-col justify-between shadow-sm">
                      
                        <div className="w-12 h-12 bg-gray-100 rounded-lg mb-2"></div>
                        <div>
                          <div className="w-full h-3 bg-gray-200 rounded-full mb-1"></div>
                          <div className="w-1/2 h-3 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Right Order Ticket */}
                  <div className="w-72 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col">
                    <div className="p-4 border-b border-gray-100 font-semibold text-brand-navy">
                      Current Order #1042
                    </div>
                    <div className="flex-grow p-4 flex flex-col gap-3">
                      {[...Array(4)].map((_, i) =>
                      <div
                        key={i}
                        className="flex justify-between items-center">
                        
                          <div className="flex gap-2 items-center">
                            <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center text-xs">
                              1
                            </div>
                            <div className="w-24 h-3 bg-gray-200 rounded-full"></div>
                          </div>
                          <div className="w-10 h-3 bg-gray-200 rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <div className="p-4 border-t border-gray-100 bg-gray-50 rounded-b-xl">
                      <div className="flex justify-between font-bold text-lg mb-4">
                        <span>Total</span>
                        <span>RWF 42,500</span>
                      </div>
                      <div className="w-full h-12 bg-brand-coral rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut'
                }}
                className="absolute -left-8 top-20 bg-white p-4 rounded-xl shadow-card border border-gray-100 flex items-center gap-4">
                
                <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center text-brand-teal">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">
                    Daily Revenue
                  </div>
                  <div className="text-xl font-bold text-brand-navy">
                    RWF 4,250,000
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: 'easeInOut',
                  delay: 1
                }}
                className="absolute -right-4 bottom-32 bg-white p-4 rounded-xl shadow-card border border-gray-100 flex items-center gap-4">
                
                <div className="w-12 h-12 bg-brand-coral/10 rounded-full flex items-center justify-center text-brand-coral">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">
                    New Online Order
                  </div>
                  <div className="text-sm font-bold text-brand-navy">
                    UberEats - #882
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-brand-coral/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* SOLUTIONS OVERVIEW SECTION */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading text-brand-navy mb-4">
              IT Solutions for Hospitality
            </h2>
            <p className="text-xl text-gray-600">
              Restaurant & Hotel Management (RMS & HMS), Digital Marketing, Website Development, and Custom Software/App Development—all tailored for Africa’s hospitality industry.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-card transition-all group border border-gray-100">
              <div className="w-14 h-14 bg-brand-gray rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-coral group-hover:text-white transition-colors text-brand-navy">
                RMS
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3">Servv RMS</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Restaurant Management System: POS, inventory, staff, and table management, online ordering, and analytics—all in one platform.
              </p>
              <Link to="/rms" className="inline-flex items-center font-semibold text-brand-coral hover:text-brand-coral-dark transition-colors">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-card transition-all group border border-gray-100">
              <div className="w-14 h-14 bg-brand-gray rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-coral group-hover:text-white transition-colors text-brand-navy">
                HMS
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3">Servv HMS</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hotel Management System: Guest management, room service, spa scheduling, and property management for hotels and spas.
              </p>
              <Link to="/hms" className="inline-flex items-center font-semibold text-brand-coral hover:text-brand-coral-dark transition-colors">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-card transition-all group border border-gray-100">
              <div className="w-14 h-14 bg-brand-gray rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-coral group-hover:text-white transition-colors text-brand-navy">
                <span className="font-bold">Digital</span>
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3">Digital Marketing & Web</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Boost your brand with digital marketing, website development, and custom software/app solutions designed for hospitality businesses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUTLET TYPES SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading text-brand-navy mb-4">
              Built for every hospitality venue
            </h2>
            <p className="text-xl text-gray-600">
              Tailored workflows and features designed specifically for how your
              business operates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
            {
              title: 'Restaurants',
              desc: 'Full-service and quick-service restaurant management. Handle complex modifiers, coursing, and split checks with ease.',
              icon: UtensilsCrossed,
              link: '/outlets/restaurants',
              color: 'bg-orange-50 text-orange-600',
              image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
            },
            {
              title: 'Bars & Lounges',
              desc: 'Fast tab management, happy hour pricing automation, and robust inventory controls for nightlife operations.',
              icon: Wine,
              link: '/outlets/bars-lounges',
              color: 'bg-purple-50 text-purple-600',
              image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=800&q=80'
            },
            {
              title: 'Hotels & Spas',
              desc: 'Room service integration, guest profile management, spa scheduling, and seamless property management system sync.',
              icon: Hotel,
              link: '/outlets/hotels-spas',
              color: 'bg-blue-50 text-blue-600',
              image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
            },
            {
              title: 'Cafes & Coffee Shops',
              desc: 'Lightning-fast order entry, integrated loyalty programs, and precise ingredient tracking for high-volume cafes.',
              icon: Coffee,
              link: '/outlets/cafes',
              color: 'bg-amber-50 text-amber-600',
              image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
            }].
            map((outlet, i) =>
            <Link key={i} to={outlet.link}>
                <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white hover:shadow-card transition-all h-full flex flex-col">
                  {/* Card image */}
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={outlet.image}
                      alt={outlet.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className={`absolute bottom-4 left-4 p-2.5 rounded-xl ${outlet.color} backdrop-blur-sm`}>
                      <outlet.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-brand-coral transition-colors">
                      {outlet.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {outlet.desc}
                    </p>
                  </div>
                </motion.div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* SERVV IQ TEASER SECTION */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-teal/20 to-transparent opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-coral/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand-teal font-semibold mb-6">
                <BrainCircuit className="w-5 h-5" /> Introducing Servv IQ
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
                Your AI-Powered Business Brain
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Servv IQ doesn't just show you data—it understands it. It
                predicts busy periods, suggests menu optimizations, and
                automates routine tasks to boost your bottom line.
              </p>

              <div className="space-y-6 mb-10">
                {[
                {
                  title: 'Smart Insights',
                  desc: 'Discover hidden trends in your sales data automatically.'
                },
                {
                  title: 'Predictive Analytics',
                  desc: 'Forecast demand to optimize staffing and inventory.'
                },
                {
                  title: 'Automated Actions',
                  desc: 'Set up rules to automatically 86 items or adjust pricing.'
                }].
                map((item, i) =>
                <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-teal/20 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-brand-teal" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/servv-iq"
                className="inline-flex items-center bg-brand-teal hover:bg-teal-400 text-brand-navy font-bold px-8 py-4 rounded-xl transition-colors text-lg">
                
                Explore Servv IQ <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            {/* Servv IQ Visual Representation */}
            <div className="relative h-[500px] bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm flex flex-col justify-center">
              <div className="space-y-4">
                <motion.div
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
                  }}
                  className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start gap-4">
                  
                  <BrainCircuit className="w-6 h-6 text-brand-teal shrink-0 mt-1" />
                  <div>
                    <div className="text-sm text-brand-teal font-semibold mb-1">
                      Insight Generated
                    </div>
                    <div className="text-white">
                      "Avocado Toast" sales are up 40% on weekends. Consider
                      raising price by RWF 2,000 or creating a weekend combo.
                    </div>
                  </div>
                </motion.div>

                <motion.div
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
                  }}
                  transition={{
                    delay: 0.2
                  }}
                  className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start gap-4 ml-8">
                  
                  <Users className="w-6 h-6 text-brand-coral shrink-0 mt-1" />
                  <div>
                    <div className="text-sm text-brand-coral font-semibold mb-1">
                      Staffing Alert
                    </div>
                    <div className="text-white">
                      Rain forecast for Friday night. Expected dine-in traffic
                      down 20%, delivery up 35%. Reallocating 1 server to expo.
                    </div>
                  </div>
                </motion.div>

                <motion.div
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
                  }}
                  transition={{
                    delay: 0.4
                  }}
                  className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start gap-4">
                  
                  <Package className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <div className="text-sm text-blue-400 font-semibold mb-1">
                      Inventory Action Taken
                    </div>
                    <div className="text-white">
                      Automatically ordered 2 extra cases of IPA based on
                      upcoming local sports event predictions.
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HARDWARE SECTION */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading text-brand-navy mb-4">
              Purpose-Built Hardware
            </h2>
            <p className="text-xl text-gray-600">
              Sleek, durable, and spill-resistant devices designed specifically
              for the rigorous demands of hospitality environments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
            {
              name: 'Servv Terminal',
              desc: '14" customer-facing display, built-in card reader, and receipt printer.',
              type: 'Countertop POS',
              image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80'
            },
            {
              name: 'Servv Go',
              desc: 'Handheld POS for tableside ordering and line-busting with tap-to-pay.',
              type: 'Mobile Device',
              image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80'
            },
            {
              name: 'Servv KDS',
              desc: 'Rugged kitchen display systems built to withstand heat and grease.',
              type: 'Kitchen Display',
              image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80'
            }].
            map((hw, i) =>
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-soft border border-gray-100 group">
                <div className="h-64 overflow-hidden">
                  <img
                    src={hw.image}
                    alt={hw.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="text-sm font-semibold text-brand-coral mb-2 uppercase tracking-wider">
                    {hw.type}
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-3">
                    {hw.name}
                  </h3>
                  <p className="text-gray-600">{hw.desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
            {
              number: '1,000+',
              label: 'Venues Powered'
            },
            {
              number: '5M+',
              label: 'Orders Processed'
            },
            {
              number: '99.9%',
              label: 'System Uptime'
            },
            {
              number: '30%',
              label: 'Avg. Revenue Increase'
            }].
            map((stat, i) =>
            <div key={i}>
                <div className="text-4xl md:text-5xl font-bold font-heading text-brand-navy mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-brand-navy mb-4">
              Loved by hospitality leaders
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
            {
              quote:
                'Switching to Servv was the best decision for our restaurant group. The multi-location management and real-time analytics have completely transformed how we operate.',
              name: 'Mwangi Njoroge',
              role: 'Operations Director',
              venue: 'Nairobi Eats (Kenya)'
            },
            {
              quote:
                'The handheld devices have increased our table turn times by 20%. Servers love them, and tips are up because the payment process is so seamless.',
              name: 'Aline Uwase',
              role: 'General Manager',
              venue: 'Kigali Bistro (Rwanda)'
            },
            {
              quote:
                "Servv IQ's inventory predictions have reduced our food waste by almost 15%. It's like having a full-time data analyst on staff.",
              name: 'Joseph Okello',
              role: 'Executive Chef',
              venue: 'Jinja Grill (Uganda)'
            }].
            map((testimonial, i) =>
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 relative">
              
                <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-gray-dark" />
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, j) =>
                <Star key={j} className="w-5 h-5 fill-current" />
                )}
                </div>
                <p className="text-gray-700 text-lg mb-8 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-coral/10 rounded-full flex items-center justify-center text-brand-coral font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-brand-navy">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.venue}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 bg-brand-coral relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)',
            backgroundSize: '30px 30px'
          }}>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            Ready to transform your hospitality business?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join thousands of venues already using Servv to streamline
            operations and boost revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-5 py-4 rounded-xl border-none focus:outline-none focus:ring-4 focus:ring-white/30 text-lg" />
            
            <button className="bg-brand-navy hover:bg-brand-navy-light text-white font-semibold px-8 py-4 rounded-xl transition-colors whitespace-nowrap text-lg shadow-lg">
              Get Started
            </button>
          </div>
          <p className="text-white/80">
            Or{' '}
            <Link
              to="/contact"
              className="underline hover:text-white font-medium">
              
              request a personalized demo
            </Link>{' '}
            with our team.
          </p>
        </div>
      </section>
    </div>);

}
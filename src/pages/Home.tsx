import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Quote,
  Zap,
  Shield,
  TrendingUp,
  Smartphone,
  Monitor,
  ChefHat,
  UtensilsCrossed,
  Wine,
  Hotel,
  Coffee,
  BrainCircuit,
  Users,
  Package,
  BarChart3,
  ShoppingBag,
  Wifi,
  Globe,
  Headphones,
} from 'lucide-react';

export function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand-teal font-semibold text-sm mb-6 backdrop-blur-sm">
                <Zap className="w-4 h-4" /> Africa's #1 Hospitality Tech Partner
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold font-heading text-white leading-[1.05] mb-6">
                Run Your Venue
                <br />
                <span className="text-brand-coral">Smarter.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
                POS. Hotel management. Online ordering. Analytics. AI insights.
                <span className="text-white font-medium"> One platform.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="bg-brand-coral hover:bg-brand-coral-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg shadow-lg text-center"
                >
                  Get a Free Demo
                </Link>
                <Link
                  to="/rms"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg border border-white/20 text-center"
                >
                  Explore Solutions
                </Link>
              </div>

              <div className="flex items-center gap-6 mt-8 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" /> No credit card
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" /> 14-day free trial
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Setup in 72 hrs
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                  alt="Modern restaurant interior"
                  className="rounded-2xl shadow-2xl border-2 border-white/10"
                />
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="absolute -left-6 top-8 bg-white p-4 rounded-xl shadow-card flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Daily Revenue</div>
                    <div className="text-lg font-bold text-brand-navy">RWF 4.2M</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                  className="absolute -right-6 bottom-12 bg-white p-4 rounded-xl shadow-card flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-brand-coral/10 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-brand-coral" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">New Order</div>
                    <div className="text-sm font-bold text-brand-navy">UberEats #882</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 2 }}
                  className="absolute -right-4 top-6 bg-white p-3 rounded-xl shadow-card flex items-center gap-3"
                >
                  <div className="w-9 h-9 bg-brand-teal/10 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-brand-teal" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Occupancy</div>
                    <div className="text-sm font-bold text-brand-navy">84%</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY / STATS STRIP */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '1,000+', label: 'Venues Powered', icon: Globe },
              { number: '5M+', label: 'Orders Processed', icon: ShoppingBag },
              { number: '99.9%', label: 'System Uptime', icon: Shield },
              { number: '30%', label: 'Avg. Revenue Boost', icon: TrendingUp },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-brand-coral/10 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-brand-coral" />
                </div>
                <div className="text-3xl md:text-4xl font-bold font-heading text-brand-navy">
                  {stat.number}
                </div>
                <div className="text-gray-500 font-medium text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS VISUAL SECTION */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading text-brand-navy mb-4">
              One Ecosystem. Every Tool.
            </h2>
            <p className="text-lg text-gray-600">
              From front-of-house to back office — built for African hospitality.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* RMS Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/rms" className="group block h-full">
                <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all border border-gray-100">
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
                      alt="Restaurant management"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 bg-brand-coral text-white text-sm font-bold px-3 py-1.5 rounded-lg">
                      RMS
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-brand-coral transition-colors">
                      Restaurant Management
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      POS, inventory, staff scheduling, online ordering & analytics in one platform.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['POS', 'Inventory', 'Orders', 'Analytics'].map((tag) => (
                        <span key={tag} className="text-xs bg-brand-gray px-2.5 py-1 rounded-full text-gray-600 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* HMS Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link to="/hms" className="group block h-full">
                <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all border border-gray-100">
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
                      alt="Hotel management"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 bg-brand-teal text-white text-sm font-bold px-3 py-1.5 rounded-lg">
                      HMS
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-brand-coral transition-colors">
                      Hotel & Spa Management
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Reservations, housekeeping, guest profiles, billing & mobile check-in.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Front Desk', 'Housekeeping', 'Billing', 'Check-in'].map((tag) => (
                        <span key={tag} className="text-xs bg-brand-gray px-2.5 py-1 rounded-full text-gray-600 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Digital Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all border border-gray-100 group">
                <div className="h-52 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                    alt="Digital marketing dashboard"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-brand-navy text-white text-sm font-bold px-3 py-1.5 rounded-lg">
                    Digital
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-brand-coral transition-colors">
                    Digital Marketing & Web
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Websites, apps, SEO, social media & custom software for your brand.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Websites', 'Apps', 'SEO', 'Branding'].map((tag) => (
                      <span key={tag} className="text-xs bg-brand-gray px-2.5 py-1 rounded-full text-gray-600 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUTLET TYPES — FULL-BLEED IMAGE CARDS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading text-brand-navy mb-4">
              Your Venue. Your Workflow.
            </h2>
            <p className="text-lg text-gray-600">
              Tailored for how your business actually runs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Restaurants',
                desc: 'Full-service & quick-service management with complex modifiers, coursing, and split checks.',
                icon: UtensilsCrossed,
                link: '/outlets/restaurants',
                image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
              },
              {
                title: 'Bars & Lounges',
                desc: 'Fast tabs, happy hour automation, and robust inventory controls for nightlife.',
                icon: Wine,
                link: '/outlets/bars-lounges',
                image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=900&q=80',
              },
              {
                title: 'Hotels & Spas',
                desc: 'Room service, guest profiles, spa scheduling, and property management sync.',
                icon: Hotel,
                link: '/outlets/hotels-spas',
                image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80',
              },
              {
                title: 'Cafes & Coffee Shops',
                desc: 'Lightning-fast entry, loyalty programs, and ingredient tracking for high-volume cafes.',
                icon: Coffee,
                link: '/outlets/cafes',
                image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
              },
            ].map((outlet, i) => (
              <Link key={i} to={outlet.link}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="group relative h-72 md:h-80 rounded-2xl overflow-hidden"
                >
                  <img
                    src={outlet.image}
                    alt={outlet.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <outlet.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white font-heading">
                        {outlet.title}
                      </h3>
                    </div>
                    <p className="text-gray-200 text-sm max-w-md">{outlet.desc}</p>
                    <div className="mt-4 inline-flex items-center text-brand-coral font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL FEATURE HIGHLIGHTS */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading text-brand-navy mb-4">
              Why Venues Choose Servv
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                desc: 'Sub-second transactions during peak hours',
                color: 'bg-amber-50 text-amber-600',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80',
              },
              {
                icon: Wifi,
                title: 'Works Offline',
                desc: 'Never lose a sale, even without internet',
                color: 'bg-blue-50 text-blue-600',
                image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=400&q=80',
              },
              {
                icon: Globe,
                title: 'Built for Africa',
                desc: 'Mobile money, local payments, multi-currency',
                color: 'bg-green-50 text-green-600',
                image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
              },
              {
                icon: Headphones,
                title: '24/7 Support',
                desc: 'Real humans, any time, any channel',
                color: 'bg-purple-50 text-purple-600',
                image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400&q=80',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-soft border border-gray-100 group hover:shadow-card transition-all"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${feature.color}`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold font-heading text-brand-navy mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVV IQ TEASER — VISUAL */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-teal/20 to-transparent opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-coral/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand-teal font-semibold text-sm mb-6">
                <BrainCircuit className="w-4 h-4" /> AI-Powered
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
                Meet Servv IQ
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
                Predicts demand. Optimizes menus. Automates decisions.
                <span className="text-white font-medium"> You focus on guests.</span>
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: '25%', label: 'Less Waste' },
                  { value: '20%', label: 'Revenue Lift' },
                  { value: '15%', label: 'Labor Saved' },
                  { value: '3x', label: 'Faster Decisions' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-brand-teal">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                to="/servv-iq"
                className="inline-flex items-center bg-brand-teal hover:bg-teal-400 text-brand-navy font-bold px-8 py-4 rounded-xl transition-colors text-lg"
              >
                Explore Servv IQ <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start gap-4 mb-4"
                >
                  <div className="w-10 h-10 bg-brand-teal/20 rounded-lg flex items-center justify-center shrink-0">
                    <BrainCircuit className="w-5 h-5 text-brand-teal" />
                  </div>
                  <div>
                    <div className="text-sm text-brand-teal font-semibold mb-1">Insight</div>
                    <div className="text-white text-sm">
                      "Avocado Toast" sales up 40% on weekends — raise price by RWF 2,000 or create a combo.
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start gap-4 ml-6 mb-4"
                >
                  <div className="w-10 h-10 bg-brand-coral/20 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-brand-coral" />
                  </div>
                  <div>
                    <div className="text-sm text-brand-coral font-semibold mb-1">Staff Alert</div>
                    <div className="text-white text-sm">
                      Rain Friday night — dine-in down 20%, delivery up 35%. Reallocating 1 server to expo.
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-blue-400/20 rounded-lg flex items-center justify-center shrink-0">
                    <Package className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-400 font-semibold mb-1">Auto-Action</div>
                    <div className="text-white text-sm">
                      Ordered 2 extra cases of IPA based on upcoming sports event predictions.
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HARDWARE — IMAGE-FORWARD */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading text-brand-navy mb-4">
              Purpose-Built Hardware
            </h2>
            <p className="text-lg text-gray-600">
              Sleek, durable, and spill-resistant — built for hospitality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Servv Terminal',
                type: 'Countertop POS',
                icon: Monitor,
                desc: '14" display, built-in card reader & receipt printer.',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
              },
              {
                name: 'Servv Go',
                type: 'Mobile Device',
                icon: Smartphone,
                desc: 'Handheld for tableside ordering with tap-to-pay.',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
              },
              {
                name: 'Servv KDS',
                type: 'Kitchen Display',
                icon: ChefHat,
                desc: 'Rugged displays that handle heat and grease.',
                image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80',
              },
            ].map((hw, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-soft border border-gray-100 group hover:shadow-card transition-all"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={hw.image}
                    alt={hw.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                    <hw.icon className="w-5 h-5 text-brand-navy" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-brand-coral uppercase tracking-wider mb-1">
                    {hw.type}
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-2">{hw.name}</h3>
                  <p className="text-gray-600 text-sm">{hw.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — WITH PHOTOS */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-brand-navy mb-4">
              Loved by Hospitality Leaders
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  'Multi-location management and real-time analytics completely transformed how we operate.',
                name: 'Mwangi Njoroge',
                role: 'Operations Director',
                venue: 'Nairobi Eats, Kenya',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
              },
              {
                quote:
                  'Handheld devices increased table turns by 20%. Servers love them — tips are up too.',
                name: 'Aline Uwase',
                role: 'General Manager',
                venue: 'Kigali Bistro, Rwanda',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
              },
              {
                quote:
                  "Servv IQ's inventory predictions cut our food waste by 15%. Like having a data analyst on staff.",
                name: 'Joseph Okello',
                role: 'Executive Chef',
                venue: 'Jinja Grill, Uganda',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-gray-dark" />
                <div className="flex gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-brand-navy text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">
                      {testimonial.role}, {testimonial.venue}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — IMAGE BACKGROUND */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1920&q=80"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-coral/90" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(#fff 1.5px, transparent 1.5px)',
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            Start Growing Today
          </h2>
          <p className="text-xl text-white/90 mb-10">
            1,000+ venues across Africa already run on Servv.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-coral hover:bg-gray-50 font-bold px-10 py-4 rounded-xl transition-colors text-lg shadow-lg"
            >
              Get a Free Demo
            </Link>
            <Link
              to="/pricing"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-10 py-4 rounded-xl transition-colors text-lg border border-white/30"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

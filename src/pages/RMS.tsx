import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  UtensilsCrossed, BarChart3, Package, Users, ShoppingBag,
  CheckCircle2, ArrowRight, Star, LayoutGrid, TrendingUp, Zap,
  Wifi, Globe, Headphones, CreditCard, Store
} from 'lucide-react';

const features = [
  {
    icon: UtensilsCrossed,
    title: 'Lightning-Fast POS',
    desc: 'Dine-in, takeaway, delivery — processed in seconds.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    color: 'bg-orange-500',
  },
  {
    icon: Package,
    title: 'Smart Inventory',
    desc: 'Real-time stock tracking. Recipe costing. Waste alerts.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    color: 'bg-brand-teal',
  },
  {
    icon: Users,
    title: 'Staff & Scheduling',
    desc: 'Shifts, payroll, performance — one dashboard.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    color: 'bg-blue-600',
  },
  {
    icon: ShoppingBag,
    title: 'Online Ordering',
    desc: 'Integrated delivery across Africa\'s top platforms.',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80',
    color: 'bg-purple-600',
  },
  {
    icon: BarChart3,
    title: 'Actionable Analytics',
    desc: 'What\'s selling. What\'s not. Where to grow.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    color: 'bg-green-600',
  },
  {
    icon: LayoutGrid,
    title: 'Table Management',
    desc: 'Smart floor plans, reservations, waitlist flow.',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?auto=format&fit=crop&w=800&q=80',
    color: 'bg-rose-600',
  },
];

const stats = [
  { number: '1,000+', label: 'Venues Powered', icon: Store },
  { number: '5M+', label: 'Orders Processed', icon: ShoppingBag },
  { number: '99.9%', label: 'System Uptime', icon: Zap },
  { number: '30%', label: 'Avg Revenue Increase', icon: TrendingUp },
];

const testimonials = [
  {
    name: 'Amani Kariuki',
    role: 'Owner, Nairobi Eats (Kenya)',
    quote: 'Revenue up 35%. Kitchen runs smoother than ever.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Grace Uwimana',
    role: 'GM, Kigali Bistro (Rwanda)',
    quote: 'Offline mode is a game changer. We never lose a sale.',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Kwame Asante',
    role: 'Executive Chef, Accra Kitchen (Ghana)',
    quote: 'Inventory tracking alone saved us thousands.',
    avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=150&q=80',
  },
];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80', alt: 'Fine dining restaurant', span: 'md:col-span-2 md:row-span-2' },
  { src: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80', alt: 'Outdoor restaurant' },
  { src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80', alt: 'Restaurant kitchen' },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80', alt: 'Restaurant bar' },
  { src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=600&q=80', alt: 'Restaurant ambiance' },
];

export function RMS() {
  return (
    <div className="w-full">
      {/* ── HERO ── full-bleed image background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand-teal font-semibold text-sm mb-6 backdrop-blur-sm">
              <UtensilsCrossed className="w-4 h-4" /> Restaurant Management System
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold font-heading text-white leading-[1.05] mb-6">
              Your Restaurant.
              <br />
              <span className="text-brand-coral">Supercharged.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
              POS. Inventory. Staff. Analytics. Online ordering.
              <span className="text-white font-medium"> One platform built for Africa.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-brand-coral hover:bg-brand-coral-dark text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg shadow-lg flex items-center justify-center gap-2"
              >
                Request a Demo <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg border border-white/20 text-center"
              >
                View Pricing
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
                <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Live in 72 hrs
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="py-14 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-coral/10 flex items-center justify-center shrink-0">
                  <stat.icon className="w-7 h-7 text-brand-coral" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold font-heading text-brand-navy">{stat.number}</div>
                  <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── image-topped cards */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading text-brand-navy mb-4">
              Everything your restaurant needs
            </h2>
            <p className="text-lg text-gray-600">
              One integrated platform. Every aspect covered.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-card transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className={`absolute bottom-4 left-4 w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading mb-2 text-brand-navy group-hover:text-brand-coral transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ── larger images */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl ${img.span || ''}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-56 md:h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading text-brand-navy mb-4">
              Live in days. Not months.
            </h2>
            <p className="text-lg text-gray-600">We handle setup. You focus on guests.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gray-200" />
            {[
              { step: '1', icon: Zap, title: 'Sign Up', desc: 'Create your account in minutes.' },
              { step: '2', icon: Package, title: 'Menu Setup', desc: 'We import your menu and floor plan.' },
              { step: '3', icon: Users, title: 'Train Staff', desc: '60-minute onboarding. That\'s it.' },
              { step: '4', icon: TrendingUp, title: 'Go Live', desc: 'Start serving with live support.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-brand-coral/10 border-2 border-brand-coral/30 flex items-center justify-center text-brand-coral mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="absolute top-0 right-1/4 md:right-0 w-7 h-7 bg-brand-coral rounded-full text-white text-xs font-bold flex items-center justify-center shadow-md">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold font-heading mb-1 text-brand-navy">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SERVV RMS ── image + checklist side-by-side */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-coral/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
                alt="Kitchen powered by Servv"
                className="rounded-2xl shadow-2xl w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent" />
              {/* Floating stat */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -right-4 -bottom-4 bg-white p-4 rounded-xl shadow-card flex items-center gap-3"
              >
                <div className="w-11 h-11 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Waste Reduced</div>
                  <div className="text-lg font-bold text-brand-navy">42%</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right — copy + checklist */}
            <div>
              <h2 className="text-4xl font-bold font-heading mb-6">
                Built for Africa's hospitality reality
              </h2>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                Not a Western import. Purpose-built for local payments, connectivity challenges, and the energy of Africa's dining scene.
              </p>
              <div className="space-y-5">
                {[
                  { icon: Wifi, title: 'Works Offline', desc: 'Keep selling when connectivity drops. Syncs automatically.' },
                  { icon: CreditCard, title: 'Local Payments', desc: 'Mobile money, card, and cash — all reconciled.' },
                  { icon: Globe, title: 'Multi-Currency & Multi-Location', desc: 'Manage outlets across cities. Consolidated reporting.' },
                  { icon: Headphones, title: '24/7 Local Support', desc: 'Africa-based team. Your time zone. Round the clock.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-coral/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-brand-coral" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── with avatar photos */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading text-brand-navy mb-4">
              Loved by operators across Africa
            </h2>
            <p className="text-lg text-gray-600">Real results from real restaurants.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-card border border-gray-100"
              >
                <div className="flex gap-1 mb-5 text-amber-400">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-brand-navy">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AFRICA COVERAGE ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold font-heading text-brand-navy mb-2">Trusted across the continent</h3>
            <p className="text-gray-500">From Cape Town to Cairo</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { country: 'Rwanda', flag: '\u{1F1F7}\u{1F1FC}', venues: '300+' },
              { country: 'Kenya', flag: '\u{1F1F0}\u{1F1EA}', venues: '280+' },
              { country: 'Uganda', flag: '\u{1F1FA}\u{1F1EC}', venues: '180+' },
              { country: 'Tanzania', flag: '\u{1F1F9}\u{1F1FF}', venues: '120+' },
              { country: 'Ghana', flag: '\u{1F1EC}\u{1F1ED}', venues: '80+' },
              { country: 'Nigeria', flag: '\u{1F1F3}\u{1F1EC}', venues: '60+' },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 bg-brand-gray px-5 py-3 rounded-full border border-gray-100"
              >
                <span className="text-2xl">{c.flag}</span>
                <div>
                  <div className="font-semibold text-brand-navy text-sm">{c.country}</div>
                  <div className="text-xs text-gray-500">{c.venues} venues</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── image background with overlay */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80"
            alt="Restaurant atmosphere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-coral/90" />
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              Ready to transform your restaurant?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-xl mx-auto">
              Join 1,000+ venues across Africa already running on Servv RMS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-brand-coral font-bold px-10 py-5 rounded-xl transition-colors text-xl gap-2 shadow-lg"
              >
                Get Started Today <ArrowRight className="w-6 h-6" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-semibold px-10 py-5 rounded-xl transition-colors text-xl gap-2 border-2 border-white/30"
              >
                Talk to Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

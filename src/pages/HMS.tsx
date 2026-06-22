import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Hotel, Users, BarChart3, CheckCircle2, ArrowRight, Star,
  CalendarCheck, CreditCard, Smartphone, TrendingUp, Zap, Package,
  Sparkles, Clock, Globe, Headphones
} from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function HMS() {
  return (
    <div className="w-full">

      {/* ──────────────── HERO — Full-bleed image ──────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80"
            alt="Luxury hotel lobby"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand-teal font-semibold text-sm mb-6 backdrop-blur-sm">
                <Hotel className="w-4 h-4" /> Hotel Management System
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold font-heading text-white leading-[1.05] mb-6">
                Every Guest.
                <br />
                <span className="text-brand-teal">Unforgettable.</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
                The property management platform built for Africa's finest hotels, lodges, and resorts.
                <span className="text-white font-medium"> World-class stays, leaner operations.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="bg-brand-teal hover:bg-teal-400 text-brand-navy font-bold px-8 py-4 rounded-xl transition-colors text-lg shadow-lg text-center flex items-center justify-center gap-2"
                >
                  Request a Demo <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg border border-white/20 text-center"
                >
                  Talk to Sales
                </Link>
              </div>

              <div className="flex items-center gap-6 mt-8 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" /> No credit card
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Live in 72 hrs
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" /> 24/7 support
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────── STATS STRIP ──────────────── */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Hotel, number: '500+', label: 'Hotels & Lodges' },
              { icon: Star, number: '95%', label: 'Guest Satisfaction' },
              { icon: TrendingUp, number: '25%', label: 'Occupancy Uplift' },
              { icon: Clock, number: '40%', label: 'Faster Check-in' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center shrink-0">
                  <stat.icon className="w-6 h-6 text-brand-teal" />
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

      {/* ──────────────── FEATURES — Image-topped cards ──────────────── */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h2 {...fadeUp} className="text-4xl font-bold font-heading text-brand-navy mb-4">
              One system. Every department.
            </motion.h2>
            <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-lg text-gray-600">
              Front desk to housekeeping, spa to billing — connected.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
                icon: CalendarCheck,
                title: 'Reservations & Front Desk',
                desc: 'Bookings, walk-ins, and group reservations — one intuitive dashboard.',
                color: 'text-blue-600 bg-blue-50',
              },
              {
                img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
                icon: Hotel,
                title: 'Housekeeping & Rooms',
                desc: 'Real-time room status, auto task assignments, maintenance tracking.',
                color: 'text-teal-600 bg-teal-50',
              },
              {
                img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
                icon: Users,
                title: 'Guest Profiles',
                desc: 'Rich guest histories that drive loyalty and repeat bookings.',
                color: 'text-purple-600 bg-purple-50',
              },
              {
                img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
                icon: CreditCard,
                title: 'Integrated Billing',
                desc: 'Consolidated folios, multi-payment support, auto invoicing.',
                color: 'text-green-600 bg-green-50',
              },
              {
                img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
                icon: Sparkles,
                title: 'Spa & Amenity Booking',
                desc: 'Let guests book spa sessions, tours, and extras from their phone.',
                color: 'text-rose-600 bg-rose-50',
              },
              {
                img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80',
                icon: BarChart3,
                title: 'Occupancy Analytics',
                desc: 'RevPAR, occupancy rates, and guest scores — all in real time.',
                color: 'text-orange-600 bg-orange-50',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-card transition-all group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center`}>
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold font-heading group-hover:text-brand-teal transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── SHOWCASE — Split image + copy ──────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Row 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div {...fadeUp} className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-semibold text-xs mb-4">
                <Smartphone className="w-3.5 h-3.5" /> Mobile-first
              </div>
              <h3 className="text-3xl font-bold font-heading text-brand-navy mb-4">
                Check-in from anywhere
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Guests check in on their phone, skip the queue, and head straight to their room. Digital key cards, pre-arrival preferences, and instant room-ready notifications.
              </p>
              <ul className="space-y-3">
                {['QR-code self check-in', 'Digital room keys', 'Pre-arrival upsells'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-navy font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.15 }}
              className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-card"
            >
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
                alt="Hotel pool and guest experience"
                className="w-full h-[360px] object-cover"
              />
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              {...fadeUp}
              className="rounded-2xl overflow-hidden shadow-card"
            >
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
                alt="Hotel front desk operations"
                className="w-full h-[360px] object-cover"
              />
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 font-semibold text-xs mb-4">
                <BarChart3 className="w-3.5 h-3.5" /> Analytics
              </div>
              <h3 className="text-3xl font-bold font-heading text-brand-navy mb-4">
                Know your numbers. Instantly.
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                RevPAR, ADR, occupancy, guest satisfaction scores, and revenue per channel — all on one live dashboard your GM actually wants to open.
              </p>
              <ul className="space-y-3">
                {['Real-time RevPAR tracking', 'Channel performance breakdown', 'Exportable management reports'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-navy font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────── HOW IT WORKS ──────────────── */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h2 {...fadeUp} className="text-4xl font-bold font-heading text-brand-navy mb-4">
              Live in 72 hours
            </motion.h2>
            <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-lg text-gray-600">
              We set everything up. You welcome guests.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gray-200" />
            {[
              { step: '1', icon: Zap, title: 'Kick-off Call', desc: 'We learn your property, room types, and workflows.' },
              { step: '2', icon: Package, title: 'System Setup', desc: 'Rates, integrations, and PMS configured for you.' },
              { step: '3', icon: Users, title: 'Team Training', desc: 'Hands-on sessions for front desk, housekeeping, and managers.' },
              { step: '4', icon: TrendingUp, title: 'Go Live', desc: "Launch with confidence — we're on call your first week." },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-brand-teal/10 border-2 border-brand-teal/30 flex items-center justify-center text-brand-teal mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="absolute top-0 right-1/4 md:right-0 w-6 h-6 bg-brand-teal rounded-full text-brand-navy text-xs font-bold flex items-center justify-center">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold font-heading mb-2 text-brand-navy">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── WHY SERVV + TESTIMONIALS ──────────────── */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-teal/10 to-transparent" />
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — value props */}
            <div>
              <motion.h2 {...fadeUp} className="text-4xl font-bold font-heading mb-6">
                Built for Africa's hospitality ambition
              </motion.h2>
              <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-lg text-gray-300 mb-10 leading-relaxed">
                World-class PMS tools, adapted for your reality.
              </motion.p>

              <div className="space-y-5">
                {[
                  { icon: Smartphone, title: 'Mobile Guest Check-In', desc: 'Skip the queue. Phone-first from arrival to checkout.' },
                  { icon: CreditCard, title: 'Local Payment Methods', desc: 'Mobile money, card, and cash — reconciled automatically in RWF.' },
                  { icon: Globe, title: 'Multi-Property Control', desc: 'Your entire portfolio. One dashboard. Consolidated reporting.' },
                  { icon: Headphones, title: '24/7 African Support', desc: 'Your time zone, your language, always ready.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-teal/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-brand-teal" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right — testimonials with avatar images */}
            <div className="flex flex-col gap-6">
              {[
                {
                  name: 'Isabelle Nkurunziza',
                  role: 'GM, Kigali Heights Hotel',
                  avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80',
                  quote: 'Occupancy up 20%. Staff spend less time on admin and more time with guests.',
                },
                {
                  name: 'Emmanuel Osei',
                  role: 'Owner, Accra Boutique Lodge',
                  avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=100&q=80',
                  quote: 'Every returning guest feels like a VIP. Our reviews have transformed completely.',
                },
                {
                  name: 'Fatuma Wanjiku',
                  role: 'Ops Manager, Mombasa Resort',
                  avatar: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&w=100&q=80',
                  quote: 'Billing used to be a nightmare. Checkout now takes under 2 minutes.',
                },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="flex gap-1 mb-4 text-amber-400">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-5 italic leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-white text-sm">{t.name}</div>
                      <div className="text-xs text-gray-400">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── COVERAGE STRIP ──────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold font-heading text-brand-navy mb-2">Trusted across the continent</h3>
            <p className="text-gray-500">From boutique lodges to city hotels</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { country: 'Rwanda', flag: '\u{1F1F7}\u{1F1FC}', props: '150+' },
              { country: 'Kenya', flag: '\u{1F1F0}\u{1F1EA}', props: '120+' },
              { country: 'Uganda', flag: '\u{1F1FA}\u{1F1EC}', props: '80+' },
              { country: 'Tanzania', flag: '\u{1F1F9}\u{1F1FF}', props: '70+' },
              { country: 'Ghana', flag: '\u{1F1EC}\u{1F1ED}', props: '50+' },
              { country: 'Nigeria', flag: '\u{1F1F3}\u{1F1EC}', props: '30+' },
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
                  <div className="text-xs text-gray-500">{c.props} properties</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── CTA — Image background ──────────────── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1920&q=80"
            alt="Hotel lobby"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/80" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            {...fadeUp}
            className="text-4xl md:text-5xl font-bold font-heading text-white mb-6"
          >
            Ready to elevate your property?
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 mb-10 max-w-xl mx-auto"
          >
            Join 500+ hotels across Africa delivering exceptional stays with Servv HMS.
          </motion.p>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-brand-teal hover:bg-teal-400 text-brand-navy font-bold px-10 py-5 rounded-xl transition-colors text-xl gap-2 shadow-lg"
            >
              Get Started Today <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-10 py-5 rounded-xl transition-colors text-xl border border-white/20"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Hotel, Users, BarChart3, CheckCircle2, ArrowRight, Star,
  CalendarCheck, CreditCard, Smartphone, TrendingUp, Zap, Package
} from 'lucide-react';

export function HMS() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-6 text-sm">
                <Hotel className="w-4 h-4" /> Hotel Management System
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold font-heading text-brand-navy leading-[1.1] mb-6">
                Elevate Every<br />
                <span className="text-brand-teal">Guest Experience</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Servv HMS is the property management platform built for Africa's finest hotels, lodges, and resorts. Deliver world-class guest experiences while running a leaner, more profitable operation.
              </p>

              {/* Quick stat pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { icon: Hotel, label: '500+ properties' },
                  { icon: Users, label: '95% guest satisfaction' },
                  { icon: TrendingUp, label: '25% occupancy uplift' },
                ].map((pill, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm">
                    <pill.icon className="w-4 h-4 text-brand-teal" />
                    {pill.label}
                  </div>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                <Link
                  to="/contact"
                  className="bg-brand-teal hover:bg-teal-400 text-brand-navy font-bold px-8 py-4 rounded-xl transition-colors text-lg shadow-soft flex items-center gap-2">
                  Request a Demo <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-gray-200 hover:border-brand-teal text-brand-navy font-semibold px-8 py-4 rounded-xl transition-colors text-lg bg-white">
                  Talk to Sales
                </Link>
              </div>
            </motion.div>

            {/* Right — Hotel Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[540px] hidden md:block">

              {/* Main hotel photo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[108%] max-w-[600px] h-[440px] rounded-3xl overflow-hidden shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80"
                  alt="Hotel lobby powered by Servv HMS"
                  className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-white/70 text-xs mb-1">Powered by Servv HMS</div>
                  <div className="text-white font-bold text-lg">Kigali Heights Hotel — Rwanda</div>
                </div>
              </div>

              {/* Floating — occupancy */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -left-6 top-20 bg-white p-4 rounded-xl shadow-card border border-gray-100 flex items-center gap-3">
                <div className="w-11 h-11 bg-brand-teal/10 rounded-full flex items-center justify-center text-brand-teal">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Occupancy</div>
                  <div className="text-lg font-bold text-brand-navy">84%</div>
                  <div className="text-xs text-green-600 font-semibold">+12% vs last week</div>
                </div>
              </motion.div>

              {/* Floating — new reservation */}
              <motion.div
                animate={{ y: [0, 9, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-4 bottom-24 bg-white p-4 rounded-xl shadow-card border border-gray-100 flex items-center gap-3">
                <div className="w-11 h-11 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">New Reservation</div>
                  <div className="text-sm font-bold text-brand-navy">Kwame A. · Jun 5–8</div>
                </div>
              </motion.div>

              {/* Floating — mobile check-in */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 2 }}
                className="absolute right-6 top-10 bg-white p-3 rounded-xl shadow-card border border-gray-100 flex items-center gap-2">
                <div className="w-9 h-9 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Mobile Check-in</div>
                  <div className="text-sm font-bold text-brand-navy">Room 109 ready</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Hotels & Lodges' },
              { number: '95%', label: 'Guest Satisfaction' },
              { number: '25%', label: 'Occupancy Uplift' },
              { number: '40%', label: 'Faster Check-in' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}>
                <div className="text-4xl md:text-5xl font-bold font-heading text-brand-teal mb-2">{stat.number}</div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading text-brand-navy mb-4">
              A complete hotel operating system
            </h2>
            <p className="text-xl text-gray-600">
              From the front desk to housekeeping, from the spa to the restaurant — Servv HMS connects your entire property.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: CalendarCheck, title: 'Reservations & Front Desk', desc: 'Manage bookings, walk-ins, and group reservations from a single, intuitive dashboard.', color: 'text-blue-600 bg-blue-50' },
              { icon: Hotel, title: 'Housekeeping & Rooms', desc: 'Real-time room status, automated task assignments, and maintenance tracking.', color: 'text-teal-600 bg-teal-50' },
              { icon: Users, title: 'Guest Profiles', desc: 'Build rich guest histories to deliver personalized experiences that earn loyalty and repeat visits.', color: 'text-purple-600 bg-purple-50' },
              { icon: CreditCard, title: 'Integrated Billing', desc: 'Consolidated folios, multi-payment support, and automated invoicing — all in one place.', color: 'text-green-600 bg-green-50' },
              { icon: Smartphone, title: 'Mobile Check-In/Out', desc: 'Let guests check in from their phone, skip the queue, and head straight to their room.', color: 'text-rose-600 bg-rose-50' },
              { icon: BarChart3, title: 'Occupancy Analytics', desc: 'Track RevPAR, occupancy rates, and guest satisfaction scores with real-time reporting.', color: 'text-orange-600 bg-orange-50' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-card transition-all group">
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-brand-teal transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', alt: 'Hotel lobby', span: 'md:col-span-2 md:row-span-2' },
              { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80', alt: 'Hotel room', span: '' },
              { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', alt: 'Hotel pool', span: '' },
              { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80', alt: 'Hotel suite', span: '' },
              { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80', alt: 'Hotel exterior', span: '' },
            ].map((img, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl ${img.span}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-48 md:h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading text-brand-navy mb-4">Live in 72 hours</h2>
            <p className="text-xl text-gray-600">Our onboarding team sets everything up — you're welcoming guests in days.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gray-200" />
            {[
              { step: '1', icon: Zap, title: 'Kick-off Call', desc: 'We learn your property layout, room types, and processes.' },
              { step: '2', icon: Package, title: 'System Setup', desc: 'We configure your HMS, import rates, and set up integrations.' },
              { step: '3', icon: Users, title: 'Team Training', desc: 'Hands-on training for your front desk, housekeeping, and management.' },
              { step: '4', icon: TrendingUp, title: 'Go Live', desc: "Launch with confidence — we're on call for your first week." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-brand-teal/10 border-2 border-brand-teal/30 flex items-center justify-center text-brand-teal mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="absolute top-0 right-0 w-6 h-6 bg-brand-teal rounded-full text-brand-navy text-xs font-bold flex items-center justify-center">{item.step}</div>
                <h3 className="text-lg font-bold font-heading mb-2 text-brand-navy">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SERVV HMS — dark section */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-teal/10 to-transparent" />
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold font-heading mb-6">
                Designed for Africa's hospitality excellence
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Africa's hotel sector is growing fast — and your technology should match that ambition. Servv HMS gives you the tools of a world-class property management system, adapted for your reality.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Mobile Guest Check-In', desc: 'Let guests check in from their phone and skip the queue entirely.' },
                  { title: 'Local Payment Methods', desc: 'Mobile money, card, and cash accepted and reconciled automatically in RWF.' },
                  { title: 'Multi-Property Management', desc: 'Manage your entire portfolio from one platform with consolidated reporting.' },
                  { title: '24/7 African Support', desc: 'Our team is in your time zone, speaking your language, and ready when you need us.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-teal/20 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-brand-teal" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="flex flex-col gap-6">
              {[
                { name: 'Isabelle Nkurunziza', role: 'GM, Kigali Heights Hotel (Rwanda)', quote: 'Since switching to Servv HMS, our occupancy is up 20% and our staff spends less time on admin and more time with guests.' },
                { name: 'Emmanuel Osei', role: 'Owner, Accra Boutique Lodge (Ghana)', quote: "The guest profile system means every returning guest feels like a VIP. It's transformed our reviews completely." },
                { name: 'Fatuma Wanjiku', role: 'Operations Manager, Mombasa Resort (Kenya)', quote: 'Billing used to be a nightmare. Servv HMS consolidated everything. Check-out now takes under 2 minutes.' },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="flex gap-1 mb-4 text-amber-400">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-teal/20 rounded-full flex items-center justify-center text-brand-teal font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-white">{t.name}</div>
                      <div className="text-sm text-gray-400">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AFRICA COVERAGE STRIP */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold font-heading text-brand-navy mb-2">Trusted by leading properties</h3>
            <p className="text-gray-500">From boutique lodges to city hotels — across the continent</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { country: 'Rwanda', flag: '🇷🇼', props: '150+' },
              { country: 'Kenya', flag: '🇰🇪', props: '120+' },
              { country: 'Uganda', flag: '🇺🇬', props: '80+' },
              { country: 'Tanzania', flag: '🇹🇿', props: '70+' },
              { country: 'Ghana', flag: '🇬🇭', props: '50+' },
              { country: 'Nigeria', flag: '🇳🇬', props: '30+' },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 bg-brand-gray px-5 py-3 rounded-full border border-gray-100">
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

      {/* CTA */}
      <section className="py-24 bg-brand-teal relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-brand-navy mb-6">
            Ready to elevate your hotel?
          </h2>
          <p className="text-xl text-brand-navy/80 mb-10">
            Join 500+ properties across Africa already delivering exceptional stays with Servv HMS.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-brand-navy hover:bg-brand-navy-light text-white font-bold px-10 py-5 rounded-xl transition-colors text-xl gap-2 shadow-lg">
            Get Started Today <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}

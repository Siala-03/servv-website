import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  UtensilsCrossed, BarChart3, Package, Users, ShoppingBag,
  CheckCircle2, ArrowRight, Star, LayoutGrid, TrendingUp, Zap
} from 'lucide-react';

export function RMS() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-coral/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/60 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold mb-6 text-sm">
                <UtensilsCrossed className="w-4 h-4" /> Restaurant Management System
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold font-heading text-brand-navy leading-[1.1] mb-6">
                Run Your Restaurant<br />
                <span className="text-brand-coral">Like Never Before</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Servv RMS is Africa's most advanced restaurant management platform — built for the continent's unique pace and ambition. From Kigali to Nairobi, we power the venues that define hospitality.
              </p>

              {/* Quick stat pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { icon: UtensilsCrossed, label: '1,000+ venues' },
                  { icon: ShoppingBag, label: '5M+ orders' },
                  { icon: TrendingUp, label: '30% revenue uplift' },
                ].map((pill, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm">
                    <pill.icon className="w-4 h-4 text-brand-coral" />
                    {pill.label}
                  </div>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                <Link
                  to="/contact"
                  className="bg-brand-coral hover:bg-brand-coral-dark text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg shadow-soft flex items-center gap-2">
                  Request a Demo <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-gray-200 hover:border-brand-coral text-brand-navy font-semibold px-8 py-4 rounded-xl transition-colors text-lg bg-white">
                  Talk to Sales
                </Link>
              </div>
            </motion.div>

            {/* Right — Restaurant image with floating stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[520px] hidden md:block">

              {/* Main restaurant photo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[108%] max-w-[600px] h-[430px] rounded-3xl overflow-hidden shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
                  alt="Restaurant powered by Servv RMS"
                  className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-white/70 text-xs mb-1">Powered by Servv RMS</div>
                  <div className="text-white font-bold text-lg">Nairobi Eats — Karen Branch</div>
                </div>
              </div>

              {/* Floating — daily revenue */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -left-6 top-16 bg-white p-4 rounded-xl shadow-card border border-gray-100 flex items-center gap-3">
                <div className="w-11 h-11 bg-brand-teal/10 rounded-full flex items-center justify-center text-brand-teal">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Daily Revenue</div>
                  <div className="text-lg font-bold text-brand-navy">RWF 4,250,000</div>
                  <div className="text-xs text-green-600 font-semibold">+18% vs yesterday</div>
                </div>
              </motion.div>

              {/* Floating — orders */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-4 bottom-24 bg-white p-4 rounded-xl shadow-card border border-gray-100 flex items-center gap-3">
                <div className="w-11 h-11 bg-brand-coral/10 rounded-full flex items-center justify-center text-brand-coral">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">New Delivery Order</div>
                  <div className="text-sm font-bold text-brand-navy">#3312 — RWF 34,500</div>
                </div>
              </motion.div>

              {/* Floating — staff */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 2 }}
                className="absolute right-8 top-12 bg-white p-3 rounded-xl shadow-card border border-gray-100 flex items-center gap-2">
                <div className="w-9 h-9 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Staff on shift</div>
                  <div className="text-sm font-bold text-brand-navy">14 active</div>
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
              { number: '1,000+', label: 'Venues Powered' },
              { number: '5M+', label: 'Orders Processed' },
              { number: '99.9%', label: 'System Uptime' },
              { number: '30%', label: 'Avg Revenue Increase' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}>
                <div className="text-4xl md:text-5xl font-bold font-heading text-brand-coral mb-2">{stat.number}</div>
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
              Everything your restaurant needs
            </h2>
            <p className="text-xl text-gray-600">
              One integrated platform to manage every aspect of your restaurant — from first order to last report.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: UtensilsCrossed, title: 'Lightning-Fast POS', desc: 'Dine-in, takeaway, and delivery orders processed in seconds. Never keep a customer waiting.', color: 'text-orange-600 bg-orange-50' },
              { icon: Package, title: 'Smart Inventory', desc: 'Real-time stock tracking, recipe costing, and automated waste-reduction alerts.', color: 'text-teal-600 bg-teal-50' },
              { icon: Users, title: 'Staff & Scheduling', desc: 'Manage shifts, payroll, and performance — all from one dashboard.', color: 'text-blue-600 bg-blue-50' },
              { icon: ShoppingBag, title: 'Online Ordering', desc: 'Integrated delivery and online ordering with major platforms across Africa.', color: 'text-purple-600 bg-purple-50' },
              { icon: BarChart3, title: 'Actionable Analytics', desc: "Real-time dashboards that surface what's selling, what's not, and where to grow.", color: 'text-green-600 bg-green-50' },
              { icon: LayoutGrid, title: 'Table Management', desc: 'Smart floor plans, reservations, and wait-list management for a seamless guest flow.', color: 'text-rose-600 bg-rose-50' },
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
                <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-brand-coral transition-colors">{feature.title}</h3>
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
              { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80', alt: 'Fine dining restaurant', span: 'md:col-span-2 md:row-span-2' },
              { src: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80', alt: 'Outdoor restaurant', span: '' },
              { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=600&q=80', alt: 'Restaurant kitchen', span: '' },
              { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80', alt: 'Restaurant bar', span: '' },
              { src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=600&q=80', alt: 'Restaurant ambiance', span: '' },
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
            <h2 className="text-4xl font-bold font-heading text-brand-navy mb-4">Up and running in days, not months</h2>
            <p className="text-xl text-gray-600">We handle the setup — you focus on your guests.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gray-200" />
            {[
              { step: '1', icon: Zap, title: 'Sign Up', desc: 'Create your account and tell us about your restaurant.' },
              { step: '2', icon: Package, title: 'Menu Setup', desc: 'We import your menu and configure your floor plan.' },
              { step: '3', icon: Users, title: 'Staff Training', desc: '60-minute onboarding session for your whole team.' },
              { step: '4', icon: TrendingUp, title: 'Go Live', desc: 'Start serving — with live support on your first day.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-brand-coral/10 border-2 border-brand-coral/30 flex items-center justify-center text-brand-coral mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="absolute top-0 right-0 w-6 h-6 bg-brand-coral rounded-full text-white text-xs font-bold flex items-center justify-center">{item.step}</div>
                <h3 className="text-lg font-bold font-heading mb-2 text-brand-navy">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SERVV RMS — dark section */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-coral/10 to-transparent" />
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold font-heading mb-6">
                Built for Africa's hospitality reality
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                We didn't import a Western solution and call it done. Servv RMS is purpose-built for the African market — handling local payment methods, connectivity challenges, and the high energy of Africa's dining culture.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Works Offline', desc: "Keep selling even when connectivity drops. All data syncs automatically when you're back online." },
                  { title: 'Local Payment Support', desc: 'Mobile money, card, and cash — all supported and reconciled in one system.' },
                  { title: 'Multi-Currency & Multi-Location', desc: 'Manage multiple outlets across cities with consolidated reporting in RWF.' },
                  { title: '24/7 Local Support', desc: 'Our team is based in Africa and available round the clock — in your time zone.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-coral/20 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-brand-coral" />
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
                { name: 'Amani Kariuki', role: 'Owner, Nairobi Eats (Kenya)', quote: 'Servv RMS transformed our operations. Revenue is up 35% and our kitchen runs smoother than ever.' },
                { name: 'Grace Uwimana', role: 'GM, Kigali Bistro (Rwanda)', quote: 'The offline mode is a game changer. We never lose a sale, even during outages.' },
                { name: 'Kwame Asante', role: 'Executive Chef, Accra Kitchen (Ghana)', quote: 'Inventory tracking alone saved us thousands. The waste reduction has been incredible.' },
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
                    <div className="w-10 h-10 bg-brand-coral/20 rounded-full flex items-center justify-center text-brand-coral font-bold">
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
            <h3 className="text-2xl font-bold font-heading text-brand-navy mb-2">Trusted across the continent</h3>
            <p className="text-gray-500">Venues powered by Servv RMS from Cape Town to Cairo</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { country: 'Rwanda', flag: '🇷🇼', venues: '300+' },
              { country: 'Kenya', flag: '🇰🇪', venues: '280+' },
              { country: 'Uganda', flag: '🇺🇬', venues: '180+' },
              { country: 'Tanzania', flag: '🇹🇿', venues: '120+' },
              { country: 'Ghana', flag: '🇬🇭', venues: '80+' },
              { country: 'Nigeria', flag: '🇳🇬', venues: '60+' },
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
                  <div className="text-xs text-gray-500">{c.venues} venues</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-coral relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            Ready to transform your restaurant?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join over 1,000 venues across Africa already running on Servv RMS.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white hover:bg-gray-100 text-brand-coral font-bold px-10 py-5 rounded-xl transition-colors text-xl gap-2 shadow-lg">
            Get Started Today <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}

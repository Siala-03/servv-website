import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, RefreshCw, BadgeDollarSign, CheckCircle2, ArrowRight } from 'lucide-react';

export function OnlineOrdering() {
  return (
    <div className="w-full">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1920&q=80" alt="Online food ordering" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-purple-300 font-semibold text-sm mb-6">
              <Globe className="w-4 h-4" /> Online Ordering
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold font-heading text-white leading-[1.08] mb-6">
              Own Your<br /><span className="text-purple-400">Online Orders.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-lg">Branded ordering. Delivery app aggregation. Zero commissions on direct orders.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg text-center">Start Free Trial</Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg border border-white/20 text-center">Request Demo</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading text-brand-navy text-center mb-16">Every Order, One Dashboard</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: 'Branded Site', desc: 'Your brand, your data, your revenue.', image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=400&q=80' },
              { icon: Smartphone, title: 'Delivery Apps', desc: 'UberEats, Glovo & more in one place.', image: 'https://images.unsplash.com/photo-1729860649963-d94cc3f5f5ca?auto=format&fit=crop&w=400&q=80' },
              { icon: RefreshCw, title: 'Real-Time Sync', desc: 'Orders flow straight to POS & kitchen.', image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?auto=format&fit=crop&w=400&q=80' },
              { icon: BadgeDollarSign, title: 'Zero Commission', desc: 'Keep 100% on direct orders.', image: 'https://images.unsplash.com/photo-1556742205-e10c9486e506?auto=format&fit=crop&w=400&q=80' },
            ].map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-soft border border-gray-100 group hover:shadow-card transition-all">
                <div className="h-40 overflow-hidden"><img src={b.image} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                <div className="p-5">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-purple-50 text-purple-600"><b.icon className="w-5 h-5" /></div>
                  <h3 className="font-bold font-heading text-brand-navy mb-1">{b.title}</h3>
                  <p className="text-gray-500 text-sm">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-0.5 bg-white/10" />
            {[
              { step: '1', title: 'Connect', desc: 'Link delivery apps or launch your branded site.' },
              { step: '2', title: 'Receive', desc: 'All orders appear in your POS automatically.' },
              { step: '3', title: 'Fulfill', desc: 'Kitchen gets the ticket. Customer gets the food.' },
            ].map((s, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-white text-2xl font-bold mb-6 border-4 border-brand-navy">{s.step}</div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-3xl font-bold font-heading text-brand-navy mb-4">Your Brand, Your Channel</h3>
              <p className="text-gray-600 mb-6">Launch a custom ordering site in minutes. No commissions, no middlemen.</p>
              <ul className="space-y-3">
                {['Custom branding & domain', 'Built-in loyalty rewards', 'Promo codes & discounts', 'Customer data you own'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" /><span className="text-gray-700 text-sm">{item}</span></li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80" alt="Food delivery" className="rounded-2xl shadow-card" />
            </motion.div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1547023717-d4a4e04021e5?auto=format&fit=crop&w=800&q=80" alt="All apps one screen" className="rounded-2xl shadow-card" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold font-heading text-brand-navy mb-4">All Apps, One Screen</h3>
              <p className="text-gray-600 mb-6">UberEats, Glovo, Bolt Food — every order lands in the same queue.</p>
              <ul className="space-y-3">
                {['Unified order dashboard', 'Auto-accept or manual review', 'Menu sync across platforms', 'Real-time delivery tracking'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" /><span className="text-gray-700 text-sm">{item}</span></li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1920&q=80" alt="Ordering" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-coral/90" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold font-heading text-white mb-6">Stop Losing Revenue to Commissions</h2>
          <p className="text-xl text-white/90 mb-10">Launch your branded ordering channel today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-brand-coral hover:bg-gray-50 font-bold px-10 py-4 rounded-xl transition-colors text-lg shadow-lg">Get Started Free</Link>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-4 rounded-xl transition-colors text-lg border border-white/30">Talk to Sales <ArrowRight className="w-5 h-5 inline-block ml-2" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

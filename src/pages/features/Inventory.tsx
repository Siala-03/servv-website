import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Package,
  AlertTriangle,
  Calculator,
  Trash2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export function Inventory() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1920&q=80"
            alt="Kitchen inventory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand-teal font-semibold text-sm mb-6">
              <Package className="w-4 h-4" /> Inventory Management
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold font-heading text-white leading-[1.08] mb-6">
              Never Run Out.
              <br />
              <span className="text-brand-teal">Never Over-Order.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-lg">
              Real-time stock tracking, automated alerts, and recipe-level costing — all connected to your POS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-brand-teal hover:bg-teal-400 text-brand-navy font-bold px-8 py-4 rounded-xl transition-colors text-lg text-center">
                Start Free Trial
              </Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg border border-white/20 text-center">
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading text-brand-navy text-center mb-16">
            Take Control of Your Costs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Package, title: 'Live Stock Tracking', desc: 'Updates instantly with every POS transaction.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80' },
              { icon: AlertTriangle, title: 'Smart Alerts', desc: 'Get notified before you run out.', image: 'https://images.unsplash.com/photo-1728044849321-4cbffc50cc1d?auto=format&fit=crop&w=400&q=80' },
              { icon: Calculator, title: 'Recipe Costing', desc: 'Know exact food cost per dish.', image: 'https://images.unsplash.com/photo-1640583342012-4622f31b650d?auto=format&fit=crop&w=400&q=80' },
              { icon: Trash2, title: 'Waste Tracking', desc: 'Log spoilage and cut losses.', image: 'https://images.unsplash.com/photo-1628171577082-2c1db571c9c4?auto=format&fit=crop&w=400&q=80' },
            ].map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-soft border border-gray-100 group hover:shadow-card transition-all">
                <div className="h-40 overflow-hidden">
                  <img src={b.image} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-teal-50 text-teal-600">
                    <b.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold font-heading text-brand-navy mb-1">{b.title}</h3>
                  <p className="text-gray-500 text-sm">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-0.5 bg-white/10" />
            {[
              { step: '1', title: 'Add Ingredients', desc: 'Input raw items, vendors, and unit costs.' },
              { step: '2', title: 'Build Recipes', desc: 'Link ingredients to menu items for auto-tracking.' },
              { step: '3', title: 'Monitor & Reorder', desc: 'Watch stock drop in real-time. One-click POs.' },
            ].map((s, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-teal flex items-center justify-center text-brand-navy text-2xl font-bold mb-6 border-4 border-brand-navy">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-3xl font-bold font-heading text-brand-navy mb-4">Ingredient-Level Tracking</h3>
              <p className="text-gray-600 mb-6">Track the bun, the patty, and the cheese — not just the burger. Recipe management deducts exact quantities with every sale.</p>
              <ul className="space-y-3">
                {['Map ingredients to menu items', 'Track sub-recipes & batch prep', 'Calculate profit margins per dish', 'Account for modifiers & add-ons'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" alt="Fresh ingredients" className="rounded-2xl shadow-card" />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" alt="Warehouse inventory" className="rounded-2xl shadow-card" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold font-heading text-brand-navy mb-4">Automated Purchasing</h3>
              <p className="text-gray-600 mb-6">Set par levels and let Servv generate purchase orders when stock runs low. No more guessing.</p>
              <ul className="space-y-3">
                {['Custom low-stock thresholds', 'Multi-vendor management', 'One-click purchase orders', 'Track receiving & price changes'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1920&q=80" alt="Kitchen" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-coral/90" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold font-heading text-white mb-6">Stop Wasting. Start Tracking.</h2>
          <p className="text-xl text-white/90 mb-10">See your true food costs from day one.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-brand-coral hover:bg-gray-50 font-bold px-10 py-4 rounded-xl transition-colors text-lg shadow-lg">
              Start Free Trial
            </Link>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-10 py-4 rounded-xl transition-colors text-lg border border-white/30">
              Talk to Sales <ArrowRight className="w-5 h-5 inline-block ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wine, Package, Clock, CreditCard, Music, ArrowRight, Star, Quote } from 'lucide-react';

export function BarsLounges() {
  return (
    <div className="w-full">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=1920&q=80" alt="Bar atmosphere" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-purple-300 font-semibold text-sm mb-6">
              <Wine className="w-4 h-4" /> Bars & Lounges
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold font-heading text-white leading-[1.08] mb-6">
              Pour Faster.<br /><span className="text-purple-400">Profit More.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-lg">Fast tabs, happy hour automation, liquor inventory, and speed screens built for nightlife.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg text-center">Get a Free Demo</Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg border border-white/20 text-center">Start Free Trial</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading text-brand-navy text-center mb-4">Bar Problems, Solved</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">Common nightlife headaches — and how Servv fixes them.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: CreditCard, problem: 'Slow tab management', solution: 'Open, split, and close tabs in seconds with pre-auth.' },
              { icon: Package, problem: 'Liquor shrinkage', solution: 'Track pours at the bottle level. Spot variance instantly.' },
              { icon: Clock, problem: 'Happy hour complexity', solution: 'Auto-apply time-based pricing. No manual discounts.' },
              { icon: Music, problem: 'Event night chaos', solution: 'Speed screens and pre-built menus for high-volume nights.' },
            ].map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-soft hover:shadow-card transition-all flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                  <p.icon className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-1">{p.problem}</h3>
                  <p className="text-gray-600 text-sm">{p.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading text-brand-navy text-center mb-16">Features for Nightlife</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Tab Management', link: '/features/pos', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80' },
              { title: 'Liquor Inventory', link: '/features/inventory', image: 'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?auto=format&fit=crop&w=400&q=80' },
              { title: 'Happy Hour Pricing', link: '/features/pos', image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=400&q=80' },
              { title: 'Pre-Auth Cards', link: '/features/pos', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80' },
              { title: 'Event Management', link: '/features/table-management', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80' },
              { title: 'Speed Screens', link: '/features/pos', image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=400&q=80' },
            ].map((f, i) => (
              <Link key={i} to={f.link}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="group relative h-48 rounded-2xl overflow-hidden">
                  <img src={f.image} alt={f.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold font-heading">{f.title}</h3>
                    <span className="text-purple-300 text-sm font-medium flex items-center gap-1 mt-1">Learn more <ArrowRight className="w-3 h-3" /></span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-brand-gray p-10 rounded-3xl text-center relative">
            <Quote className="w-10 h-10 text-gray-200 mx-auto mb-4" />
            <div className="flex justify-center gap-1 mb-6 text-amber-400">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">"The handheld devices let bartenders open tabs from anywhere on the floor. Friday nights run 30% smoother."</p>
            <div className="flex items-center justify-center gap-3">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80" alt="Marcus Chen" className="w-12 h-12 rounded-full object-cover" />
              <div className="text-left">
                <div className="font-bold text-brand-navy text-sm">Marcus Chen</div>
                <div className="text-xs text-gray-500">Owner, The Velvet Room, Nairobi</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1920&q=80" alt="Bar" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-coral/90" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold font-heading text-white mb-6">Ready to Speed Up Your Bar?</h2>
          <p className="text-xl text-white/90 mb-10">See Servv in action for bars and lounges.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-brand-coral hover:bg-gray-50 font-bold px-10 py-4 rounded-xl transition-colors text-lg shadow-lg">Get a Free Demo</Link>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-4 rounded-xl transition-colors text-lg border border-white/30">Start Free Trial <ArrowRight className="w-5 h-5 inline-block ml-2" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

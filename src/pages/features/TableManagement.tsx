import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LayoutGrid, Activity, CalendarCheck, ListOrdered, CheckCircle2, ArrowRight } from 'lucide-react';

export function TableManagement() {
  return (
    <div className="w-full">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?auto=format&fit=crop&w=1920&q=80" alt="Restaurant tables" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-amber-300 font-semibold text-sm mb-6">
              <LayoutGrid className="w-4 h-4" /> Table Management
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold font-heading text-white leading-[1.08] mb-6">
              Fill Every Seat.<br /><span className="text-amber-400">Turn Tables Faster.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-lg">Visual floor plans, live status tracking, reservations, and smart waitlist management.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg text-center">Start Free Trial</Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg border border-white/20 text-center">Request Demo</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading text-brand-navy text-center mb-16">Maximize Your Floor</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: LayoutGrid, title: 'Visual Floor Plans', desc: 'Drag-and-drop layout editor.', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80' },
              { icon: Activity, title: 'Live Status', desc: 'See open, occupied, and dirty tables.', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80' },
              { icon: CalendarCheck, title: 'Reservations', desc: 'Online booking with auto-confirmation.', image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?auto=format&fit=crop&w=400&q=80' },
              { icon: ListOrdered, title: 'Smart Waitlist', desc: 'SMS alerts when tables are ready.', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80' },
            ].map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-soft border border-gray-100 group hover:shadow-card transition-all">
                <div className="h-40 overflow-hidden"><img src={b.image} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                <div className="p-5">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-amber-50 text-amber-600"><b.icon className="w-5 h-5" /></div>
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
              { step: '1', title: 'Design', desc: 'Build your floor plan with our visual editor.' },
              { step: '2', title: 'Manage', desc: 'Track table status and timing in real time.' },
              { step: '3', title: 'Optimize', desc: 'Turn data into faster turns and happier guests.' },
            ].map((s, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-white text-2xl font-bold mb-6 border-4 border-brand-navy">{s.step}</div>
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
              <h3 className="text-3xl font-bold font-heading text-brand-navy mb-4">Interactive Floor Plans</h3>
              <p className="text-gray-600 mb-6">See your entire restaurant at a glance. Color-coded tables show status, timing, and server assignments.</p>
              <ul className="space-y-3">
                {['Drag-and-drop table editor', 'Color-coded status indicators', 'Server section assignments', 'Multi-floor support'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /><span className="text-gray-700 text-sm">{item}</span></li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" alt="Restaurant interior" className="rounded-2xl shadow-card" />
            </motion.div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" alt="Busy restaurant" className="rounded-2xl shadow-card" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold font-heading text-brand-navy mb-4">Waitlist & Reservations</h3>
              <p className="text-gray-600 mb-6">Guests book online. Walk-ins join the waitlist. Everyone gets an SMS when their table is ready.</p>
              <ul className="space-y-3">
                {['Online reservation widget', 'Estimated wait times', 'SMS notifications', 'Guest history & preferences'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /><span className="text-gray-700 text-sm">{item}</span></li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80" alt="Dining" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-coral/90" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold font-heading text-white mb-6">More Covers. Less Wait.</h2>
          <p className="text-xl text-white/90 mb-10">Optimize every seat in your restaurant.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-brand-coral hover:bg-gray-50 font-bold px-10 py-4 rounded-xl transition-colors text-lg shadow-lg">Start Free Trial</Link>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-4 rounded-xl transition-colors text-lg border border-white/30">Talk to Sales <ArrowRight className="w-5 h-5 inline-block ml-2" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

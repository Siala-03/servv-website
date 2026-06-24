import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BarChart3, TrendingUp, Users, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

export function Analytics() {
  return (
    <div className="w-full">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80" alt="Analytics dashboard" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-300 font-semibold text-sm mb-6">
              <BarChart3 className="w-4 h-4" /> Analytics & Reporting
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold font-heading text-white leading-[1.08] mb-6">
              See Everything.<br /><span className="text-blue-400">Decide Faster.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-lg">Real-time dashboards, sales breakdowns, labor reports, and custom exports — all in one place.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg text-center">Start Free Trial</Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg border border-white/20 text-center">Request Demo</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading text-brand-navy text-center mb-16">Data That Drives Revenue</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BarChart3, title: 'Real-Time Dashboards', desc: 'Live sales, covers, and revenue at a glance.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80' },
              { icon: TrendingUp, title: 'Sales Analytics', desc: 'Best sellers, peak hours, revenue trends.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80' },
              { icon: Users, title: 'Labor Reports', desc: 'Cost per hour, overtime, productivity.', image: 'https://images.unsplash.com/photo-1745433921722-26dd28b318d9?auto=format&fit=crop&w=400&q=80' },
              { icon: FileText, title: 'Custom Reports', desc: 'Build and schedule any report you need.', image: 'https://images.unsplash.com/photo-1713453018677-f5ad769c687a?auto=format&fit=crop&w=400&q=80' },
            ].map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-soft border border-gray-100 group hover:shadow-card transition-all">
                <div className="h-40 overflow-hidden"><img src={b.image} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                <div className="p-5">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-blue-50 text-blue-600"><b.icon className="w-5 h-5" /></div>
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
              { step: '1', title: 'Connect', desc: 'Data flows from POS, inventory & staff tools.' },
              { step: '2', title: 'Visualize', desc: 'Dashboards update in real time.' },
              { step: '3', title: 'Act', desc: 'Export, share, or let Servv IQ recommend actions.' },
            ].map((s, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold mb-6 border-4 border-brand-navy">{s.step}</div>
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
              <h3 className="text-3xl font-bold font-heading text-brand-navy mb-4">Menu Engineering</h3>
              <p className="text-gray-600 mb-6">See which items drive profit vs. which just sell volume. Optimize your menu with data, not gut feeling.</p>
              <ul className="space-y-3">
                {['Product mix analysis', 'Profit margin per item', 'Category performance', 'Price optimization suggestions'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /><span className="text-gray-700 text-sm">{item}</span></li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Analytics dashboard" className="rounded-2xl shadow-card" />
            </motion.div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1647511256696-7f0dfd46a6a6?auto=format&fit=crop&w=800&q=80" alt="Labor cost optimization" className="rounded-2xl shadow-card" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold font-heading text-brand-navy mb-4">Labor Cost Optimization</h3>
              <p className="text-gray-600 mb-6">Track labor as a percentage of revenue in real time. Spot overstaffing before it eats your margins.</p>
              <ul className="space-y-3">
                {['Labor-to-revenue ratio', 'Overtime tracking & alerts', 'Shift productivity scores', 'Scheduled vs. actual hours'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /><span className="text-gray-700 text-sm">{item}</span></li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80" alt="Data" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-coral/90" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold font-heading text-white mb-6">Stop Guessing. Start Knowing.</h2>
          <p className="text-xl text-white/90 mb-10">Real-time insights from day one.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-brand-coral hover:bg-gray-50 font-bold px-10 py-4 rounded-xl transition-colors text-lg shadow-lg">Start Free Trial</Link>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-4 rounded-xl transition-colors text-lg border border-white/30">Talk to Sales <ArrowRight className="w-5 h-5 inline-block ml-2" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

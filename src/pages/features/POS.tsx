import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Zap,
  CreditCard,
  WifiOff,
  Settings2,
  CheckCircle2,
  MonitorSmartphone,
} from 'lucide-react';

export function POS() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-brand-navy/40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-orange-300 font-semibold mb-6 backdrop-blur-sm">
              <MonitorSmartphone className="w-5 h-5" /> Point of Sale
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold font-heading text-white leading-[1.1] mb-6">
              Sell Faster. <span className="text-orange-400">Sell Smarter.</span>
            </h1>
            <p className="text-xl text-white/80 mb-10">
              Process every order in seconds -- dine-in, takeaway, and delivery from one screen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-brand-coral hover:bg-brand-coral-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors text-center text-lg shadow-soft"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-4 rounded-xl transition-colors text-center text-lg backdrop-blur-sm"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-heading text-brand-navy mb-4">
              Everything for the front of house
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'Speed & Efficiency',
                desc: 'Process orders 3x faster with a tap-friendly interface.',
                img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80',
              },
              {
                icon: CreditCard,
                title: 'Flexible Payments',
                desc: 'Tap, chip, swipe, mobile wallets, and split checks.',
                img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=400&q=80',
              },
              {
                icon: WifiOff,
                title: 'Offline Mode',
                desc: 'Keep selling even when your internet drops.',
                img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80',
              },
              {
                icon: Settings2,
                title: 'Custom Menus',
                desc: 'Modifiers, combos, coursing, and time-based menus.',
                img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80',
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-gray-100 overflow-hidden shadow-card group"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={benefit.img}
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-3">
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-heading mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-heading mb-4">
              How it works
            </h2>
            <p className="text-gray-400 text-lg">
              Up and running in minutes, not days.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-0.5 bg-white/10" />
            {[
              {
                step: '1',
                title: 'Set up your menu',
                desc: 'Import or build your menu in our drag-and-drop editor.',
              },
              {
                step: '2',
                title: 'Take orders anywhere',
                desc: 'Counter terminals, handhelds, or tablets -- your choice.',
              },
              {
                step: '3',
                title: 'Process payments',
                desc: 'Close tickets instantly with integrated payment processing.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-2xl font-bold mb-6 border-4 border-brand-navy">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE DETAILS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {/* Detail 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold font-heading text-brand-navy mb-6">
                Advanced order management
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Handle complex scenarios with ease -- our POS adapts to your workflow.
              </p>
              <ul className="space-y-4">
                {[
                  'Open tabs and pre-authorized cards',
                  'Split checks by item, seat, or amount',
                  'Hold and fire courses to kitchen',
                  'Quick reorder for rounds of drinks',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-card"
            >
              <img
                src="https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=800&q=80"
                alt="Payment processing"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          </div>

          {/* Detail 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-card"
            >
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
                alt="Multi-device POS"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold font-heading text-brand-navy mb-6">
                Multi-device sync
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Start a tab at the bar, add from the floor, close at the host stand. Everything syncs instantly.
              </p>
              <ul className="space-y-4">
                {[
                  'Real-time syncing across all devices',
                  'Cloud-based architecture',
                  'Hardware-agnostic setup',
                  'Instant menu updates across locations',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-brand-coral/85" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold font-heading text-white mb-6">
            Ready to speed up your service?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join thousands of venues using Servv POS to streamline operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-coral hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-colors text-lg shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

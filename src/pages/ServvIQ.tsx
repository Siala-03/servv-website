import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BrainCircuit,
  TrendingUp,
  Zap,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  LineChart,
  Sparkles,
  Bot,
} from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function ServvIQ() {
  return (
    <div className="w-full bg-brand-navy text-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image with heavy overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80"
            alt="AI technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/85" />
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-teal/15 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-coral/10 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal font-semibold text-sm mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                New Release
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold font-heading leading-[1.05] mb-6">
                Meet Servv IQ.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-400">
                  AI That Acts.
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
                Your real-time data, surfaced as insights and
                actions — before you even ask.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-brand-teal hover:bg-teal-400 text-brand-navy font-bold px-8 py-4 rounded-xl transition-colors text-lg shadow-[0_0_30px_rgba(46,196,182,0.3)]"
                >
                  Schedule a Demo <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg border border-white/20"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>

            {/* Hero visual — dashboard mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-teal/20 via-blue-500/10 to-brand-coral/10 rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="Analytics dashboard"
                className="relative rounded-2xl border border-white/10 shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 border-y border-white/10 bg-black/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-bold font-heading text-center mb-14"
          >
            From raw data to real action in three steps
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[17%] right-[17%] h-0.5 bg-gradient-to-r from-brand-teal/0 via-brand-teal/50 to-brand-teal/0" />

            {[
              {
                step: '1',
                icon: <LineChart className="w-6 h-6" />,
                title: 'Connects',
                desc: 'Ingests live data from sales, inventory, staff, weather, and events.',
              },
              {
                step: '2',
                icon: <BrainCircuit className="w-6 h-6" />,
                title: 'Analyzes',
                desc: 'Spots hidden patterns and predicts future trends with high accuracy.',
              },
              {
                step: '3',
                icon: <Zap className="w-6 h-6" />,
                title: 'Acts',
                desc: 'Recommends optimizations and automates routine tasks instantly.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-brand-navy flex items-center justify-center text-brand-teal mb-5 border border-brand-teal/40 shadow-[0_0_20px_rgba(46,196,182,0.15)]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI STATS */}
      <section className="py-20 bg-black/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-bold font-heading text-center mb-14"
          >
            The numbers speak for themselves
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: '25%', label: 'Less Food Waste', color: 'brand-teal' },
              { stat: '15%', label: 'Labor Cost Savings', color: 'brand-coral' },
              { stat: '20%', label: 'Revenue Increase', color: 'blue-400' },
              { stat: '3x', label: 'Faster Decisions', color: 'purple-400' },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/[0.08] transition-colors"
              >
                <div className={`text-4xl md:text-5xl font-extrabold font-heading text-${item.color} mb-2`}>
                  {item.stat}
                </div>
                <div className="text-gray-400 font-medium text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {/* Capability 1 — Smart Insights */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-5">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Smart Insights
              </h3>
              <p className="text-lg text-gray-400 mb-6">
                Surfaces trending items, underperformers, and optimal pricing strategies automatically.
              </p>
              <ul className="space-y-3">
                {[
                  'Menu engineering recommendations',
                  'Pricing optimization suggestions',
                  'Customer behavior analysis',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-[#111827] border border-gray-800 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-800">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span className="font-bold text-gray-300 text-sm">Insight Generated</span>
                  <span className="ml-auto text-xs text-gray-500">Just now</span>
                </div>
                <h4 className="text-lg font-bold mb-2">Price Optimization Opportunity</h4>
                <p className="text-gray-400 text-sm mb-4">
                  "Truffle Fries" orders up 45% over the last 3 weekends. Demand is highly inelastic.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex justify-between items-center gap-4">
                  <div>
                    <div className="text-xs text-blue-400 font-medium mb-1">Recommendation</div>
                    <div className="font-bold text-sm">Increase price RWF 10,000 &rarr; RWF 12,500</div>
                  </div>
                  <button className="shrink-0 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors text-sm">
                    Apply
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Capability 2 — Predictive Forecasting */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-teal/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Data charts and forecasting"
                  className="w-full h-56 object-cover"
                />
                <div className="bg-[#111827] p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-gray-300 text-sm">Demand Forecast: Friday</span>
                    <span className="flex items-center gap-1.5 text-xs text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">
                      <TrendingUp className="w-3.5 h-3.5" /> High Confidence
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-800/50 p-3 rounded-xl">
                      <div className="text-xs text-gray-400 mb-1">Expected Covers</div>
                      <div className="text-xl font-bold">
                        340 <span className="text-xs text-brand-teal font-normal">+15%</span>
                      </div>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-xl">
                      <div className="text-xs text-gray-400 mb-1">Staffing Need</div>
                      <div className="text-xl font-bold">
                        +2 <span className="text-xs text-gray-400 font-normal">Servers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="order-1 lg:order-2" {...fadeUp}>
              <div className="w-12 h-12 bg-brand-teal/20 rounded-xl flex items-center justify-center text-brand-teal mb-5">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Predictive Forecasting
              </h3>
              <p className="text-lg text-gray-400 mb-6">
                Predicts busy periods using historical data, weather, and local events — so you are prepared before the rush.
              </p>
              <ul className="space-y-3">
                {[
                  'Hyper-local weather integration',
                  'Event and holiday awareness',
                  'Labor scheduling recommendations',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Capability 3 — Automated Actions */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <div className="w-12 h-12 bg-brand-coral/20 rounded-xl flex items-center justify-center text-brand-coral mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Automated Actions
              </h3>
              <p className="text-lg text-gray-400 mb-6">
                Set rules that fire automatically: 86 items when stock drops, adjust pricing during happy hour, trigger reorders.
              </p>
              <ul className="space-y-3">
                {[
                  'Auto-86 items across all platforms',
                  'Dynamic pricing rules',
                  'Automated vendor purchase orders',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-coral/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-[#111827] border border-gray-800 rounded-2xl p-6 shadow-2xl">
                <div className="font-bold text-sm mb-5">Automation Rule Builder</div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-xl border border-gray-700">
                    <span className="w-12 font-bold text-gray-500 text-sm">IF</span>
                    <span className="flex-grow bg-gray-900 px-3 py-2 rounded border border-gray-700 text-xs">
                      Inventory: Avocado &lt; 5 units
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-brand-coral/10 p-3 rounded-xl border border-brand-coral/30">
                    <span className="w-12 font-bold text-brand-coral text-sm">THEN</span>
                    <div className="flex-grow space-y-2">
                      <div className="bg-gray-900 px-3 py-2 rounded border border-gray-700 text-xs">
                        86 "Avocado Toast" on POS &amp; Online
                      </div>
                      <div className="bg-gray-900 px-3 py-2 rounded border border-gray-700 text-xs">
                        Send SMS alert to Manager
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end pt-1">
                    <span className="px-3 py-1.5 bg-brand-coral/20 border border-brand-coral/30 rounded-lg text-xs font-bold text-brand-coral">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Capability 4 — Natural Language Queries */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-[#111827] border border-gray-800 rounded-2xl p-5 shadow-2xl flex flex-col h-[380px]">
                <div className="flex-grow space-y-4 overflow-hidden">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-700 shrink-0" />
                    <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none text-sm text-gray-300 max-w-[80%]">
                      Best selling item last Friday night?
                    </div>
                  </div>
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center shrink-0">
                      <BrainCircuit className="w-4 h-4 text-brand-navy" />
                    </div>
                    <div className="bg-brand-teal/20 border border-brand-teal/30 p-3 rounded-2xl rounded-tr-none text-sm text-white max-w-[80%]">
                      <strong>Spicy Margarita</strong> — 142 sold, RWF 2.1M revenue. That is 22% above your Friday average.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-700 shrink-0" />
                    <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none text-sm text-gray-300 max-w-[80%]">
                      Compare this month's labor cost to last year.
                    </div>
                  </div>
                </div>
                <div className="mt-4 relative">
                  <input
                    type="text"
                    placeholder="Ask Servv IQ anything..."
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-brand-teal"
                    readOnly
                  />
                  <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                </div>
              </div>
            </motion.div>

            <motion.div className="order-1 lg:order-2" {...fadeUp}>
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-5">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Natural Language Queries
              </h3>
              <p className="text-lg text-gray-400 mb-6">
                Skip the spreadsheets. Ask questions in plain English and get instant, data-backed answers.
              </p>
              <ul className="space-y-3">
                {[
                  'Conversational interface',
                  'Instant data visualization',
                  'Works on mobile',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISUAL FEATURE GRID */}
      <section className="py-20 border-y border-white/10 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-bold font-heading text-center mb-4"
          >
            Built for hospitality, powered by AI
          </motion.h2>
          <motion.p
            {...fadeUp}
            className="text-gray-400 text-center mb-14 max-w-2xl mx-auto"
          >
            Every feature is designed around real restaurant and hotel operations.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: 'Revenue Analytics',
                desc: 'Track sales, margins, and growth in real time.',
                accent: 'brand-teal',
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: 'Demand Forecasting',
                desc: 'Predict covers and prep needs days ahead.',
                accent: 'blue-400',
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: 'Menu Engineering',
                desc: 'Find stars, puzzles, and dogs in your menu mix.',
                accent: 'brand-coral',
              },
              {
                icon: <Bot className="w-6 h-6" />,
                title: 'AI Automations',
                desc: 'Rules that run your back-of-house while you sleep.',
                accent: 'purple-400',
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: 'Chat Interface',
                desc: 'Ask anything in plain language, get instant answers.',
                accent: 'brand-teal',
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'Real-Time Alerts',
                desc: 'Know the moment something needs attention.',
                accent: 'brand-coral',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-colors group"
              >
                <div className={`w-11 h-11 bg-${item.accent}/20 rounded-xl flex items-center justify-center text-${item.accent} mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF IMAGE BAND */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <motion.div
              {...fadeUp}
              className="relative rounded-2xl overflow-hidden min-h-[320px]"
            >
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
                alt="Busy restaurant"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-2xl font-bold font-heading mb-2">
                  "We cut waste by 30% in the first month."
                </p>
                <p className="text-gray-300 text-sm">Operations Manager, Kigali</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden min-h-[320px]"
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="Analytics dashboard"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-2xl font-bold font-heading mb-2">
                  "Like having a data analyst on staff 24/7."
                </p>
                <p className="text-gray-300 text-sm">F&B Director, Nairobi</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRICING NOTE */}
      <section className="py-10 text-center">
        <p className="text-gray-400 text-sm">
          Included in the Enterprise plan. Available as an add-on — contact us for pricing.{' '}
          <Link to="/pricing" className="text-brand-teal hover:underline">
            View pricing details &rarr;
          </Link>
        </p>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/15 via-blue-500/10 to-brand-coral/10" />
        <div className="absolute inset-0 bg-brand-navy/60" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-6">
              Ready to see AI in action?
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
              Book a live demo and see how Servv IQ transforms your data into decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-brand-teal hover:bg-teal-400 text-brand-navy font-bold px-10 py-5 rounded-xl transition-colors text-lg shadow-[0_0_30px_rgba(46,196,182,0.3)]"
              >
                Request a Demo <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/rms"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-10 py-5 rounded-xl transition-colors text-lg border border-white/20"
              >
                Explore the Platform
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

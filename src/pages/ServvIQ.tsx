import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BrainCircuit,
  TrendingUp,
  Zap,
  MessageSquare,
  ArrowRight,
  CheckCircle2 } from
'lucide-react';
export function ServvIQ() {
  return (
    <div className="w-full bg-brand-navy text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal/10 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-coral/10 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="max-w-4xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal font-semibold mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
              2025 • New Release
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-[1.1] mb-8">
              Meet Servv IQ. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-400">
                The AI Assistant That Takes Action.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              Powered by your real-time business data, Servv IQ doesn't just
              show you what's happening — it anticipates what's next and helps
              you act on it instantly.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-brand-teal hover:bg-teal-400 text-brand-navy font-bold px-8 py-4 rounded-xl transition-colors text-lg shadow-[0_0_30px_rgba(46,196,182,0.3)]">
              
              Schedule a Free Demo <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 border-y border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Servv IQ taps into your data and pulls insights that matter
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-brand-teal/0 via-brand-teal/50 to-brand-teal/0"></div>
            {[
            {
              step: '1',
              title: 'Connects',
              desc: 'Ingests live data from sales, inventory, staff, weather, and local events.'
            },
            {
              step: '2',
              title: 'Analyzes',
              desc: 'Identifies hidden patterns and predicts future trends with high accuracy.'
            },
            {
              step: '3',
              title: 'Acts',
              desc: 'Recommends optimizations and automates routine operational tasks.'
            }].
            map((item, i) =>
            <div
              key={i}
              className="relative z-10 flex flex-col items-center text-center">
              
                <div className="w-16 h-16 rounded-full bg-brand-navy flex items-center justify-center text-brand-teal text-2xl font-bold mb-6 border border-brand-teal shadow-[0_0_15px_rgba(46,196,182,0.2)]">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-40">
          {/* Capability 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}>
              
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Smart Insights
              </h3>
              <p className="text-xl text-gray-400 mb-8">
                Servv IQ automatically surfaces hidden trends in your data. It
                tells you which menu items are trending, which are
                underperforming, and suggests optimal pricing strategies.
              </p>
              <ul className="space-y-4">
                {[
                'Menu engineering recommendations',
                'Pricing optimization suggestions',
                'Customer behavior analysis'].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                )}
              </ul>
            </motion.div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative bg-[#111827] border border-gray-800 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-800">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                  <div className="font-bold text-gray-300">
                    Insight Generated
                  </div>
                  <div className="ml-auto text-xs text-gray-500">Just now</div>
                </div>
                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-2">
                    Price Optimization Opportunity
                  </h4>
                  <p className="text-gray-400">
                    "Truffle Fries" have seen a 45% increase in orders over the
                    last 3 weekends. Demand is highly inelastic.
                  </p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex justify-between items-center">
                  <div>
                    <div className="text-sm text-blue-400 font-medium mb-1">
                      Recommendation
                    </div>
                    <div className="font-bold">
                      Increase price from RWF 10,000 to RWF 12,500
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors text-sm">
                    Apply Change
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Capability 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/20 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative bg-[#111827] border border-gray-800 rounded-3xl p-8 shadow-2xl">
                <div className="flex justify-between items-center mb-8">
                  <div className="font-bold text-gray-300">
                    Demand Forecast: Friday
                  </div>
                  <div className="flex items-center gap-2 text-sm text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">
                    <TrendingUp className="w-4 h-4" /> High Confidence
                  </div>
                </div>
                <div className="h-48 relative border-b border-l border-gray-800 mb-6">
                  {/* Abstract chart */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="none">
                    
                    <path
                      d="M0,150 Q40,140 80,100 T160,80 T240,40 T320,20"
                      fill="none"
                      stroke="#2EC4B6"
                      strokeWidth="4" />
                    
                    <path
                      d="M0,150 Q40,145 80,120 T160,110 T240,90 T320,80"
                      fill="none"
                      stroke="#4B5563"
                      strokeWidth="2"
                      strokeDasharray="5,5" />
                    
                  </svg>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-xl">
                    <div className="text-sm text-gray-400 mb-1">
                      Expected Covers
                    </div>
                    <div className="text-2xl font-bold">
                      340{' '}
                      <span className="text-sm text-brand-teal font-normal">
                        +15%
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-xl">
                    <div className="text-sm text-gray-400 mb-1">
                      Staffing Need
                    </div>
                    <div className="text-2xl font-bold">
                      +2{' '}
                      <span className="text-sm text-gray-400 font-normal">
                        Servers
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{
                opacity: 0,
                x: 20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}>
              
              <div className="w-12 h-12 bg-brand-teal/20 rounded-xl flex items-center justify-center text-brand-teal mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Predictive Forecasting
              </h3>
              <p className="text-xl text-gray-400 mb-8">
                Servv IQ predicts busy periods based on historical data, weather
                forecasts, and local events. It helps you optimize staffing and
                inventory prep before the rush hits.
              </p>
              <ul className="space-y-4">
                {[
                'Hyper-local weather integration',
                'Local event and holiday awareness',
                'Labor scheduling recommendations'].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                )}
              </ul>
            </motion.div>
          </div>

          {/* Capability 3 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}>
              
              <div className="w-12 h-12 bg-brand-coral/20 rounded-xl flex items-center justify-center text-brand-coral mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Automated Actions
              </h3>
              <p className="text-xl text-gray-400 mb-8">
                Don't just get alerts—set rules that trigger automatically.
                Servv IQ can 86 items when stock is low, adjust pricing during
                happy hours, and send reorder alerts.
              </p>
              <ul className="space-y-4">
                {[
                'Auto-86 items across all platforms',
                'Dynamic pricing rules',
                'Automated vendor purchase orders'].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                )}
              </ul>
            </motion.div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-coral/20 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative bg-[#111827] border border-gray-800 rounded-3xl p-8 shadow-2xl">
                <div className="font-bold text-lg mb-6">
                  Automation Rule Builder
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                    <div className="w-16 font-bold text-gray-500">IF</div>
                    <div className="flex-grow bg-gray-900 px-4 py-2 rounded border border-gray-700 text-sm">
                      Inventory: Avocado &lt; 5 units
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-brand-coral/10 p-4 rounded-xl border border-brand-coral/30">
                    <div className="w-16 font-bold text-brand-coral">THEN</div>
                    <div className="flex-grow space-y-2">
                      <div className="bg-gray-900 px-4 py-2 rounded border border-gray-700 text-sm">
                        86 "Avocado Toast" on POS & Online
                      </div>
                      <div className="bg-gray-900 px-4 py-2 rounded border border-gray-700 text-sm">
                        Send SMS alert to Manager
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <div className="px-4 py-2 bg-gray-800 rounded-lg text-sm font-bold text-gray-300">
                      Status: Active
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Capability 4 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative bg-[#111827] border border-gray-800 rounded-3xl p-6 shadow-2xl flex flex-col h-[400px]">
                <div className="flex-grow space-y-4 overflow-hidden">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0"></div>
                    <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none text-sm text-gray-300 max-w-[80%]">
                      What was our best selling item last Friday night?
                    </div>
                  </div>
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center flex-shrink-0">
                      <BrainCircuit className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div className="bg-brand-teal/20 border border-brand-teal/30 p-3 rounded-2xl rounded-tr-none text-sm text-white max-w-[80%]">
                      Last Friday between 5PM-11PM, your best selling item was
                      the <strong>Spicy Margarita</strong> (142 sold, RWF 2,100,000
                      revenue). This is 22% higher than your average Friday.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0"></div>
                    <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none text-sm text-gray-300 max-w-[80%]">
                      How does this month's labor cost compare to last year?
                    </div>
                  </div>
                </div>
                <div className="mt-4 relative">
                  <input
                    type="text"
                    placeholder="Ask Servv IQ anything..."
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-brand-teal" />
                  
                  <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                </div>
              </div>
            </div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{
                opacity: 0,
                x: 20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}>
              
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-6">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Natural Language Queries
              </h3>
              <p className="text-xl text-gray-400 mb-8">
                Stop digging through complex reports. Just ask Servv IQ
                questions in plain English and get instant, accurate answers
                backed by your data.
              </p>
              <ul className="space-y-4">
                {[
                'Conversational interface',
                'Instant data visualization',
                'Accessible from mobile app'].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                )}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI SECTION */}
      <section className="py-24 border-y border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
            {
              stat: '25%',
              label: 'Less Food Waste'
            },
            {
              stat: '15%',
              label: 'Labor Cost Reduction'
            },
            {
              stat: '20%',
              label: 'Revenue Increase'
            },
            {
              stat: '3x',
              label: 'Faster Decisions'
            }].
            map((item, i) =>
            <div key={i}>
                <div className="text-4xl md:text-5xl font-bold font-heading text-brand-teal mb-2">
                  {item.stat}
                </div>
                <div className="text-gray-400 font-medium">{item.label}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PRICING NOTE */}
      <section className="py-16 text-center">
        <p className="text-gray-400">
          Servv IQ is included in the Enterprise plan. Available as an add-on — contact us for RWF pricing. <br />
          <Link
            to="/pricing"
            className="text-brand-teal hover:underline mt-2 inline-block">
            
            View full pricing details →
          </Link>
        </p>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-teal/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8">
            Experience the future of hospitality intelligence
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white hover:bg-gray-100 text-brand-navy font-bold px-10 py-5 rounded-xl transition-colors text-xl">
            
            Request a Demo
          </Link>
        </div>
      </section>
    </div>);

}
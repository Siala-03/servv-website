import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Users } from
'lucide-react';
export function StaffManagement() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              className="max-w-2xl">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 font-semibold mb-6">
                <Users className="w-5 h-5" /> Staff Management
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold font-heading text-brand-navy leading-[1.1] mb-6">
                Effortless Staff <br />
                <span className="text-rose-600">Management</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Schedule shifts, track hours, manage permissions, and monitor
                performance — all from one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-center text-lg shadow-soft">
                  
                  Start Free Trial
                </Link>
                <Link
                  to="/contact"
                  className="bg-white hover:bg-gray-50 text-brand-navy border border-gray-200 font-semibold px-8 py-4 rounded-xl transition-colors text-center text-lg">
                  
                  Request Demo
                </Link>
              </div>
            </motion.div>

            {/* Hero Mockup */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.2
              }}
              className="relative h-[500px] w-full hidden lg:block">
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                  <div className="font-bold text-lg text-brand-navy">
                    Weekly Schedule
                  </div>
                  <div className="px-3 py-1 bg-white border border-gray-200 text-sm font-medium rounded-md">
                    Oct 12 - Oct 18
                  </div>
                </div>
                <div className="p-4 overflow-x-auto">
                  <div className="min-w-[500px]">
                    <div className="grid grid-cols-6 gap-2 mb-2 text-xs font-bold text-gray-500 text-center">
                      <div className="text-left pl-2">Employee</div>
                      <div>Mon</div>
                      <div>Tue</div>
                      <div>Wed</div>
                      <div>Thu</div>
                      <div>Fri</div>
                    </div>
                    <div className="space-y-2">
                      {[
                      {
                        name: 'Sarah J.',
                        role: 'Server',
                        shifts: ['9a-5p', 'off', '9a-5p', '9a-5p', '4p-11p']
                      },
                      {
                        name: 'Mike T.',
                        role: 'Bartender',
                        shifts: ['off', '4p-12a', '4p-12a', 'off', '5p-2a']
                      },
                      {
                        name: 'Elena R.',
                        role: 'Chef',
                        shifts: ['7a-3p', '7a-3p', 'off', '7a-3p', '7a-3p']
                      }].
                      map((emp, i) =>
                      <div
                        key={i}
                        className="grid grid-cols-6 gap-2 items-center bg-gray-50 p-2 rounded-lg">
                        
                          <div>
                            <div className="font-bold text-sm text-brand-navy">
                              {emp.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {emp.role}
                            </div>
                          </div>
                          {emp.shifts.map((shift, j) =>
                        <div
                          key={j}
                          className={`text-center text-xs py-1.5 rounded ${shift === 'off' ? 'text-gray-400' : 'bg-rose-100 text-rose-700 font-medium'}`}>
                          
                              {shift}
                            </div>
                        )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-heading text-brand-navy mb-4">
              Empower your team
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
              icon: Calendar,
              title: 'Smart Scheduling',
              desc: 'Drag-and-drop shift builder with labor cost forecasting.'
            },
            {
              icon: Clock,
              title: 'Time & Attendance',
              desc: 'Secure clock in/out directly from the POS terminal.'
            },
            {
              icon: ShieldCheck,
              title: 'Role Permissions',
              desc: 'Control exactly what each staff member can see and do.'
            },
            {
              icon: TrendingUp,
              title: 'Performance Tracking',
              desc: 'Monitor sales per server, tip averages, and void rates.'
            }].
            map((benefit, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: i * 0.1
              }}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-rose-500 mb-4 shadow-sm">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            )}
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
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-0.5 bg-white/10"></div>
            {[
            {
              step: '1',
              title: 'Set up roles',
              desc: 'Define roles, wages, and POS permissions for your team.'
            },
            {
              step: '2',
              title: 'Build schedules',
              desc: 'Create schedules based on sales forecasts and staff availability.'
            },
            {
              step: '3',
              title: 'Export payroll',
              desc: 'Review timesheets and export directly to your payroll provider.'
            }].
            map((item, i) =>
            <div
              key={i}
              className="relative z-10 flex flex-col items-center text-center">
              
                <div className="w-16 h-16 rounded-full bg-rose-500 flex items-center justify-center text-white text-2xl font-bold mb-6 border-4 border-brand-navy">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FEATURE DETAILS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {/* Detail 1 */}
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
              
              <h3 className="text-3xl font-bold font-heading text-brand-navy mb-6">
                Visual shift scheduler
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Stop using spreadsheets. Build schedules quickly while keeping
                an eye on projected labor costs and avoiding overtime.
              </p>
              <ul className="space-y-4">
                {[
                'Drag-and-drop interface',
                'Copy previous weeks',
                'Automated conflict detection',
                'Staff can view schedules on their phones'].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                )}
              </ul>
            </motion.div>
            <div className="relative h-[400px] bg-gray-100 rounded-2xl border border-gray-200 p-8 flex items-center justify-center">
              <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-xl mb-2">Clock In</h4>
                <p className="text-gray-500 text-sm mb-6">
                  Enter your PIN to start your shift.
                </p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) =>
                  <div
                    key={n}
                    className="bg-gray-50 py-3 rounded-lg font-bold text-lg border border-gray-100">
                    
                      {n}
                    </div>
                  )}
                  <div className="col-start-2 bg-gray-50 py-3 rounded-lg font-bold text-lg border border-gray-100">
                    0
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detail 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] bg-gray-100 rounded-2xl border border-gray-200 p-8 flex items-center justify-center">
              <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b">
                  <div className="w-12 h-12 bg-brand-coral/20 rounded-full flex items-center justify-center text-brand-coral font-bold text-xl">
                    SJ
                  </div>
                  <div>
                    <div className="font-bold text-lg">Sarah Jenkins</div>
                    <div className="text-sm text-gray-500">Server</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Net Sales (Week)</span>
                    <span className="font-bold">RWF 4,200,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Avg Tip %</span>
                    <span className="font-bold text-green-600">22.4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Void Rate</span>
                    <span className="font-bold text-amber-500">1.2%</span>
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
              
              <h3 className="text-3xl font-bold font-heading text-brand-navy mb-6">
                Performance dashboards
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Identify your top performers and those who might need more
                training. Track key metrics per employee automatically.
              </p>
              <ul className="space-y-4">
                {[
                'Sales per hour worked',
                'Tip percentage averages',
                'Item void and comp tracking',
                'Upsell performance metrics'].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                )}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-brand-coral relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)',
            backgroundSize: '30px 30px'
          }}>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold font-heading text-white mb-6">
            Ready to simplify scheduling?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Take the headache out of staff management and payroll.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-5 py-4 rounded-xl border-none focus:outline-none focus:ring-4 focus:ring-white/30 text-lg" />
            
            <button className="bg-brand-navy hover:bg-brand-navy-light text-white font-semibold px-8 py-4 rounded-xl transition-colors whitespace-nowrap text-lg shadow-lg">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>
    </div>);

}
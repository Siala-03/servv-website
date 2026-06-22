import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  UtensilsCrossed,
  MonitorSmartphone,
  LayoutGrid,
  ChefHat,
  BarChart3,
  Package,
  Clock,
  TrendingDown,
  Unplug,
  EyeOff,
  ArrowRight,
  Star,
  Quote,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const images = {
  hero: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80',
  kitchen: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80',
  dining: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
  pos: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
  food: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  table: 'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?auto=format&fit=crop&w=800&q=80',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
};

const painPoints = [
  {
    icon: Clock,
    problem: 'Slow rush-hour orders',
    solution: 'Lightning-fast POS with handhelds for line-busting.',
  },
  {
    icon: TrendingDown,
    problem: 'Inventory waste',
    solution: 'Ingredient-level tracking with automated low-stock alerts.',
  },
  {
    icon: Unplug,
    problem: 'Disconnected BOH & FOH',
    solution: 'Seamless POS-to-KDS integration in real time.',
  },
  {
    icon: EyeOff,
    problem: 'No real-time visibility',
    solution: 'Live dashboards for sales, labor, and table turns.',
  },
];

const features = [
  { icon: MonitorSmartphone, title: 'Point of Sale', link: '/features/pos', image: images.pos },
  { icon: LayoutGrid, title: 'Table Management', link: '/features/table-management', image: images.table },
  { icon: ChefHat, title: 'Kitchen Display', link: '/features/pos', image: images.kitchen },
  { icon: Package, title: 'Inventory Control', link: '/features/inventory', image: images.food },
  { icon: BarChart3, title: 'Analytics', link: '/features/analytics', image: images.dining },
  { icon: UtensilsCrossed, title: 'Menu Engineering', link: '/features/analytics', image: images.kitchen },
];

export function Restaurants() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="Fine dining restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-brand-navy/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 font-semibold mb-6 backdrop-blur-sm border border-orange-400/20">
              <UtensilsCrossed className="w-5 h-5" /> For Restaurants
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold font-heading text-white leading-[1.1] mb-6">
              Run Your Restaurant <br />
              <span className="text-orange-400">Effortlessly</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              From quick-service to fine dining -- Servv handles the complexity so you focus on the food.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-center text-lg shadow-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/rms"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-center text-lg backdrop-blur-sm border border-white/20"
              >
                See How It Works
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-brand-navy mb-4">
              Problems we solve
            </h2>
            <p className="text-gray-500 text-lg">Real challenges, real solutions.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-orange-50 rounded-2xl p-6 text-center hover:shadow-card transition-shadow"
              >
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h4 className="text-lg font-bold text-brand-navy mb-2">{item.problem}</h4>
                <p className="text-gray-600 text-sm">{item.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-brand-navy mb-4">
              Everything your restaurant needs
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  to={feature.link}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-card transition-shadow"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex items-center gap-4">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors shrink-0">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg text-brand-navy">{feature.title}</span>
                    <ArrowRight className="w-5 h-5 ml-auto text-gray-300 group-hover:text-orange-600 transition-colors" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/15 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Quote className="w-12 h-12 text-orange-500/40 mx-auto mb-6" />
          <div className="flex justify-center gap-1 mb-6 text-amber-400">
            {[...Array(5)].map((_, j) => (
              <Star key={j} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
            "Servv transformed how we run our restaurant group. Multi-location analytics gave us
            visibility we never had before."
          </p>
          <div className="flex items-center justify-center gap-4">
            <img
              src={images.avatar}
              alt="Sarah Jenkins"
              className="w-14 h-14 rounded-full object-cover border-2 border-orange-400"
            />
            <div className="text-left">
              <div className="font-bold text-lg">Sarah Jenkins</div>
              <div className="text-gray-400 text-sm">Operations Director, The Rustic Collective</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.dining}
            alt="Restaurant dining"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-coral/90" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold font-heading text-white mb-6">
            Ready to transform your restaurant?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join hundreds of restaurants already running on Servv.
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
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

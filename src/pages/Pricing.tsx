import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Check,
  Star,
  ChevronDown,
  Zap,
  Building2,
  Rocket,
  Phone,
  ArrowRight,
  HelpCircle,
  Shield,
} from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    description: 'Perfect for small venues getting started with modern tools.',
    price: 'Free',
    priceSuffix: '14-day trial',
    icon: Zap,
    color: 'brand-teal',
    features: [
      'Basic POS system',
      '1 location',
      'Menu management',
      'Daily sales reports',
      'Email support',
      'Basic reporting dashboard',
      'Cloud data backup',
    ],
    cta: 'Start Free Trial',
    ctaLink: '/contact',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'Everything you need to grow and optimize your operations.',
    price: '$89',
    priceSuffix: '/mo per location',
    icon: Rocket,
    color: 'brand-coral',
    features: [
      'Full POS with multi-terminal support',
      'Up to 3 locations',
      'Inventory management',
      'Online ordering integration',
      'Advanced analytics & reports',
      'Table management',
      'Staff scheduling & roles',
      'Servv IQ Basic (AI insights)',
      'Priority email & chat support',
    ],
    cta: 'Get Started',
    ctaLink: '/contact',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For hotel groups and multi-venue operators who need it all.',
    price: 'Custom',
    priceSuffix: 'tailored to your scale',
    icon: Building2,
    color: 'brand-navy',
    features: [
      'Everything in Professional',
      'Unlimited locations',
      'Hotel Management System (HMS)',
      'Servv IQ Pro (predictive AI)',
      'Custom integrations & API access',
      'Dedicated account manager',
      'Hardware bundle options',
      'On-site training & onboarding',
      'SLA & uptime guarantee',
      '24/7 phone support',
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact',
    popular: false,
  },
];

const faqs = [
  {
    question: 'Is there a contract or commitment?',
    answer:
      'No long-term contracts. The Professional plan is billed monthly, and you can cancel anytime. Enterprise agreements are flexible and negotiated based on your needs.',
  },
  {
    question: 'What happens after the 14-day free trial?',
    answer:
      'After your trial ends, you can upgrade to Professional or Enterprise to keep all your data and settings. If you choose not to continue, your account is simply paused — nothing is deleted.',
  },
  {
    question: 'Can I switch plans later?',
    answer:
      'Absolutely. You can upgrade or downgrade at any time. When upgrading, your new features activate immediately. Downgrades take effect at the start of your next billing cycle.',
  },
  {
    question: 'Do you provide POS hardware?',
    answer:
      'Yes. Our Enterprise plan includes hardware bundle options (tablets, receipt printers, cash drawers). For Starter and Professional, we support most standard POS hardware — reach out and we will help you find the right setup.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'All data is encrypted in transit and at rest. We use enterprise-grade cloud infrastructure with daily backups. Your business data is always yours — we never share it with third parties.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-brand-navy text-lg">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 pb-5 text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="bg-brand-gray pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-coral/10 text-brand-coral font-semibold text-sm mb-6">
              <Star className="w-4 h-4" /> Simple, transparent pricing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-brand-navy mb-6">
              One Platform, <span className="text-brand-coral">Zero Surprises</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Start free, scale as you grow. Every plan includes core POS features,
              cloud hosting, and automatic updates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="bg-brand-gray pb-24 -mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {tiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative rounded-3xl p-8 shadow-card border-2 transition-shadow hover:shadow-lg ${
                    tier.popular
                      ? 'border-brand-coral bg-white scale-[1.02] md:-mt-4 md:mb-4'
                      : 'border-gray-100 bg-white'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-brand-coral text-white text-sm font-bold px-5 py-1.5 rounded-full shadow-md">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Icon & Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        tier.popular
                          ? 'bg-brand-coral/10 text-brand-coral'
                          : tier.name === 'Enterprise'
                          ? 'bg-brand-navy/10 text-brand-navy'
                          : 'bg-brand-teal/10 text-brand-teal'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading text-brand-navy">
                        {tier.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm mb-6 leading-relaxed min-h-[40px]">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold font-heading text-brand-navy">
                        {tier.price}
                      </span>
                      {tier.price !== 'Custom' && tier.price !== 'Free' && (
                        <span className="text-gray-400 text-sm font-medium">
                          {tier.priceSuffix}
                        </span>
                      )}
                    </div>
                    {tier.price === 'Free' && (
                      <span className="text-brand-teal text-sm font-semibold">
                        {tier.priceSuffix}
                      </span>
                    )}
                    {tier.price === 'Custom' && (
                      <span className="text-gray-400 text-sm font-medium">
                        {tier.priceSuffix}
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 shrink-0 mt-0.5 ${
                            tier.popular
                              ? 'text-brand-coral'
                              : tier.name === 'Enterprise'
                              ? 'text-brand-navy'
                              : 'text-brand-teal'
                          }`}
                        />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    to={tier.ctaLink}
                    className={`block w-full text-center font-bold py-4 rounded-xl transition-colors text-lg ${
                      tier.popular
                        ? 'bg-brand-coral hover:bg-brand-coral-dark text-white shadow-md'
                        : tier.name === 'Enterprise'
                        ? 'bg-brand-navy hover:bg-brand-navy-light text-white'
                        : 'border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white'
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="w-5 h-5 inline-block ml-2" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mt-16 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-brand-teal" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-brand-teal" />
              <span>Set up in under 10 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-brand-teal" />
              <span>Free onboarding support</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/5 text-brand-navy font-semibold text-sm mb-4">
              <HelpCircle className="w-4 h-4" /> Common questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-brand-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
              Not sure which plan is right for you?
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Our team in Kigali is happy to walk you through the options and find the
              perfect fit for your venue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-brand-coral hover:bg-brand-coral-dark text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg shadow-lg"
              >
                Talk to Our Team
                <ArrowRight className="w-5 h-5 inline-block ml-2" />
              </Link>
              <a
                href="tel:+250783809328"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg border border-white/20"
              >
                <Phone className="w-5 h-5 inline-block mr-2" />
                +250 783 809 328
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

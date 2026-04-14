import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const tiers = [
  {
    name: 'Starter',
    description:
    'Perfect for small cafes and quick-service spots just getting started.',
    price: isAnnual ? 39 : 49,
    features: [
    '1 POS terminal included',
    'Basic menu management',
    'Order management (dine-in & takeaway)',
    'Basic reporting & analytics',
    'Email support',
    'Standard payment processing'],

    cta: 'Start Free Trial',
    highlighted: false
  },
  {
    name: 'Professional',
    description:
    'Everything growing restaurants need to scale operations efficiently.',
    price: isAnnual ? 79 : 99,
    features: [
    'Up to 5 POS terminals',
    'Advanced menu management',
    'Online ordering integration',
    'Inventory management',
    'Advanced analytics & reporting',
    'Table & floor plan management',
    'Staff scheduling & time tracking',
    'Priority email & chat support'],

    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    name: 'Enterprise',
    description:
    'Advanced features and dedicated support for multi-location venues.',
    price: isAnnual ? 159 : 199,
    features: [
    'Unlimited POS terminals',
    'Everything in Professional',
    'Servv IQ (AI intelligence)',
    'Multi-location management',
    'Custom integrations & API access',
    'Hotel & spa module',
    'Dedicated account manager',
    '24/7 phone support'],

    cta: 'Contact Sales',
    highlighted: false
  }];

  const faqs = [
  {
    q: 'Do I have to sign a long-term contract?',
    a: 'No, our monthly plans are pay-as-you-go and you can cancel at any time. However, we offer a 20% discount if you choose to pay annually.'
  },
  {
    q: 'Is hardware included in the subscription price?',
    a: 'Hardware is purchased separately. We offer flexible financing options for hardware, or you can buy it upfront. Contact our sales team for a custom hardware quote.'
  },
  {
    q: 'Can I switch plans later?',
    a: 'Absolutely. You can upgrade or downgrade your plan at any time right from your dashboard. Prorated charges will be applied automatically.'
  },
  {
    q: 'What payment processing rates do you offer?',
    a: 'We offer competitive, transparent flat-rate processing starting at 2.4% + 15¢ per tap/dip/swipe. Enterprise customers may qualify for custom rates.'
  },
  {
    q: 'How does the 14-day free trial work?',
    a: 'You get full access to the Professional plan features for 14 days. No credit card is required to sign up. If you decide not to continue, your account will simply expire.'
  }];

  return (
    <div className="pt-20 pb-24 bg-brand-gray min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 pt-12">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-brand-navy mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Choose the plan that fits your business. No hidden fees, no
            surprises.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-lg font-medium ${!isAnnual ? 'text-brand-navy' : 'text-gray-500'}`}>
              
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 rounded-full bg-brand-coral transition-colors focus:outline-none">
              
              <div
                className={`absolute top-1 left-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 shadow-sm ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`}>
              </div>
            </button>
            <span
              className={`text-lg font-medium flex items-center gap-2 ${isAnnual ? 'text-brand-navy' : 'text-gray-500'}`}>
              
              Annually{' '}
              <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {tiers.map((tier, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.1
            }}
            className={`relative bg-white rounded-3xl p-8 flex flex-col ${tier.highlighted ? 'border-2 border-brand-coral shadow-card scale-105 z-10' : 'border border-gray-200 shadow-soft'}`}>
            
              {tier.highlighted &&
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-coral text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Most Popular
                </div>
            }

              <div className="mb-8">
                <h3 className="text-2xl font-bold font-heading text-brand-navy mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-500 h-12">{tier.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-bold font-heading text-brand-navy">
                    ${tier.price}
                  </span>
                  <span className="text-gray-500 mb-1">/mo</span>
                </div>
                {isAnnual &&
              <div className="text-sm text-gray-500 mt-1">
                    Billed annually
                  </div>
              }
              </div>

              <Link
              to="/contact"
              className={`w-full py-4 rounded-xl font-bold text-center transition-colors mb-8 ${tier.highlighted ? 'bg-brand-coral hover:bg-brand-coral-dark text-white shadow-md' : 'bg-brand-gray hover:bg-gray-200 text-brand-navy'}`}>
              
                {tier.cta}
              </Link>

              <div className="flex-grow">
                <p className="font-semibold text-brand-navy mb-4">
                  What's included:
                </p>
                <ul className="space-y-4">
                  {tier.features.map((feature, j) =>
                <li key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                )}
                </ul>
              </div>
            </motion.div>
          )}
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-brand-navy mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) =>
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              
                <h4 className="text-lg font-bold text-brand-navy mb-2 flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-brand-coral shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-gray-600 pl-9">{faq.a}</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 bg-brand-navy rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-coral/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold font-heading text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team of hospitality experts is ready to help you find the
              perfect solution for your business.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-brand-navy font-bold px-8 py-4 rounded-xl transition-colors text-lg">
              
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>
    </div>);

}
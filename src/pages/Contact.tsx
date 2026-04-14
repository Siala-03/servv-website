import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <div className="w-full bg-brand-gray min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-4xl md:text-5xl font-bold font-heading text-brand-navy mb-6">
            
            Let's Talk
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.1
            }}
            className="text-xl text-gray-600">
            
            Whether you want a demo, have questions, or are ready to get started
            — we're here to help.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Left: Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: 0.2
            }}
            className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-10 shadow-soft border border-gray-100">
            
            {isSubmitted ?
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold font-heading text-brand-navy mb-4">
                  Message Sent!
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Thanks for reaching out. A member of our team will get back to
                  you within 24 hours.
                </p>
                <button
                onClick={() => setIsSubmitted(false)}
                className="text-brand-coral font-semibold hover:underline">
                
                  Send another message
                </button>
              </div> :

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">
                      First Name
                    </label>
                    <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/50 focus:border-brand-coral transition-colors"
                    placeholder="Jane" />
                  
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">
                      Last Name
                    </label>
                    <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/50 focus:border-brand-coral transition-colors"
                    placeholder="Doe" />
                  
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">
                      Work Email
                    </label>
                    <input
                    required
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/50 focus:border-brand-coral transition-colors"
                    placeholder="jane@restaurant.com" />
                  
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">
                      Phone Number
                    </label>
                    <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/50 focus:border-brand-coral transition-colors"
                    placeholder="(555) 123-4567" />
                  
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">
                      Business Name
                    </label>
                    <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/50 focus:border-brand-coral transition-colors"
                    placeholder="The Rustic Cafe" />
                  
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">
                      Business Type
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/50 focus:border-brand-coral transition-colors bg-white">
                      <option>Restaurant</option>
                      <option>Bar / Lounge</option>
                      <option>Hotel / Spa</option>
                      <option>Cafe / Coffee Shop</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-navy mb-3">
                    I'm interested in: (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                  'Free Trial',
                  'Product Demo',
                  'Pricing Info',
                  'Hardware Quote'].
                  map((item, i) =>
                  <label
                    key={i}
                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    
                        <input
                      type="checkbox"
                      className="w-4 h-4 text-brand-coral focus:ring-brand-coral rounded border-gray-300" />
                    
                        <span className="text-sm text-gray-700 font-medium">
                          {item}
                        </span>
                      </label>
                  )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-navy mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/50 focus:border-brand-coral transition-colors resize-none"
                  placeholder="Tell us a bit about your needs...">
                </textarea>
                </div>

                <button
                type="submit"
                className="w-full bg-brand-coral hover:bg-brand-coral-dark text-white font-bold py-4 rounded-xl transition-colors text-lg shadow-md">
                
                  Submit Request
                </button>
              </form>
            }
          </motion.div>

          {/* Right: Info */}
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
              delay: 0.3
            }}
            className="space-y-8">
            
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100">
              <h3 className="text-xl font-bold font-heading text-brand-navy mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-coral/10 flex items-center justify-center text-brand-coral shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-navy">Email</div>
                    <a
                      href="mailto:hello@servv.com"
                      className="text-gray-600 hover:text-brand-coral transition-colors">
                      
                      hello@servv.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-coral/10 flex items-center justify-center text-brand-coral shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-navy">Phone</div>
                    <a
                      href="tel:1-800-SERVV"
                      className="text-gray-600 hover:text-brand-coral transition-colors">
                      
                      1-800-SERVV
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-coral/10 flex items-center justify-center text-brand-coral shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-navy">Office</div>
                    <div className="text-gray-600">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-navy rounded-3xl p-8 shadow-soft text-white">
              <h3 className="text-xl font-bold font-heading mb-6">
                What to expect
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <div className="font-bold mb-1">Quick Response</div>
                    <div className="text-sm text-gray-400">
                      We'll reach out within 24 hours to understand your needs.
                    </div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <div className="font-bold mb-1">Personalized Demo</div>
                    <div className="text-sm text-gray-400">
                      Get a walkthrough tailored to your specific venue type.
                    </div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <div className="font-bold mb-1">Start Free Trial</div>
                    <div className="text-sm text-gray-400">
                      Test the software in your own environment risk-free.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>);

}
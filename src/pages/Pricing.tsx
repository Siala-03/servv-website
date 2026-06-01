import { Link } from 'react-router-dom';

export function Pricing() {
  return (
    <div className="pt-20 pb-24 bg-brand-gray min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-brand-navy mb-6">
          Pricing Coming Soon
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          We are finalising our pricing plans. Contact us for a custom quote in RWF tailored to your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:sialasolutions@gmail.com"
            className="bg-brand-coral hover:bg-brand-coral-dark text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg">
            Email Us
          </a>
          <Link
            to="/contact"
            className="border border-gray-300 hover:border-brand-coral text-brand-navy font-semibold px-8 py-4 rounded-xl transition-colors text-lg">
            Request a Demo
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-8">
          sialasolutions@gmail.com &nbsp;·&nbsp; +0783809328
        </p>
      </div>
    </div>
  );
}

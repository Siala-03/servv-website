import { motion } from 'framer-motion';
interface PlaceholderProps {
  title: string;
}
export function Placeholder({ title }: PlaceholderProps) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center bg-brand-gray">
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
          duration: 0.5
        }}
        className="max-w-2xl">
        
        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
          {title}
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          This page is currently under construction and will be available in
          Phase 2.
        </p>
        <div
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-coral hover:bg-brand-coral-dark transition-colors cursor-pointer"
          onClick={() => window.history.back()}>
          
          Go Back
        </div>
      </motion.div>
    </div>);

}
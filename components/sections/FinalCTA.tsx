'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 lg:px-8 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements - More subtle */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-purple-500/8" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/4 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/4 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        {/* Headline - Centered */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
          Ready to Hire Better, Faster?
        </h2>

        {/* Subheadline - Width matched */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-xl mx-auto leading-relaxed">
          Join 500+ companies hiring smarter with AI
        </p>

        {/* Trust Indicators - Centered with equal spacing */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-gray-300 text-sm mb-12">
          {[
            '14-day free trial',
            'No credit card required',
            'Cancel anytime',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* CTAs - Symmetrical button group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="dark" size="lg">
            Start Free Trial
          </Button>
          <button className="px-8 py-4 text-base font-semibold rounded-xl border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98]">
            Schedule Demo
          </button>
        </div>
      </motion.div>
    </section>
  );
}

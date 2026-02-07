'use client';

import { motion } from 'framer-motion';

export default function Distribution() {
  const platforms = [
    { name: 'LinkedIn', initial: 'Li' },
    { name: 'Naukri', initial: 'Nk' },
    { name: 'Indeed', initial: 'In' },
    { name: 'AngelList', initial: 'AL' },
    { name: 'Instahyre', initial: 'Ih' },
    { name: 'Wellfound', initial: 'Wf' },
    { name: 'IIMJobs', initial: 'IJ' },
    { name: 'Glassdoor', initial: 'Gd' },
    { name: 'Monster', initial: 'Mo' },
    { name: 'Cutshort', initial: 'Cs' },
  ];

  // Triple for seamless infinite scroll
  const allPlatforms = [...platforms, ...platforms, ...platforms];

  return (
    <section className="py-20 md:py-24 lg:py-32 px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header - Centered */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight tracking-tight">
              Post Once, Reach Everywhere
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Automatically distribute your job postings to 50+ platforms with a single click.
            </p>
          </motion.div>
        </div>

        {/* Logo Slider - Consistent baseline alignment */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="overflow-hidden py-4">
            <div className="flex items-center gap-6 animate-scroll hover:animate-scroll-pause">
              {allPlatforms.map((platform, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                >
                  <div className="w-32 h-20 flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-gray-200 bg-white backdrop-blur-sm grayscale hover:grayscale-0 hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 group-hover:from-primary/10 group-hover:to-blue-50 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <span className="text-xs font-bold text-gray-500 group-hover:text-primary transition-colors duration-300">
                        {platform.initial}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors duration-300 whitespace-nowrap">
                      {platform.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Text - Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-sm">
            Plus integrations with <span className="font-semibold text-gray-900">40+ more platforms</span> including regional job boards
          </p>
        </motion.div>
      </div>
    </section>
  );
}

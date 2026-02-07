'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 1500;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.floor(value * easeOut));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}

export default function Impact() {
  const metrics = [
    { value: 10, suffix: 'x', label: 'Faster Screening', sublabel: 'vs manual review', color: '#3B82F6', bgTint: 'bg-blue-50/40', borderColor: 'border-blue-200' },
    { value: 70, suffix: '%', label: 'Faster Time-to-Hire', sublabel: 'average reduction', color: '#B197FC', bgTint: 'bg-purple-50/40', borderColor: 'border-purple-200' },
    { value: 25, suffix: 'x', label: 'Interview Capacity', sublabel: 'without adding headcount', color: '#60A5FA', bgTint: 'bg-sky-50/40', borderColor: 'border-sky-200' },
    { value: 95, suffix: '%', label: 'Application Completion', sublabel: 'candidates finish application', color: '#6366F1', bgTint: 'bg-indigo-50/40', borderColor: 'border-indigo-200' },
    { value: 89, suffix: '%', label: 'More Qualified Applicants', sublabel: 'per open role', color: '#10B981', bgTint: 'bg-emerald-50/40', borderColor: 'border-emerald-200' },
    { value: 80, suffix: '%', label: 'Lower Recruitment Costs', sublabel: 'vs traditional recruiting', color: '#8B5CF6', bgTint: 'bg-violet-50/40', borderColor: 'border-violet-200' },
    { value: 50, suffix: '%', label: 'Reduction in Bad Hires', sublabel: 'improved match accuracy', color: '#D0BCFF', bgTint: 'bg-purple-100/40', borderColor: 'border-purple-300' },
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        {/* Header - Centered with consistent max-width */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight tracking-tight">
              The RecruiterAI Advantage
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Real impact, measurable results. Join 500+ companies transforming their hiring process.
            </p>
          </motion.div>
        </div>

        {/* Metrics Grid - 4 columns with equal widths and spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white rounded-xl border-2 border-gray-200 overflow-hidden group hover:border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top color accent border - more prominent */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: metric.color }}
              />

              {/* Subtle background tint */}
              <div
                className={`absolute inset-0 ${metric.bgTint} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Card content */}
              <div className="relative p-8 text-center">
                {/* Metric value - Hero element */}
                <div
                  className="text-5xl md:text-6xl font-bold mb-4 transition-transform duration-300 group-hover:scale-105"
                  style={{ color: metric.color }}
                >
                  <AnimatedNumber value={metric.value} suffix={metric.suffix} />
                </div>

                {/* Metric label */}
                <div className="text-base font-semibold text-gray-900 mb-2 leading-tight">
                  {metric.label}
                </div>

                {/* Description */}
                <div className="text-sm text-gray-500 leading-relaxed">
                  {metric.sublabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Row - Centered below metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white border-2 border-gray-200 shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-300 cursor-pointer group">
            <span className="text-base font-semibold text-gray-900">
              Ready to see results?
            </span>
            <span className="text-sm text-gray-600 group-hover:text-primary transition-colors duration-300">
              Start your free trial today →
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

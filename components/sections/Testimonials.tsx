'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Cut our hiring time from 8 weeks to 2 weeks. We filled 12 positions in Q4. The AI screening accuracy is phenomenal.",
      author: "Sarah Chen",
      role: "Head of People",
      company: "TechFlow Systems",
      avatar: "SC",
      rating: 5,
    },
    {
      quote: "As a startup without a full HR team, RecruiterAI handles everything—candidate comms, scheduling, follow-ups. It's like having 3 recruiters.",
      author: "Michael Rodriguez",
      role: "Co-Founder & CEO",
      company: "DataPath AI",
      avatar: "MR",
      rating: 5,
    },
    {
      quote: "The passive candidate feature is gold. We hired 4 exceptional people from our old applicant pool that we would've never reached out to.",
      author: "Emily Watson",
      role: "VP of Talent",
      company: "CloudScale Inc",
      avatar: "EW",
      rating: 5,
    }
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight tracking-tight">
              Trusted by Growing Teams
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Real feedback from teams transforming their hiring process
            </p>
          </motion.div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed text-base flex-1 mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary via-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-sm shadow-md ring-2 ring-blue-100">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

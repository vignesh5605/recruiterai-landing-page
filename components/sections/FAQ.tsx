'use client';

import { motion } from 'framer-motion';
import AccordionItem from '@/components/ui/AccordionItem';

export default function FAQ() {
  const faqs = [
    {
      question: "How does AI screening work?",
      answer: "Our AI analyzes resumes, cover letters, and application responses using natural language processing. It evaluates candidates based on your custom criteria like skills, experience, education, and cultural fit indicators. The system learns from your hiring decisions to continuously improve accuracy."
    },
    {
      question: "Does RecruiterAI integrate with my ATS?",
      answer: "Yes! We integrate seamlessly with all major Applicant Tracking Systems including Greenhouse, Lever, Workable, BambooHR, and 50+ others. Candidate data syncs in real-time, so your existing workflows remain intact."
    },
    {
      question: "What does pricing look like?",
      answer: "We offer flexible pricing based on your hiring volume. Starter plans begin at $299/month for up to 10 active job postings. Enterprise plans include unlimited postings, dedicated support, and custom integrations. Book a demo to discuss your specific needs."
    },
    {
      question: "How long does setup take?",
      answer: "Most teams are up and running in under 24 hours. Simply connect your ATS, configure your screening criteria, and start posting jobs. Our onboarding team provides hands-on support to ensure smooth implementation."
    },
    {
      question: "Is candidate data secure?",
      answer: "Absolutely. We're SOC 2 Type II certified and GDPR compliant. All candidate data is encrypted at rest and in transit. We never sell data to third parties, and you maintain complete control over data retention policies."
    }
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header - Centered */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Everything you need to know about RecruiterAI
            </p>
          </motion.div>
        </div>

        {/* FAQ Items - Consistent internal padding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gray-50 rounded-2xl border-2 border-gray-200 divide-y divide-gray-200 overflow-hidden shadow-sm"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

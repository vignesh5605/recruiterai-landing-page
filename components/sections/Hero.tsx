'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function Hero() {
  const conversations = [
    {
      name: 'Sarah K.',
      role: 'Founder at TechStart',
      quote: 'Candidates wait 3 weeks for replies while I\'m juggling everything. We\'re losing great talent to competitors.',
    },
    {
      name: 'Rahul M.',
      role: 'Hiring Manager at GrowthCo',
      quote: 'Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months.',
    },
    {
      name: 'Priya S.',
      role: 'CEO at InnovateLabs',
      quote: 'I\'m the CEO, product lead, AND now doing HR? There\'s zero time to read 200 resumes properly.',
    },
    {
      name: 'Amit T.',
      role: 'Head of HR at ScaleUp',
      quote: 'Our best candidate accepted another offer while we were still scheduling interviews. This keeps happening.',
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden py-20 md:py-28">
      {/* Subtle background - calmer, more professional */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/40 via-white to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.025),transparent_60%)]" />

      {/* Main Container */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-8">
        
        {/* Floating Conversation Bubbles - Top Row */}
        <div className="hidden lg:grid grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Top Left - Sarah K. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="justify-self-end"
          >
            <ConversationBubble {...conversations[0]} />
          </motion.div>

          {/* Top Right - Rahul M. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="justify-self-start"
          >
            <ConversationBubble {...conversations[1]} />
          </motion.div>
        </div>

        {/* Central Hero Content */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          
          {/* Main Headline - Primary visual element */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-gray-900 leading-[1.1] tracking-[-0.02em] mb-7"
          >
            Every Hire, Faster and Better
          </motion.h1>

          {/* Supporting Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl lg:text-[1.35rem] text-gray-600 leading-relaxed max-w-[650px] mb-10"
          >
            Stop losing great candidates to slow, manual hiring processes.
            Let AI handle the heavy lifting while you focus on building your team.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Button variant="primary" size="lg">
              Start Hiring Smarter
            </Button>
            <Button variant="secondary" size="lg">
              See How It Works
            </Button>
          </motion.div>
        </div>

        {/* Floating Conversation Bubbles - Bottom Row */}
        <div className="hidden lg:grid grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
          {/* Bottom Left - Priya S. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="justify-self-end"
          >
            <ConversationBubble {...conversations[2]} />
          </motion.div>

          {/* Bottom Right - Amit T. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="justify-self-start"
          >
            <ConversationBubble {...conversations[3]} />
          </motion.div>
        </div>

        {/* Mobile/Tablet Conversation Cards - Clean vertical stack */}
        <div className="lg:hidden mt-16 space-y-5 max-w-lg mx-auto">
          {conversations.map((conv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + (index * 0.1), ease: [0.22, 1, 0.36, 1] }}
            >
              <ConversationBubble {...conv} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Conversation Bubble Component - Professional, bubbled card design
function ConversationBubble({ name, role, quote }: {
  name: string;
  role: string;
  quote: string;
}) {
  // Refined avatar colors with soft, professional palette
  const getAvatarGradient = (name: string) => {
    const gradients = [
      'from-blue-500 to-cyan-500',
      'from-violet-500 to-purple-500',
      'from-sky-500 to-blue-500',
      'from-indigo-500 to-blue-600',
    ];
    const index = name.charCodeAt(0) % gradients.length;
    return gradients[index];
  };

  return (
    <div className="relative group">
      {/* Subtle ambient glow on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      {/* Main bubble card */}
      <div className="relative bg-white rounded-2xl p-5 shadow-sm border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 max-w-[340px]">
        
        {/* Header with avatar and speaker info */}
        <div className="flex items-start gap-3 mb-3">
          {/* Gradient avatar */}
          <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${getAvatarGradient(name)} flex items-center justify-center flex-shrink-0 shadow-md ring-2 ring-white`}>
            <span className="text-white font-bold text-base">
              {name.charAt(0)}
            </span>
          </div>

          {/* Speaker identity */}
          <div className="flex-1 min-w-0 pt-0.5">
            <p className="font-semibold text-gray-900 text-[15px] leading-snug">
              {name}
            </p>
            <p className="text-[13px] text-gray-600 leading-tight mt-0.5 font-medium">
              {role}
            </p>
          </div>
        </div>

        {/* Quote bubble - primary content */}
        <div className="relative">
          <p className="text-gray-700 text-[15px] leading-relaxed tracking-[-0.01em]">
            &ldquo;{quote}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

'use client';
import { motion } from 'framer-motion';

interface ConversationCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  delay?: number;
}

export default function ConversationCard({ 
  name, 
  role, 
  company, 
  quote, 
  position,
  delay = 0 
}: ConversationCardProps) {
  const positionClasses = {
    'top-left': 'lg:absolute lg:top-0 lg:left-0',
    'top-right': 'lg:absolute lg:top-0 lg:right-0',
    'bottom-left': 'lg:absolute lg:bottom-0 lg:left-0',
    'bottom-right': 'lg:absolute lg:bottom-0 lg:right-0',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`${positionClasses[position]} max-w-xs`}
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent-blue flex items-center justify-center text-white font-medium flex-shrink-0">
            {name.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="mb-3">
              <p className="font-medium text-gray-900">{name}</p>
              <p className="text-sm text-gray-600">{role}</p>
              <p className="text-sm text-gray-500">{company}</p>
            </div>
            <p className="text-sm text-gray-700 italic leading-relaxed">
              &ldquo;{quote}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

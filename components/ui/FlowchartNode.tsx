'use client';
import { motion } from 'framer-motion';

interface FlowchartNodeProps {
  type: 'start' | 'process' | 'decision' | 'end';
  label: string;
  color?: string;
  delay?: number;
}

export default function FlowchartNode({ type, label, color = 'blue', delay = 0 }: FlowchartNodeProps) {
  const colors = {
    blue: 'bg-blue-100 border-blue-300 text-blue-900',
    green: 'bg-green-100 border-green-300 text-green-900',
    purple: 'bg-purple-100 border-purple-300 text-purple-900',
    orange: 'bg-orange-100 border-orange-300 text-orange-900',
    red: 'bg-red-100 border-red-300 text-red-900',
    gray: 'bg-gray-100 border-gray-300 text-gray-900',
  };

  const shapes = {
    start: 'rounded-full px-6 py-3',
    process: 'rounded-xl px-6 py-4',
    decision: 'transform rotate-45 w-32 h-32 flex items-center justify-center',
    end: 'rounded-full px-6 py-3',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`border-2 ${colors[color as keyof typeof colors]} ${shapes[type]} text-sm font-medium text-center shadow-sm`}
    >
      {type === 'decision' ? (
        <div className="transform -rotate-45 whitespace-normal">
          {label}
        </div>
      ) : (
        label
      )}
    </motion.div>
  );
}

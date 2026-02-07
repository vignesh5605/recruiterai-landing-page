import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'hover';
}

export default function Card({ children, className = '', variant = 'default' }: CardProps) {
  const baseStyles = 'bg-white rounded-xl shadow-md';
  const variantStyles = {
    default: '',
    hover: 'hover:shadow-xl transition-shadow duration-300'
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}

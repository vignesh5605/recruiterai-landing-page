import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'dark';
  size?: 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = '',
  disabled = false
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';

  const sizeStyles = {
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base'
  };

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-600 shadow-md hover:shadow-lg active:shadow-md active:scale-[0.98] hover:-translate-y-0.5',
    secondary: 'bg-white text-gray-900 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 shadow-sm hover:shadow-md active:shadow-sm active:scale-[0.98]',
    dark: 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl active:shadow-lg active:scale-[0.98]'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

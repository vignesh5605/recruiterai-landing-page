export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-7 h-7',
    lg: 'w-8 h-8'
  };

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={sizes[size]}
    >
      {/* Filter/Funnel Symbol - represents filtering and matching */}
      <rect x="4" y="6" width="24" height="3" rx="1.5" fill="currentColor" className="text-primary" />
      <rect x="8" y="14.5" width="16" height="3" rx="1.5" fill="currentColor" className="text-primary/70" />
      <rect x="12" y="23" width="8" height="3" rx="1.5" fill="currentColor" className="text-primary/50" />
    </svg>
  );
}

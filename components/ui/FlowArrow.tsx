export default function FlowArrow({ direction = 'down', label }: { direction?: 'down' | 'right' | 'left'; label?: string }) {
  if (direction === 'right') {
    return (
      <div className="flex items-center gap-2">
        <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        {label && <span className="text-xs text-gray-600 font-medium">{label}</span>}
      </div>
    );
  }

  if (direction === 'left') {
    return (
      <div className="flex items-center gap-2">
        {label && <span className="text-xs text-gray-600 font-medium">{label}</span>}
        <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-1">
      {label && <span className="text-xs text-gray-600 font-medium">{label}</span>}
      <svg className="w-6 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  );
}

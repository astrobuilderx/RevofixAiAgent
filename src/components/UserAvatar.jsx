const colors = [
  'bg-blue-500',
  'bg-emerald-500',
  'bg-violet-500',
  'bg-amber-500',
  'bg-rose-500',
  'bg-cyan-500',
  'bg-indigo-500',
  'bg-teal-500'
];

function getColor(name) {
  let hash = 0;
  for (let i = 0; i < (name || '').length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

export default function UserAvatar({ name, size = 'md', className = '' }) {
  const initials = name
    ? name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()
    : '??';

  const sizes = {
    sm: 'w-6 h-6 text-[9px]',
    md: 'w-8 h-8 text-[11px]',
    lg: 'w-10 h-10 text-sm'
  };

  return (
    <div
      className={`${sizes[size]} rounded-full ${getColor(name)} text-white flex items-center justify-center font-semibold flex-shrink-0 ${className}`}
      title={name}
    >
      {initials}
    </div>
  );
}

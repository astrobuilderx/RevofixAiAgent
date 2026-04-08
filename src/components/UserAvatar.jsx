export default function UserAvatar({ name, size = 'md', className = '' }) {
  const initials = name ? name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase() : '??';
  const sizes = { sm: 'w-6 h-6 text-[10px]', md: 'w-8 h-8 text-xs', lg: 'w-10 h-10 text-sm' };
  return <div className={`${sizes[size]} rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold ${className}`}>{initials}</div>;
}

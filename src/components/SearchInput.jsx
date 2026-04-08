import { Search } from 'lucide-react';
export default function SearchInput({ placeholder = 'Search...', value, onChange, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
      <input type="search" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} className="input-field pl-9" />
    </div>
  );
}

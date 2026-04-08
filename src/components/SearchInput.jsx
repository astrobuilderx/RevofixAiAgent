import { Search, X } from 'lucide-react';

export default function SearchInput({ placeholder = 'Keresés...', value, onChange, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-field pl-9 pr-8"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full hover:bg-gray-100 flex items-center justify-center"
        >
          <X className="w-3 h-3 text-text-muted" />
        </button>
      )}
    </div>
  );
}

import { MapPin } from 'lucide-react';

export default function MapView({ projects = [] }) {
  const geocoded = projects.filter((p) => p.latitude && p.longitude);

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center text-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {geocoded.map((p, i) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${20 + (i * 15) % 60}%`,
            top: `${20 + (i * 20) % 60}%`
          }}
          title={`${p.name} - ${p.address}`}
        >
          <div className="relative group cursor-pointer">
            <MapPin className="w-8 h-8 text-primary drop-shadow-md" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-white rounded-lg shadow-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
              <p className="text-xs font-semibold text-text">{p.name}</p>
              <p className="text-[10px] text-text-muted">{p.address}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="relative z-10">
        <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-3" />
        <p className="text-base font-semibold text-text">Térkép nézet</p>
        <p className="text-sm text-text-secondary mt-1">Google Maps vagy Leaflet integráció helye</p>
        <p className="text-xs text-text-muted mt-2">{geocoded.length} geokódolt projekt</p>
      </div>
    </div>
  );
}

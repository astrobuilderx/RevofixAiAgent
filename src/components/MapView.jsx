export default function MapView({ projects = [] }) {
  return (
    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-center p-8">
      <div>
        <p className="text-xl font-semibold text-text">Map placeholder</p>
        <p className="text-text-secondary mt-2">Google Maps vagy Leaflet integráció ide kerül.</p>
        <p className="text-text-muted mt-1">Geocoded projects: {projects.filter((p) => p.latitude && p.longitude).length}</p>
      </div>
    </div>
  );
}

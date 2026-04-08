import { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import api from '../api/api';
import SearchInput from '../components/SearchInput';
import MapView from '../components/MapView';

export default function MapPage() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    api.get('/projects').then((res) => setProjects(res.data)).catch(() => {});
  }, []);

  const filtered = projects.filter((p) =>
    `${p.name} ${p.address}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex gap-0 -m-6 lg:-m-10 h-[calc(100vh)]">
      <div className="w-[380px] bg-white border-r border-border flex flex-col">
        <div className="p-5 border-b border-border">
          <h1 className="page-title mb-3">Térkép</h1>
          <SearchInput placeholder="Cím keresése..." value={search} onChange={setSearch} />
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {filtered.map((p) => (
            <div key={p.id} className="p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <h3 className="text-sm font-semibold text-text">{p.name}</h3>
              <p className="text-xs text-text-muted flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3" />{p.address}
              </p>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-sm text-text-muted text-center py-8">Nincs találat</p>
          )}
        </div>
      </div>
      <div className="flex-1">
        <MapView projects={filtered} />
      </div>
    </div>
  );
}

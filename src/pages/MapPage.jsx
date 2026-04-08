import { useEffect, useState } from 'react';
import api from '../api/api';
import SearchInput from '../components/SearchInput';
import MapView from '../components/MapView';

export default function MapPage() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => { api.get('/projects').then((res) => setProjects(res.data)).catch(() => {}); }, []);
  const filtered = projects.filter((p) => `${p.name} ${p.address}`.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="flex gap-0 -m-12 h-[calc(100vh)]">
      <div className="w-[420px] bg-white border-r border-border p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4">Map</h1>
        <SearchInput placeholder="Search address" value={search} onChange={setSearch} className="mb-4" />
        <div className="space-y-2">
          {filtered.map((p) => <div key={p.id} className="p-3 border rounded-lg"><h3 className="font-semibold">{p.name}</h3><p className="text-sm text-text-muted">{p.address}</p></div>)}
        </div>
      </div>
      <div className="flex-1"><MapView projects={filtered} /></div>
    </div>
  );
}

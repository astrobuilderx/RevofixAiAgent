import { useEffect, useState } from 'react';
import { Plus, RefreshCw, FolderOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../api/api';
import SearchInput from '../components/SearchInput';
import TabGroup from '../components/TabGroup';
import ProjectCard from '../components/ProjectCard';

const tabs = [
  { value: 'all', label: 'Összes' },
  { value: 'starred', label: 'Csillagozott' },
  { value: 'active', label: 'Aktív' },
  { value: 'archived', label: 'Archivált' }
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await api.get('/projects');
      setProjects(res.data);
    } catch {
      toast.error('Projektek betöltése sikertelen');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProjects(); }, []);

  const filtered = projects.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      (p.address || '').toLowerCase().includes(search.toLowerCase());
    if (activeTab === 'all') return matchesSearch;
    if (activeTab === 'starred') return matchesSearch && p.status === 'starred';
    if (activeTab === 'active') return matchesSearch && p.status === 'active';
    if (activeTab === 'archived') return matchesSearch && p.status === 'archived';
    return matchesSearch;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="page-title">Projektek</h1>
        <div className="flex items-center gap-2">
          <button onClick={fetchProjects} className="btn-ghost" title="Frissítés">
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <button onClick={() => navigate('/projects/new')} className="btn-primary">
            <Plus className="w-4 h-4" />Új Projekt
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6 flex-wrap">
        <SearchInput placeholder="Projekt keresése..." value={search} onChange={setSearch} className="w-80" />
        <TabGroup tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </div>

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card p-4 animate-pulse">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg bg-gray-200" />
                <div className="flex-1 space-y-2">
                  <div className="h-5 bg-gray-200 rounded w-1/3" />
                  <div className="h-4 bg-gray-100 rounded w-1/2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="card p-12 text-center">
          <FolderOpen className="w-12 h-12 text-text-muted mx-auto mb-3" />
          <p className="text-text-secondary font-medium">Nincs találat</p>
          <p className="text-sm text-text-muted mt-1">Próbálj más keresési kifejezést vagy hozz létre új projektet.</p>
        </div>
      ) : (
        <div className="card divide-y divide-border/50">
          {filtered.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      )}

      <p className="text-xs text-text-muted mt-4">{filtered.length} projekt</p>
    </div>
  );
}

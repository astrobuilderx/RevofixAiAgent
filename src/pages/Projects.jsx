import { useEffect, useState } from 'react';
import { Plus, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../api/api';
import SearchInput from '../components/SearchInput';
import TabGroup from '../components/TabGroup';
import ProjectCard from '../components/ProjectCard';

const tabs = [
  { value: 'all', label: 'All' },
  { value: 'starred', label: 'Starred' },
  { value: 'mine', label: 'My Projects' },
  { value: 'archived', label: 'Archived' }
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
      const res = await api.get('/projects', { params: { status: activeTab, search } });
      setProjects(res.data);
    } catch {
      toast.error('Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProjects(); }, [activeTab]);

  const filtered = projects.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    (p.address || '').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-text">Projects</h1>
      </div>
      <div className="flex items-center gap-4 mb-6 flex-wrap">
        <SearchInput placeholder="Find a project..." value={search} onChange={setSearch} className="w-80" />
        <button onClick={() => navigate('/projects/new')} className="btn-primary"><Plus className="w-4 h-4" />Create</button>
        <button onClick={fetchProjects} className="btn-ghost"><RefreshCw className="w-4 h-4" />Refresh</button>
      </div>
      <div className="mb-6"><TabGroup tabs={tabs} activeTab={activeTab} onChange={setActiveTab} /></div>
      {loading ? <div>Loading...</div> : <div className="card divide-y divide-border/50">{filtered.map((p) => <ProjectCard key={p.id} project={p} />)}</div>}
    </div>
  );
}

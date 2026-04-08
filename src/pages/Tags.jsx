import { useEffect, useState } from 'react';
import { Plus, Tag as TagIcon, Image } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '../api/api';
import SearchInput from '../components/SearchInput';

export default function Tags() {
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [newTagName, setNewTagName] = useState('');
  const [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    api.get('/tags')
      .then((res) => setTags(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const createTag = async () => {
    if (!newTagName.trim()) return;
    try {
      const res = await api.post('/tags', { name: newTagName.trim() });
      setTags((prev) => [...prev, res.data]);
      setNewTagName('');
      setShowCreate(false);
      toast.success('Címke létrehozva');
    } catch {
      toast.error('Címke létrehozása sikertelen');
    }
  };

  const filtered = tags.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  const tagColors = [
    'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500',
    'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500'
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="page-title">Címkék</h1>
        <button className="btn-primary" onClick={() => setShowCreate(true)}>
          <Plus className="w-4 h-4" />Új Címke
        </button>
      </div>

      <SearchInput value={search} onChange={setSearch} placeholder="Címke keresése..." className="w-80 mb-6" />

      {showCreate && (
        <div className="card p-4 mb-4 flex items-center gap-3">
          <input
            autoFocus
            value={newTagName}
            onChange={(e) => setNewTagName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && createTag()}
            className="input-field flex-1"
            placeholder="Címke neve..."
          />
          <button className="btn-primary" onClick={createTag}>Létrehozás</button>
          <button className="btn-ghost" onClick={() => { setShowCreate(false); setNewTagName(''); }}>Mégse</button>
        </div>
      )}

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card p-4 animate-pulse">
              <div className="h-5 bg-gray-200 rounded w-1/2" />
            </div>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="card p-12 text-center">
          <TagIcon className="w-12 h-12 text-text-muted mx-auto mb-3" />
          <p className="text-text-secondary font-medium">Nincsenek címkék</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((tag, idx) => (
            <div key={tag.id} className="card px-5 py-4 flex items-center gap-3 hover:shadow-md transition-shadow cursor-pointer">
              <div className={`w-3 h-3 rounded-full ${tagColors[idx % tagColors.length]}`} />
              <div className="flex-1 min-w-0">
                <span className="text-sm font-semibold text-text">{tag.name}</span>
              </div>
              <span className="text-xs text-text-muted flex items-center gap-1">
                <Image className="w-3 h-3" />{tag.photoCount || 0}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

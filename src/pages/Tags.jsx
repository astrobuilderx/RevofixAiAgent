import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '../api/api';
import SearchInput from '../components/SearchInput';

export default function Tags() {
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => { api.get('/tags').then((res) => setTags(res.data)).catch(() => {}); }, []);
  const createTag = async () => {
    const name = prompt('Tag name');
    if (!name) return;
    try {
      const res = await api.post('/tags', { name });
      setTags((prev) => [...prev, res.data]);
    } catch {
      toast.error('Failed to create tag');
    }
  };
  const filtered = tags.filter((t) => t.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">Tags</h1>
          <SearchInput value={search} onChange={setSearch} className="w-64" />
        </div>
        <button className="btn-primary" onClick={createTag}><Plus className="w-4 h-4" />Create Tag</button>
      </div>
      <div className="card divide-y divide-border/50">
        {filtered.map((tag) => <div key={tag.id} className="p-4 flex items-center justify-between"><span>{tag.name}</span><span className="text-sm text-text-muted">{tag.photoCount || 0} photos</span></div>)}
      </div>
    </div>
  );
}

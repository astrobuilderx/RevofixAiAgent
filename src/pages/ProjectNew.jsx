import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ArrowLeft } from 'lucide-react';
import api from '../api/api';

export default function ProjectNew() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post('/projects', { name, address });
      toast.success('Projekt létrehozva!');
      navigate(`/projects/${res.data.id}`);
    } catch {
      toast.error('Projekt létrehozása sikertelen');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl">
      <button onClick={() => navigate('/projects')} className="btn-ghost mb-4 -ml-3">
        <ArrowLeft className="w-4 h-4" />Vissza
      </button>
      <h1 className="page-title mb-6">Új Projekt Létrehozása</h1>
      <div className="card p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1.5">Projekt neve *</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              placeholder="pl. Családi ház felújítás"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1.5">Cím</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="input-field"
              placeholder="pl. Budapest, Fő utca 1."
            />
          </div>
          <div className="flex gap-3 pt-2">
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Létrehozás...' : 'Projekt Létrehozása'}
            </button>
            <button type="button" className="btn-secondary" onClick={() => navigate('/projects')}>Mégse</button>
          </div>
        </form>
      </div>
    </div>
  );
}

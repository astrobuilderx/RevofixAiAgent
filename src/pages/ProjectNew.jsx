import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
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
      toast.success('Project created');
      navigate(`/projects/${res.data.id}`);
    } catch {
      toast.error('Failed to create project');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold text-text mb-6">Create New Project</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input value={name} onChange={(e) => setName(e.target.value)} className="input-field" placeholder="Project name" required />
        <input value={address} onChange={(e) => setAddress(e.target.value)} className="input-field" placeholder="Project address" />
        <div className="flex gap-3">
          <button className="btn-primary" disabled={loading}>{loading ? 'Creating...' : 'Create Project'}</button>
          <button type="button" className="btn-secondary" onClick={() => navigate('/projects')}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('password');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      navigate('/projects');
      toast.success('Welcome back');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-sidebar flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6">ProjectCam</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" />
          <button className="btn-primary w-full justify-center" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
        </form>
      </div>
    </div>
  );
}

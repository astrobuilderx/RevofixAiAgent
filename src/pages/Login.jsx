import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { Camera, LogIn } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('kovacs.peter@revofix.hu');
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
      toast.success('Sikeres bejelentkezés!');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Bejelentkezés sikertelen');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sidebar via-[rgb(20,40,60)] to-[rgb(15,30,50)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-4">
            <Camera className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">ProjectCam</h1>
          <p className="text-white/60">Projektkezelés fotó dokumentációval</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h2 className="text-xl font-bold text-text mb-6">Bejelentkezés</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1.5">E-mail cím</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="pelda@ceg.hu"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1.5">Jelszó</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="Jelszó"
                required
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full justify-center h-11 text-[15px]"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                  Bejelentkezés...
                </span>
              ) : (
                <span className="flex items-center gap-2"><LogIn className="w-4 h-4" />Bejelentkezés</span>
              )}
            </button>
          </form>
          <div className="mt-6 pt-5 border-t border-border">
            <p className="text-xs text-text-muted text-center">Demo fiók: kovacs.peter@revofix.hu / password</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Save, User, Building, Bell } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

export default function Settings() {
  const { user, setUser } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [company, setCompany] = useState(user?.companyName || '');
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setUser({ ...user, name, email, companyName: company });
      toast.success('Beállítások mentve');
      setSaving(false);
    }, 500);
  };

  return (
    <div className="max-w-2xl">
      <h1 className="page-title mb-8">Beállítások</h1>

      <div className="space-y-6">
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-text">Profil adatok</h2>
              <p className="text-xs text-text-muted">Személyes információk szerkesztése</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1.5">Teljes név</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1.5">E-mail cím</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" type="email" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <Building className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-text">Cég adatok</h2>
              <p className="text-xs text-text-muted">Vállalkozás információk</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1.5">Cégnév</label>
            <input value={company} onChange={(e) => setCompany(e.target.value)} className="input-field" />
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <Bell className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-text">Értesítések</h2>
              <p className="text-xs text-text-muted">Értesítési beállítások kezelése</p>
            </div>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-sm text-text">E-mail értesítések</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-primary" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm text-text">Új komment értesítés</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-primary" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm text-text">Feladat emlékeztető</span>
              <input type="checkbox" className="w-4 h-4 rounded text-primary" />
            </label>
          </div>
        </div>

        <button onClick={handleSave} className="btn-primary" disabled={saving}>
          <Save className="w-4 h-4" />{saving ? 'Mentés...' : 'Változások Mentése'}
        </button>
      </div>
    </div>
  );
}

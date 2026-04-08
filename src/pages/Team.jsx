import { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import api from '../api/api';
import SearchInput from '../components/SearchInput';
import UserAvatar from '../components/UserAvatar';

const roleBadge = {
  admin: 'badge-blue',
  manager: 'badge-green',
  user: 'badge-gray'
};

const roleLabel = {
  admin: 'Admin',
  manager: 'Vezető',
  user: 'Munkatárs'
};

export default function Team() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/users')
      .then((res) => setUsers(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="page-title">Csapat</h1>
        <span className="text-sm text-text-muted">{users.length} tag</span>
      </div>

      <SearchInput placeholder="Tag keresése..." value={search} onChange={setSearch} className="w-80 mb-6" />

      {loading ? (
        <div className="card divide-y divide-border/50">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 animate-pulse flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-200" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/4" />
                <div className="h-3 bg-gray-100 rounded w-1/3" />
              </div>
            </div>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="card p-12 text-center">
          <Users className="w-12 h-12 text-text-muted mx-auto mb-3" />
          <p className="text-text-secondary font-medium">Nincs találat</p>
        </div>
      ) : (
        <div className="card divide-y divide-border/50">
          {filtered.map((u) => (
            <div key={u.id} className="flex items-center gap-4 px-5 py-4">
              <UserAvatar name={u.name} size="lg" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-text">{u.name}</p>
                <p className="text-xs text-text-muted">{u.email}</p>
              </div>
              {u.phone && <span className="text-sm text-text-secondary hidden sm:block">{u.phone}</span>}
              <span className={roleBadge[u.role] || 'badge-gray'}>{roleLabel[u.role] || u.role}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

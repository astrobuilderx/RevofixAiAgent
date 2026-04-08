import { useEffect, useState } from 'react';
import api from '../api/api';
import SearchInput from '../components/SearchInput';
import UserAvatar from '../components/UserAvatar';

export default function Team() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => { api.get('/users').then((res) => setUsers(res.data)).catch(() => {}); }, []);
  const filtered = users.filter((u) => u.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Team</h1>
      <SearchInput placeholder="Find a user..." value={search} onChange={setSearch} className="w-80 mb-6" />
      <div className="card">
        <table className="w-full">
          <thead><tr className="border-b border-border"><th className="text-left px-4 py-3">Name</th><th className="text-left px-4 py-3">Role</th><th className="text-left px-4 py-3">Email</th></tr></thead>
          <tbody>
            {filtered.map((u) => <tr key={u.id} className="border-b border-border/50"><td className="px-4 py-3 flex items-center gap-3"><UserAvatar name={u.name} size="sm" />{u.name}</td><td className="px-4 py-3">{u.role}</td><td className="px-4 py-3">{u.email}</td></tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import api from '../api/api';
import TabGroup from '../components/TabGroup';

const tabs = [{ value: 'all', label: 'All' }, { value: 'finished', label: 'Finished' }, { value: 'unfinished', label: 'Unfinished' }];

export default function Checklists() {
  const [checklists, setChecklists] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  useEffect(() => { api.get('/checklists', { params: { status: activeTab } }).then((res) => setChecklists(res.data)).catch(() => {}); }, [activeTab]);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Checklist Feed</h1>
      <div className="mb-6"><TabGroup tabs={tabs} activeTab={activeTab} onChange={setActiveTab} /></div>
      <div className="space-y-3">{checklists.map((c) => <div key={c.id} className="card p-4"><h3 className="font-semibold">{c.title}</h3><p className="text-sm text-text-muted">{c.projectName}</p></div>)}</div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { CheckSquare, CheckCircle2, Circle } from 'lucide-react';
import api from '../api/api';
import TabGroup from '../components/TabGroup';

const tabs = [
  { value: 'all', label: 'Összes' },
  { value: 'finished', label: 'Kész' },
  { value: 'unfinished', label: 'Folyamatban' }
];

export default function Checklists() {
  const [checklists, setChecklists] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.get('/checklists', { params: { status: activeTab } })
      .then((res) => setChecklists(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [activeTab]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="page-title">Ellenőrzések</h1>
        <span className="text-sm text-text-muted">{checklists.length} elem</span>
      </div>

      <div className="mb-6">
        <TabGroup tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </div>

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card p-4 animate-pulse">
              <div className="h-5 bg-gray-200 rounded w-1/3 mb-2" />
              <div className="h-4 bg-gray-100 rounded w-1/4" />
            </div>
          ))}
        </div>
      ) : checklists.length === 0 ? (
        <div className="card p-12 text-center">
          <CheckSquare className="w-12 h-12 text-text-muted mx-auto mb-3" />
          <p className="text-text-secondary font-medium">Nincsenek ellenőrzések</p>
        </div>
      ) : (
        <div className="space-y-2">
          {checklists.map((c) => (
            <div key={c.id} className="card px-5 py-4 flex items-center gap-4">
              {c.status === 'finished' ? (
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              ) : (
                <Circle className="w-5 h-5 text-text-muted flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-text">{c.title}</h3>
                <p className="text-xs text-text-muted mt-0.5">{c.projectName}</p>
              </div>
              <span className={c.status === 'finished' ? 'badge-green' : 'badge-yellow'}>
                {c.status === 'finished' ? 'Kész' : 'Folyamatban'}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

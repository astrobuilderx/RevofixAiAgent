import { useState } from 'react';
const tabs = ['Projects', 'Checklists', 'Reports', 'Files', 'Pages'];
export default function Templates() {
  const [active, setActive] = useState('Projects');
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Templates</h1>
      <div className="flex gap-4 border-b border-border mb-8">{tabs.map((t) => <button key={t} onClick={() => setActive(t)} className={`pb-2 border-b-2 ${active === t ? 'border-primary text-text font-semibold' : 'border-transparent text-text-secondary'}`}>{t}</button>)}</div>
      <div className="card p-8">{active} templates placeholder.</div>
    </div>
  );
}

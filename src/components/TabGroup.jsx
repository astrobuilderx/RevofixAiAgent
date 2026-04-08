export default function TabGroup({ tabs, activeTab, onChange }) {
  return (
    <div className="flex items-center bg-primary-light rounded-lg p-2 gap-1">
      {tabs.map((tab) => (
        <button key={tab.value} onClick={() => onChange(tab.value)} className={`px-3 py-1 rounded-lg text-xs font-semibold ${activeTab === tab.value ? 'bg-white text-text shadow-sm' : 'text-text-secondary hover:text-text'}`}>
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default function TabGroup({ tabs, activeTab, onChange }) {
  return (
    <div className="inline-flex items-center bg-gray-100 rounded-lg p-1 gap-0.5">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
            activeTab === tab.value
              ? 'bg-white text-text shadow-sm'
              : 'text-text-secondary hover:text-text'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

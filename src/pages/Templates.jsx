import { useState } from 'react';
import { FileStack, Plus, FolderOpen, CheckSquare, FileText, File, BookOpen } from 'lucide-react';

const templateTabs = [
  { key: 'projects', label: 'Projektek', icon: FolderOpen },
  { key: 'checklists', label: 'Ellenőrzések', icon: CheckSquare },
  { key: 'reports', label: 'Jelentések', icon: FileText },
  { key: 'files', label: 'Fájlok', icon: File },
  { key: 'pages', label: 'Oldalak', icon: BookOpen }
];

const mockTemplates = {
  projects: [
    { id: 1, name: 'Családi ház felújítás', description: 'Alapértelmezett sablon lakóépület felújításhoz' },
    { id: 2, name: 'Kereskedelmi épület', description: 'Iroda és üzlethelyiség projekt sablon' }
  ],
  checklists: [
    { id: 3, name: 'Helyszíni szemle', description: 'Általános helyszíni szemle ellenőrzőlista' },
    { id: 4, name: 'Biztonsági ellenőrzés', description: 'Munkabiztonsági ellenőrzőlista' }
  ],
  reports: [
    { id: 5, name: 'Heti haladási jelentés', description: 'Heti fotós haladási jelentés sablon' }
  ],
  files: [],
  pages: []
};

export default function Templates() {
  const [active, setActive] = useState('projects');
  const templates = mockTemplates[active] || [];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="page-title">Sablonok</h1>
        <button className="btn-primary">
          <Plus className="w-4 h-4" />Új Sablon
        </button>
      </div>

      <div className="flex gap-1 border-b border-border mb-6">
        {templateTabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
              active === t.key
                ? 'border-primary text-primary'
                : 'border-transparent text-text-secondary hover:text-text hover:border-gray-300'
            }`}
          >
            <t.icon className="w-4 h-4" />
            {t.label}
          </button>
        ))}
      </div>

      {templates.length === 0 ? (
        <div className="card p-12 text-center">
          <FileStack className="w-12 h-12 text-text-muted mx-auto mb-3" />
          <p className="text-text-secondary font-medium">Nincsenek sablonok ebben a kategóriában</p>
          <p className="text-sm text-text-muted mt-1">Hozz létre egy új sablont a gyorsabb munka érdekében.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((t) => (
            <div key={t.id} className="card p-5 hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <FileStack className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-text mb-1">{t.name}</h3>
              <p className="text-xs text-text-muted">{t.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import { FileText, Download, Calendar } from 'lucide-react';

const mockReports = [
  { id: 1, title: 'Heti haladási jelentés - Budai Ház', date: '2026-04-07', type: 'Haladás' },
  { id: 2, title: 'Fotó dokumentáció - Siófoki Nyaraló', date: '2026-04-05', type: 'Fotó' },
  { id: 3, title: 'Költségvetés összesítő - Q1', date: '2026-03-31', type: 'Pénzügyi' },
  { id: 4, title: 'Biztonsági ellenőrzés - Debrecen', date: '2026-03-28', type: 'Biztonság' }
];

export default function Reports() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="page-title">Jelentések</h1>
        <button className="btn-primary">
          <FileText className="w-4 h-4" />Új Jelentés
        </button>
      </div>

      <div className="space-y-2">
        {mockReports.map((report) => (
          <div key={report.id} className="card px-5 py-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-text">{report.title}</h3>
              <p className="text-xs text-text-muted flex items-center gap-1 mt-0.5">
                <Calendar className="w-3 h-3" />
                {new Date(report.date).toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            <span className="badge-blue">{report.type}</span>
            <button className="btn-ghost">
              <Download className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 card p-8 text-center">
        <FileText className="w-12 h-12 text-text-muted mx-auto mb-3" />
        <p className="text-text-secondary font-medium">Professzionális PDF jelentések</p>
        <p className="text-sm text-text-muted mt-1">A teljes jelentéskészítő modul hamarosan elérhető.</p>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { Image } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '../api/api';
import PhotoGrid from '../components/PhotoGrid';
import SearchInput from '../components/SearchInput';

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    api.get('/photos')
      .then((res) => setPhotos(res.data))
      .catch(() => toast.error('Fotók betöltése sikertelen'))
      .finally(() => setLoading(false));
  }, []);

  const filtered = photos.filter((p) =>
    (p.userName || '').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="page-title">Fotók</h1>
        <span className="text-sm text-text-muted">{filtered.length} fotó</span>
      </div>

      <SearchInput
        placeholder="Keresés feltöltő szerint..."
        value={search}
        onChange={setSearch}
        className="w-80 mb-6"
      />

      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square rounded-lg bg-gray-200 animate-pulse" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="card p-12 text-center">
          <Image className="w-12 h-12 text-text-muted mx-auto mb-3" />
          <p className="text-text-secondary font-medium">Nincsenek fotók</p>
        </div>
      ) : (
        <PhotoGrid photos={filtered} onPhotoClick={(p) => window.open(p.imageUrl, '_blank')} />
      )}
    </div>
  );
}

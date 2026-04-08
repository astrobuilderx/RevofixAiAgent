import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import api from '../api/api';
import PhotoGrid from '../components/PhotoGrid';

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api.get('/photos').then((res) => setPhotos(res.data)).catch(() => toast.error('Failed to load photos')).finally(() => setLoading(false));
  }, []);
  return <div>{loading ? 'Loading...' : <PhotoGrid photos={photos} />}</div>;
}

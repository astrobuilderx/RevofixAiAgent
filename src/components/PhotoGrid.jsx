import { format, parseISO } from 'date-fns';
import PhotoThumbnail from './PhotoThumbnail';

export default function PhotoGrid({ photos, onPhotoClick }) {
  const grouped = photos.reduce((acc, photo) => {
    const key = format(parseISO(photo.createdAt), 'yyyy-MM-dd');
    if (!acc[key]) acc[key] = [];
    acc[key].push(photo);
    return acc;
  }, {});
  const dates = Object.keys(grouped).sort((a, b) => b.localeCompare(a));
  return (
    <div className="space-y-8">
      {dates.map((date) => (
        <div key={date}>
          <h3 className="text-base font-semibold text-text mb-4">{format(parseISO(date), 'EEEE, MMMM do, yyyy')}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {grouped[date].map((photo) => <PhotoThumbnail key={photo.id} photo={photo} onClick={onPhotoClick} />)}
          </div>
        </div>
      ))}
    </div>
  );
}

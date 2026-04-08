import { format, parseISO } from 'date-fns';
import { hu } from 'date-fns/locale';
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
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-text">
              {format(parseISO(date), "yyyy. MMMM d., EEEE", { locale: hu })}
            </h3>
            <span className="text-xs text-text-muted">{grouped[date].length} fotó</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {grouped[date].map((photo) => (
              <PhotoThumbnail key={photo.id} photo={photo} onClick={onPhotoClick} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

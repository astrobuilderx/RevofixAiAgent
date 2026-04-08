import { useState } from 'react';
import UserAvatar from './UserAvatar';

export default function PhotoThumbnail({ photo, onClick }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className="group relative cursor-pointer"
      onClick={() => onClick?.(photo)}
    >
      <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
        {!loaded && !error && (
          <div className="absolute inset-0 animate-pulse bg-gray-200" />
        )}
        {error ? (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs">
            Nem elérhető
          </div>
        ) : (
          <img
            src={photo.thumbnailUrl || photo.imageUrl}
            alt=""
            className={`w-full h-full object-cover transition-opacity duration-200 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        <div className="absolute bottom-1.5 left-1.5">
          <UserAvatar name={photo.userName || 'User'} size="sm" />
        </div>
      </div>
    </div>
  );
}

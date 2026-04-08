import { useState } from 'react';
import UserAvatar from './UserAvatar';

export default function PhotoThumbnail({ photo, onClick }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="group relative cursor-pointer" onClick={() => onClick?.(photo)}>
      <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-200">
        {!loaded && <div className="absolute inset-0 animate-pulse bg-gray-300" />}
        <img src={photo.thumbnailUrl || photo.imageUrl} alt="" className={`w-full h-full object-cover ${loaded ? '' : 'opacity-0'}`} onLoad={() => setLoaded(true)} />
        <div className="absolute bottom-2 left-2"><UserAvatar name={photo.userName || 'User'} size="sm" /></div>
      </div>
    </div>
  );
}

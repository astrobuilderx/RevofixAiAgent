import { Link } from 'react-router-dom';
import { Image, MapPin, Clock, Star } from 'lucide-react';
import UserAvatar from './UserAvatar';

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="flex items-center gap-4 px-4 py-4 hover:bg-gray-50/80 transition-colors"
    >
      <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
        {project.coverPhotoUrl ? (
          <img src={project.coverPhotoUrl} alt="" className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <Image className="w-8 h-8" />
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h2 className="text-[15px] font-semibold text-text truncate">{project.name}</h2>
          {project.status === 'starred' && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 flex-shrink-0" />}
        </div>
        {project.address && (
          <p className="text-sm text-text-secondary truncate flex items-center gap-1 mt-0.5">
            <MapPin className="w-3 h-3 flex-shrink-0" />{project.address}
          </p>
        )}
        <div className="flex items-center gap-3 mt-1.5">
          <span className="text-xs text-text-muted flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {new Date(project.updatedAt).toLocaleDateString('hu-HU', { year: 'numeric', month: 'short', day: 'numeric' })}
          </span>
          <span className="text-xs text-text-muted flex items-center gap-1">
            <Image className="w-3 h-3" />{project.photoCount || 0} fotó
          </span>
        </div>
      </div>
      <div className="flex-shrink-0 flex items-center gap-3">
        <UserAvatar name={project.recentUser || 'User'} size="sm" />
      </div>
    </Link>
  );
}

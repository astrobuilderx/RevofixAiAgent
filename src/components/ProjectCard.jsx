import { Link } from 'react-router-dom';
import UserAvatar from './UserAvatar';

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="flex items-center gap-4 px-3 py-4 rounded-lg hover:bg-gray-50 transition-colors border-b border-border/50 last:border-b-0">
      <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
        {project.coverPhotoUrl ? <img src={project.coverPhotoUrl} alt="" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center">📷</div>}
      </div>
      <div className="flex-1 min-w-0">
        <h2 className="text-lg font-bold text-text truncate">{project.name}</h2>
        <h3 className="text-sm text-text-secondary truncate">{project.address}</h3>
        <p className="text-xs text-text-muted mt-1">Last updated {new Date(project.updatedAt).toLocaleString()}</p>
      </div>
      <div className="text-center">
        <p className="text-xs text-text-muted">Photos</p>
        <p className="text-xl font-bold text-text">{project.photoCount || 0}</p>
      </div>
      <UserAvatar name={project.recentUser || 'User'} size="sm" />
    </Link>
  );
}

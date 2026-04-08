import { NavLink, useNavigate } from 'react-router-dom';
import { FolderOpen, Image, CheckSquare, FileText, Map, Users, Tag, FileStack, Settings, LogOut, Plus, Camera } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import UserAvatar from './UserAvatar';

const navItems = [
  { to: '/projects', icon: FolderOpen, label: 'Projektek' },
  { to: '/photos', icon: Image, label: 'Fotók' },
  { to: '/checklists', icon: CheckSquare, label: 'Ellenőrzések' },
  { to: '/reports', icon: FileText, label: 'Jelentések' },
  { to: '/map', icon: Map, label: 'Térkép' },
  { to: '/team', icon: Users, label: 'Csapat' },
  { to: '/tags', icon: Tag, label: 'Címkék' },
  { to: '/templates', icon: FileStack, label: 'Sablonok' }
];

export default function Sidebar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="fixed left-0 top-0 bottom-0 w-[240px] bg-sidebar flex flex-col text-white overflow-y-auto z-40 lg:translate-x-0">
      <div className="p-4 border-b border-white/10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary/30 flex items-center justify-center flex-shrink-0">
          <Camera className="w-4 h-4" />
        </div>
        <button className="font-bold text-lg tracking-tight" onClick={() => navigate('/projects')}>ProjectCam</button>
      </div>

      <div className="px-4 py-3 border-b border-white/5">
        <div className="flex items-center gap-3">
          <UserAvatar name={user?.name || 'User'} size="sm" />
          <div className="min-w-0">
            <p className="text-sm font-medium truncate">{user?.name || 'Felhasználó'}</p>
            <p className="text-xs text-white/50 truncate">{user?.companyName || 'Cég'}</p>
          </div>
        </div>
      </div>

      <div className="px-3 py-3 space-y-0.5 flex-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-colors ${
                isActive
                  ? 'bg-white/15 text-white'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`
            }
          >
            <item.icon className="w-[18px] h-[18px] flex-shrink-0" />
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="px-3 py-3 space-y-0.5 border-t border-white/10">
        <button
          onClick={() => navigate('/projects/new')}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium text-white bg-primary/40 hover:bg-primary/60 transition-colors"
        >
          <Plus className="w-[18px] h-[18px]" />
          Új Projekt
        </button>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-colors ${
              isActive ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
            }`
          }
        >
          <Settings className="w-[18px] h-[18px]" />
          Beállítások
        </NavLink>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium text-red-300/80 hover:bg-white/10 hover:text-red-300 transition-colors"
        >
          <LogOut className="w-[18px] h-[18px]" />
          Kijelentkezés
        </button>
      </div>
    </nav>
  );
}

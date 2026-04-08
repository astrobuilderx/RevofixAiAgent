import { NavLink, useNavigate } from 'react-router-dom';
import { FolderOpen, Image, CheckSquare, FileText, Map, Users, Tag, FileStack, Settings, LogOut, Plus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const navItems = [
  { to: '/projects', icon: FolderOpen, label: 'Projects' },
  { to: '/photos', icon: Image, label: 'Photos' },
  { to: '/checklists', icon: CheckSquare, label: 'Checklists' },
  { to: '/reports', icon: FileText, label: 'Reports' },
  { to: '/map', icon: Map, label: 'Map' },
  { to: '/team', icon: Users, label: 'Team' },
  { to: '/tags', icon: Tag, label: 'Tags' },
  { to: '/templates', icon: FileStack, label: 'Templates' }
];

export default function Sidebar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  return (
    <nav className="fixed left-0 top-0 bottom-0 w-[230px] bg-sidebar flex flex-col text-white overflow-y-auto">
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <button className="font-bold text-lg" onClick={() => navigate('/projects')}>ProjectCam</button>
        <button className="w-8 h-8 rounded-lg hover:bg-sidebar-hover flex items-center justify-center" onClick={() => navigate('/projects/new')}>
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <div className="px-4 py-3 text-sm text-white/70">{user?.companyName || 'My Company'}</div>
      <div className="px-2 space-y-1 flex-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${isActive ? 'bg-sidebar-active text-white' : 'text-white/80 hover:bg-sidebar-hover hover:text-white'}`}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </NavLink>
        ))}
      </div>
      <div className="border-t border-white/10 p-2 space-y-1">
        <NavLink to="/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-white/80 hover:bg-sidebar-hover"> <Settings className="w-4 h-4" /> Settings </NavLink>
        <button onClick={logout} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-300 hover:bg-sidebar-hover"><LogOut className="w-4 h-4" /> Sign out</button>
      </div>
    </nav>
  );
}

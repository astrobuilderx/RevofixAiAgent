import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthContext';
import Layout from './components/Layout';
import Login from './pages/Login';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import ProjectNew from './pages/ProjectNew';
import Photos from './pages/Photos';
import MapPage from './pages/MapPage';
import Team from './pages/Team';
import Checklists from './pages/Checklists';
import Reports from './pages/Reports';
import Tags from './pages/Tags';
import Templates from './pages/Templates';
import Settings from './pages/Settings';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  return user ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route index element={<Navigate to="/projects" />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/new" element={<ProjectNew />} />
          <Route path="projects/:id/*" element={<ProjectDetail />} />
          <Route path="photos" element={<Photos />} />
          <Route path="map" element={<MapPage />} />
          <Route path="team" element={<Team />} />
          <Route path="checklists" element={<Checklists />} />
          <Route path="reports" element={<Reports />} />
          <Route path="tags" element={<Tags />} />
          <Route path="templates" element={<Templates />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

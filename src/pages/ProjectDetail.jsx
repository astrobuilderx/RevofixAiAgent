import { useEffect, useState, useCallback } from 'react';
import { useParams, NavLink, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, MapPin, Calendar, Image, Camera } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';
import api from '../api/api';
import { useAuth } from '../context/AuthContext';
import PhotoGrid from '../components/PhotoGrid';
import CommentBox from '../components/CommentBox';
import TaskList from '../components/TaskList';
import UserAvatar from '../components/UserAvatar';

function ProjectPhotos({ projectId }) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  const fetchPhotos = async () => {
    try {
      const res = await api.get(`/projects/${projectId}/photos`);
      setPhotos(res.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPhotos(); }, [projectId]);

  const onDrop = useCallback(async (files) => {
    setUploading(true);
    const form = new FormData();
    files.forEach((f) => form.append('photos', f));
    try {
      await api.post(`/projects/${projectId}/photos`, form, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success(`${files.length} fotó feltöltve`);
      fetchPhotos();
    } catch {
      toast.error('Feltöltés sikertelen');
    } finally {
      setUploading(false);
    }
  }, [projectId]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] }
  });

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="aspect-square rounded-lg bg-gray-200 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div>
      <div
        {...getRootProps()}
        className={`mb-6 border-2 border-dashed rounded-xl p-6 text-center transition-colors cursor-pointer ${
          isDragActive ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
        }`}
      >
        <input {...getInputProps()} />
        <Camera className="w-8 h-8 text-text-muted mx-auto mb-2" />
        {uploading ? (
          <p className="text-sm text-primary font-medium">Feltöltés folyamatban...</p>
        ) : isDragActive ? (
          <p className="text-sm text-primary font-medium">Engedd el a fotókat itt</p>
        ) : (
          <>
            <p className="text-sm text-text-secondary font-medium">Húzd ide a fotókat vagy kattints a feltöltéshez</p>
            <p className="text-xs text-text-muted mt-1">JPG, PNG, WebP</p>
          </>
        )}
      </div>
      {photos.length > 0 ? (
        <PhotoGrid photos={photos} onPhotoClick={(p) => window.open(p.imageUrl, '_blank')} />
      ) : (
        <div className="text-center py-12">
          <Image className="w-12 h-12 text-text-muted mx-auto mb-3" />
          <p className="text-text-secondary font-medium">Még nincsenek fotók</p>
          <p className="text-sm text-text-muted mt-1">Tölts fel fotókat a fenti területre húzva.</p>
        </div>
      )}
    </div>
  );
}

const EmptyTab = ({ label }) => (
  <div className="text-center py-16">
    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mx-auto mb-3">
      <Image className="w-6 h-6 text-text-muted" />
    </div>
    <p className="text-text-secondary font-medium">{label}</p>
    <p className="text-sm text-text-muted mt-1">Ez a modul hamarosan elérhető.</p>
  </div>
);

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [project, setProject] = useState(null);
  const [comments, setComments] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      api.get(`/projects/${id}`),
      api.get(`/projects/${id}/comments`),
      api.get(`/projects/${id}/tasks`)
    ]).then(([p, c, t]) => {
      setProject(p.data);
      setComments(c.data);
      setTasks(t.data);
    }).catch(() => {
      toast.error('Projekt betöltése sikertelen');
      navigate('/projects');
    }).finally(() => setLoading(false));
  }, [id]);

  if (loading || !project) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-48 mb-6" />
        <div className="flex gap-4 items-start mb-6">
          <div className="w-28 h-28 rounded-xl bg-gray-200" />
          <div className="space-y-2 flex-1">
            <div className="h-6 bg-gray-200 rounded w-2/3" />
            <div className="h-4 bg-gray-100 rounded w-1/2" />
          </div>
        </div>
      </div>
    );
  }

  const addComment = async (content) => {
    const res = await api.post(`/projects/${id}/comments`, { content });
    setComments((prev) => [...prev, res.data]);
    toast.success('Hozzászólás elküldve');
  };

  const addTask = async (title) => {
    const res = await api.post(`/projects/${id}/tasks`, { title });
    setTasks((prev) => [...prev, res.data]);
    toast.success('Feladat létrehozva');
  };

  const toggleTask = async (taskId) => {
    const res = await api.put(`/tasks/${taskId}`);
    setTasks((prev) => prev.map((task) => task.id === taskId ? res.data : task));
  };

  const projectTabs = [
    { key: 'photos', label: 'Fotók' },
    { key: 'pages', label: 'Oldalak' },
    { key: 'files', label: 'Fájlok' },
    { key: 'payments', label: 'Fizetések' },
    { key: 'checklists', label: 'Ellenőrzések' },
    { key: 'reports', label: 'Jelentések' }
  ];

  return (
    <div className="flex gap-6 flex-col lg:flex-row">
      <div className="flex-1 min-w-0">
        <button onClick={() => navigate('/projects')} className="btn-ghost mb-4 -ml-3">
          <ArrowLeft className="w-4 h-4" />Projektek
        </button>

        <div className="flex gap-4 items-start mb-6">
          <div className="w-24 h-24 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0">
            {project.coverPhotoUrl ? (
              <img src={project.coverPhotoUrl} alt="" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <Camera className="w-8 h-8" />
              </div>
            )}
          </div>
          <div className="min-w-0">
            <h1 className="text-xl font-bold text-text truncate">{project.name}</h1>
            {project.address && (
              <p className="text-sm text-primary flex items-center gap-1 mt-1">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />{project.address}
              </p>
            )}
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs text-text-muted flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                Létrehozva: {new Date(project.createdAt).toLocaleDateString('hu-HU')}
              </span>
              <span className="text-xs text-text-muted flex items-center gap-1">
                <Image className="w-3 h-3" />{project.photoCount || 0} fotó
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-1 border-b border-border mb-6 overflow-x-auto">
          {projectTabs.map((tab) => (
            <NavLink
              key={tab.key}
              to={tab.key}
              className={({ isActive }) =>
                `px-4 py-2.5 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
                  isActive
                    ? 'border-primary text-primary'
                    : 'border-transparent text-text-secondary hover:text-text hover:border-gray-300'
                }`
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </div>

        <Routes>
          <Route index element={<Navigate to="photos" replace />} />
          <Route path="photos" element={<ProjectPhotos projectId={id} />} />
          <Route path="pages" element={<EmptyTab label="Oldalak" />} />
          <Route path="files" element={<EmptyTab label="Fájlok" />} />
          <Route path="payments" element={<EmptyTab label="Fizetések" />} />
          <Route path="checklists" element={<EmptyTab label="Ellenőrzések" />} />
          <Route path="reports" element={<EmptyTab label="Jelentések" />} />
        </Routes>
      </div>

      <div className="w-full lg:w-80 space-y-4 flex-shrink-0">
        <div className="card p-4">
          <h3 className="section-title mb-3">Csapattagok</h3>
          <div className="flex items-center gap-2">
            <UserAvatar name={user?.name || 'User'} size="md" />
            <div>
              <p className="text-sm font-medium text-text">{user?.name}</p>
              <p className="text-xs text-text-muted">{user?.role}</p>
            </div>
          </div>
        </div>

        <div className="card p-4">
          <TaskList tasks={tasks} onAdd={addTask} onToggle={toggleTask} />
        </div>

        <div className="card p-4">
          <CommentBox comments={comments} onPost={addComment} currentUser={user} />
        </div>
      </div>
    </div>
  );
}

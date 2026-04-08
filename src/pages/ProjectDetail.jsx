import { useEffect, useState, useCallback } from 'react';
import { useParams, NavLink, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload } from 'lucide-react';
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
    const form = new FormData();
    files.forEach((f) => form.append('photos', f));
    try {
      await api.post(`/projects/${projectId}/photos`, form, { headers: { 'Content-Type': 'multipart/form-data' } });
      toast.success('Photos uploaded');
      fetchPhotos();
    } catch {
      toast.error('Upload failed');
    }
  }, [projectId]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: { 'image/*': [] } });

  if (loading) return <div>Loading photos...</div>;
  return (
    <div>
      <div className="mb-4" {...getRootProps()}>
        <input {...getInputProps()} />
        <button className="btn-primary"><Upload className="w-4 h-4" />Upload Photos</button>
      </div>
      {photos.length ? <PhotoGrid photos={photos} onPhotoClick={(p) => window.open(p.imageUrl, '_blank')} /> : <p className="text-text-muted">No photos yet.</p>}
    </div>
  );
}

const EmptyTab = ({ label }) => <div className="text-text-muted py-12">{label} module placeholder.</div>;

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [project, setProject] = useState(null);
  const [comments, setComments] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    Promise.all([
      api.get(`/projects/${id}`),
      api.get(`/projects/${id}/comments`),
      api.get(`/projects/${id}/tasks`)
    ]).then(([p, c, t]) => {
      setProject(p.data);
      setComments(c.data);
      setTasks(t.data);
    }).catch(() => {
      toast.error('Failed to load project');
      navigate('/projects');
    });
  }, [id]);

  if (!project) return <div>Loading...</div>;

  const addComment = async (content) => {
    const res = await api.post(`/projects/${id}/comments`, { content });
    setComments((prev) => [...prev, res.data]);
  };

  const addTask = async (title) => {
    const res = await api.post(`/projects/${id}/tasks`, { title });
    setTasks((prev) => [...prev, res.data]);
  };

  const toggleTask = async (taskId) => {
    const res = await api.put(`/tasks/${taskId}`);
    setTasks((prev) => prev.map((task) => task.id === taskId ? res.data : task));
  };

  const projectTabs = ['photos', 'pages', 'files', 'payments', 'checklists', 'reports'];

  return (
    <div className="flex gap-6">
      <div className="flex-1 min-w-0">
        <button onClick={() => navigate('/projects')} className="btn-ghost mb-4"><ArrowLeft className="w-4 h-4" />Projects</button>
        <div className="flex gap-4 items-start mb-6">
          <div className="w-28 h-28 rounded-lg bg-gray-200 overflow-hidden">{project.coverPhotoUrl ? <img src={project.coverPhotoUrl} alt="" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center">📷</div>}</div>
          <div>
            <h1 className="text-2xl font-bold">{project.name}</h1>
            <p className="text-primary">{project.address}</p>
          </div>
        </div>
        <div className="flex gap-3 border-b border-border mb-6">
          {projectTabs.map((tab) => (
            <NavLink key={tab} to={tab} className={({ isActive }) => `px-3 py-2 border-b-2 ${isActive ? 'border-primary text-text font-semibold' : 'border-transparent text-text-secondary'}`}>
              {tab[0].toUpperCase() + tab.slice(1)}
            </NavLink>
          ))}
        </div>
        <Routes>
          <Route index element={<Navigate to="photos" replace />} />
          <Route path="photos" element={<ProjectPhotos projectId={id} />} />
          <Route path="pages" element={<EmptyTab label="Pages" />} />
          <Route path="files" element={<EmptyTab label="Files" />} />
          <Route path="payments" element={<EmptyTab label="Payments" />} />
          <Route path="checklists" element={<EmptyTab label="Checklists" />} />
          <Route path="reports" element={<EmptyTab label="Reports" />} />
        </Routes>
      </div>
      <div className="w-80 space-y-6">
        <div className="card p-4"><h3 className="text-sm font-bold mb-3">Project Users</h3><UserAvatar name={user?.name || 'User'} /></div>
        <div className="card p-4"><TaskList tasks={tasks} onAdd={addTask} onToggle={toggleTask} /></div>
        <div className="card p-4"><CommentBox comments={comments} onPost={addComment} currentUser={user} /></div>
      </div>
    </div>
  );
}

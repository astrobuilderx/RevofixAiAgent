import { Router } from 'express';
import multer from 'multer';
import auth from '../middleware/auth.js';
import { projects, photos, comments, tasks } from './_data.js';

const router = Router();
const upload = multer({ dest: 'uploads/' });

router.use(auth);

router.get('/', (_req, res) => res.json(projects));

router.post('/', (req, res) => {
  const project = {
    id: Date.now(),
    name: req.body.name,
    address: req.body.address || '',
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    coverPhotoUrl: '',
    photoCount: 0,
    recentUser: req.user.name,
    latitude: null,
    longitude: null,
    status: 'active'
  };
  projects.unshift(project);
  res.json(project);
});

router.get('/:id', (req, res) => {
  const project = projects.find((p) => p.id === Number(req.params.id));
  if (!project) return res.status(404).json({ message: 'Project not found' });
  res.json(project);
});

router.get('/:id/photos', (req, res) => {
  res.json(photos.filter((p) => p.projectId === Number(req.params.id)));
});

router.post('/:id/photos', upload.array('photos'), (req, res) => {
  const projectId = Number(req.params.id);
  const project = projects.find((p) => p.id === projectId);
  const created = (req.files || []).map((file, idx) => ({
    id: Date.now() + idx,
    projectId,
    imageUrl: `/uploads/${file.filename}`,
    thumbnailUrl: `/uploads/${file.filename}`,
    userName: req.user.name,
    createdAt: new Date().toISOString()
  }));
  photos.push(...created);
  if (project) project.photoCount = (project.photoCount || 0) + created.length;
  res.json(created);
});

router.get('/:id/comments', (req, res) => {
  res.json(comments.filter((c) => c.projectId === Number(req.params.id)));
});

router.post('/:id/comments', (req, res) => {
  const comment = {
    id: Date.now(),
    projectId: Number(req.params.id),
    userName: req.user.name,
    content: req.body.content,
    createdAt: new Date().toISOString()
  };
  comments.push(comment);
  res.json(comment);
});

router.get('/:id/tasks', (req, res) => {
  res.json(tasks.filter((t) => t.projectId === Number(req.params.id)));
});

router.post('/:id/tasks', (req, res) => {
  const task = {
    id: Date.now(),
    projectId: Number(req.params.id),
    title: req.body.title,
    is_completed: false
  };
  tasks.push(task);
  res.json(task);
});

export default router;

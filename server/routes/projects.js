import { Router } from 'express';
import multer from 'multer';
import auth from '../middleware/auth.js';
import { projects, photos, comments, tasks } from './_data.js';
const router = Router();
const upload = multer({ dest: 'uploads/' });
router.use(auth);
router.get('/', (_req, res) => res.json(projects));
router.post('/', (req, res) => {
  const project = { id: Date.now(), name: req.body.name, address: req.body.address || '', updatedAt: new Date().toISOString(), createdAt: new Date().toISOString(), photoCount: 0 };
  projects.push(project);
  res.json(project);
});
router.get('/:id', (req, res) => res.json(projects.find((p) => p.id === Number(req.params.id))));
router.get('/:id/photos', (req, res) => res.json(photos.filter((p) => p.projectId === Number(req.params.id))));
router.post('/:id/photos', upload.array('photos'), (req, res) => {
  const created = (req.files || []).map((file, idx) => ({ id: Date.now() + idx, projectId: Number(req.params.id), imageUrl: `/uploads/${file.filename}`, thumbnailUrl: `/uploads/${file.filename}`, userName: 'Admin User', createdAt: new Date().toISOString() }));
  photos.push(...created);
  res.json(created);
});
router.get('/:id/comments', (req, res) => res.json(comments.filter((c) => c.projectId === Number(req.params.id))));
router.post('/:id/comments', (req, res) => {
  const comment = { id: Date.now(), projectId: Number(req.params.id), userName: 'Admin User', content: req.body.content };
  comments.push(comment);
  res.json(comment);
});
router.get('/:id/tasks', (req, res) => res.json(tasks.filter((t) => t.projectId === Number(req.params.id))));
router.post('/:id/tasks', (req, res) => {
  const task = { id: Date.now(), projectId: Number(req.params.id), title: req.body.title, is_completed: false };
  tasks.push(task);
  res.json(task);
});
export default router;

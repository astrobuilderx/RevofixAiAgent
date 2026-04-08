import { Router } from 'express';
import auth from '../middleware/auth.js';
import { tasks } from './_data.js';
const router = Router();
router.use(auth);
router.put('/:id', (req, res) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ message: 'Task not found' });
  task.is_completed = !task.is_completed;
  res.json(task);
});
export default router;

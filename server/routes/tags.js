import { Router } from 'express';
import auth from '../middleware/auth.js';
import { tags } from './_data.js';
const router = Router();
router.use(auth);
router.get('/', (_req, res) => res.json(tags));
router.post('/', (req, res) => {
  const tag = { id: Date.now(), name: req.body.name, photoCount: 0, updatedAt: new Date().toISOString() };
  tags.push(tag);
  res.json(tag);
});
export default router;

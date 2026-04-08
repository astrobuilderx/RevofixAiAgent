import { Router } from 'express';
import auth from '../middleware/auth.js';
import { checklists } from './_data.js';
const router = Router();
router.use(auth);
router.get('/', (req, res) => {
  const { status } = req.query;
  if (!status || status === 'all') return res.json(checklists);
  res.json(checklists.filter((c) => c.status === status));
});
export default router;

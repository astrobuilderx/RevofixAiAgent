import { Router } from 'express';
import auth from '../middleware/auth.js';
import { photos } from './_data.js';
const router = Router();
router.use(auth);
router.get('/', (_req, res) => res.json(photos));
export default router;

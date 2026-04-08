import { Router } from 'express';
const router = Router();
router.post('/login', (req, res) => {
  const { email } = req.body;
  res.json({ token: 'demo-token', user: { id: 1, name: 'Admin User', email, companyName: 'My Company', role: 'admin' } });
});
router.get('/me', (_req, res) => {
  res.json({ id: 1, name: 'Admin User', email: 'admin@example.com', companyName: 'My Company', role: 'admin' });
});
export default router;

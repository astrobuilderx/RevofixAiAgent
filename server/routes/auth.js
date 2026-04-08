import { Router } from 'express';
import { users } from './_data.js';

const router = Router();

router.post('/login', (req, res) => {
  const { email } = req.body;
  const user = users.find((u) => u.email === email) || users[0];
  res.json({
    token: 'demo-token-' + user.id,
    user: { id: user.id, name: user.name, email: user.email, companyName: user.companyName, role: user.role }
  });
});

router.get('/me', (_req, res) => {
  const user = users[0];
  res.json({ id: user.id, name: user.name, email: user.email, companyName: user.companyName, role: user.role });
});

export default router;

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import projectRoutes from './routes/projects.js';
import photoRoutes from './routes/photos.js';
import userRoutes from './routes/users.js';
import tagRoutes from './routes/tags.js';
import checklistRoutes from './routes/checklists.js';
import taskRoutes from './routes/tasks.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/photos', photoRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tags', tagRoutes);
app.use('/api/checklists', checklistRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});

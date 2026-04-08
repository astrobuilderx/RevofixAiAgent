import { useState } from 'react';

export default function TaskList({ tasks = [], onAdd, onToggle }) {
  const [title, setTitle] = useState('');
  return (
    <div>
      <h3 className="text-sm font-bold text-text mb-3">Tasks</h3>
      <div className="space-y-2 mb-3">
        {tasks.map((task) => (
          <label key={task.id} className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={task.is_completed} onChange={() => onToggle(task.id)} />
            <span className={task.is_completed ? 'line-through text-text-muted' : 'text-text'}>{task.title}</span>
          </label>
        ))}
      </div>
      <div className="flex gap-2">
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="input-field" placeholder="New task" />
        <button className="btn-primary" onClick={() => { if (title.trim()) { onAdd(title.trim()); setTitle(''); } }}>Add</button>
      </div>
    </div>
  );
}

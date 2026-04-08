import { useState } from 'react';
import { Plus, CheckCircle2, Circle, ListTodo } from 'lucide-react';

export default function TaskList({ tasks = [], onAdd, onToggle }) {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (title.trim()) {
      onAdd(title.trim());
      setTitle('');
    }
  };

  const completedCount = tasks.filter((t) => t.is_completed).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="section-title flex items-center gap-2">
          <ListTodo className="w-4 h-4" />
          Feladatok
        </h3>
        {tasks.length > 0 && (
          <span className="text-xs text-text-muted">{completedCount}/{tasks.length}</span>
        )}
      </div>

      {tasks.length > 0 && (
        <div className="w-full bg-gray-100 rounded-full h-1.5 mb-3">
          <div
            className="bg-green-500 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${tasks.length ? (completedCount / tasks.length) * 100 : 0}%` }}
          />
        </div>
      )}

      <div className="space-y-1.5 mb-3">
        {tasks.map((task) => (
          <button
            key={task.id}
            onClick={() => onToggle(task.id)}
            className="flex items-center gap-2 w-full text-left py-1 group"
          >
            {task.is_completed ? (
              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
            ) : (
              <Circle className="w-4 h-4 text-text-muted group-hover:text-primary flex-shrink-0" />
            )}
            <span className={`text-xs ${task.is_completed ? 'line-through text-text-muted' : 'text-text'}`}>
              {task.title}
            </span>
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          className="input-field text-xs"
          placeholder="Új feladat..."
        />
        <button
          onClick={handleAdd}
          disabled={!title.trim()}
          className="btn-primary px-3 disabled:opacity-50"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

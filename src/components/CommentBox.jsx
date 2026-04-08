import { useState } from 'react';
import UserAvatar from './UserAvatar';

export default function CommentBox({ comments = [], onPost, currentUser }) {
  const [text, setText] = useState('');
  return (
    <div>
      <h3 className="text-sm font-bold text-text mb-3">Project Conversation</h3>
      <div className="space-y-3 mb-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            <UserAvatar name={comment.userName || 'User'} size="sm" />
            <div>
              <p className="text-sm font-medium">{comment.userName || 'User'}</p>
              <p className="text-sm text-text-secondary">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} className="input-field h-24 py-2" placeholder="Write a comment..." />
      <button className="btn-primary mt-3" onClick={() => { if (text.trim()) { onPost(text.trim()); setText(''); } }}>Post</button>
    </div>
  );
}

import { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import UserAvatar from './UserAvatar';

export default function CommentBox({ comments = [], onPost, currentUser }) {
  const [text, setText] = useState('');

  const handlePost = () => {
    if (text.trim()) {
      onPost(text.trim());
      setText('');
    }
  };

  return (
    <div>
      <h3 className="section-title mb-3 flex items-center gap-2">
        <MessageCircle className="w-4 h-4" />
        Beszélgetés
      </h3>

      {comments.length === 0 ? (
        <p className="text-xs text-text-muted mb-4">Még nincs hozzászólás.</p>
      ) : (
        <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-2.5">
              <UserAvatar name={comment.userName || 'User'} size="sm" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-text">{comment.userName || 'Felhasználó'}</p>
                <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handlePost()}
          className="input-field text-xs"
          placeholder="Hozzászólás írása..."
        />
        <button
          onClick={handlePost}
          disabled={!text.trim()}
          className="btn-primary px-3 disabled:opacity-50"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

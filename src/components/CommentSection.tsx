import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Reply, MessageCircle } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  votes: number;
  userVote: 'up' | 'down' | null;
  replies: Comment[];
}

interface CommentSectionProps {
  postId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'Alex Thompson',
      content: 'Great article! The TypeScript examples are really helpful. I\'ve been struggling with typing React components properly.',
      timestamp: '2024-01-16T10:30:00Z',
      votes: 5,
      userVote: null,
      replies: [
        {
          id: '2',
          author: 'Sarah Chen',
          content: 'I agree! The generic components section was particularly enlightening.',
          timestamp: '2024-01-16T11:15:00Z',
          votes: 2,
          userVote: null,
          replies: []
        }
      ]
    },
    {
      id: '3',
      author: 'Mike Wilson',
      content: 'Could you do a follow-up on testing TypeScript React components? That would be awesome!',
      timestamp: '2024-01-16T14:20:00Z',
      votes: 3,
      userVote: null,
      replies: []
    }
  ]);

  const [newComment, setNewComment] = useState('');
  const [newReply, setNewReply] = useState<{[key: string]: string}>({});
  const [showReplies, setShowReplies] = useState<{[key: string]: boolean}>({});

  const handleVote = (commentId: string, voteType: 'up' | 'down') => {
    setComments(prev => 
      prev.map(comment => 
        updateCommentVote(comment, commentId, voteType)
      )
    );
  };

  const updateCommentVote = (comment: Comment, targetId: string, voteType: 'up' | 'down'): Comment => {
    if (comment.id === targetId) {
      const currentVote = comment.userVote;
      let newVotes = comment.votes;
      let newUserVote: 'up' | 'down' | null = voteType;

      if (currentVote === voteType) {
        // Removing vote
        newVotes += voteType === 'up' ? -1 : 1;
        newUserVote = null;
      } else if (currentVote === null) {
        // Adding vote
        newVotes += voteType === 'up' ? 1 : -1;
      } else {
        // Switching vote
        newVotes += voteType === 'up' ? 2 : -2;
      }

      return { ...comment, votes: newVotes, userVote: newUserVote };
    }

    return {
      ...comment,
      replies: comment.replies.map(reply => updateCommentVote(reply, targetId, voteType))
    };
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: 'You',
      content: newComment,
      timestamp: new Date().toISOString(),
      votes: 0,
      userVote: null,
      replies: []
    };

    setComments(prev => [...prev, comment]);
    setNewComment('');
  };

  const handleSubmitReply = (parentId: string) => {
    const replyContent = newReply[parentId];
    if (!replyContent?.trim()) return;

    const reply: Comment = {
      id: Date.now().toString(),
      author: 'You',
      content: replyContent,
      timestamp: new Date().toISOString(),
      votes: 0,
      userVote: null,
      replies: []
    };

    setComments(prev =>
      prev.map(comment =>
        comment.id === parentId
          ? { ...comment, replies: [...comment.replies, reply] }
          : comment
      )
    );

    setNewReply(prev => ({ ...prev, [parentId]: '' }));
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const CommentComponent: React.FC<{ comment: Comment; isReply?: boolean }> = ({ comment, isReply = false }) => (
    <div className={`${isReply ? 'ml-8 mt-6' : 'mb-8'} bg-white dark:bg-accent-800 rounded-2xl p-6 border border-accent-200 dark:border-accent-700 shadow-premium hover:shadow-luxury transition-all duration-300`}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-lg font-bold font-comfortaa text-primary-600 dark:text-primary-300">
              {comment.author.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <span className="font-bold font-comfortaa text-accent-900 dark:text-white text-lg">{comment.author}</span>
            <span className="text-sm text-accent-500 dark:text-accent-400 font-inter">
              {formatTimestamp(comment.timestamp)}
            </span>
          </div>
          <p className="text-accent-700 dark:text-accent-300 mb-4 leading-relaxed font-comfortaa text-base">
            {comment.content}
          </p>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleVote(comment.id, 'up')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 font-comfortaa ${
                  comment.userVote === 'up'
                    ? 'bg-success-100 dark:bg-success-900 text-success-700 dark:text-success-300 shadow-lg'
                    : 'text-accent-500 dark:text-accent-400 hover:text-success-600 dark:hover:text-success-300 hover:bg-success-50 dark:hover:bg-success-900/20'
                }`}
              >
                <ThumbsUp className="h-4 w-4" />
                <span>{comment.votes > 0 ? comment.votes : ''}</span>
              </button>
              <button
                onClick={() => handleVote(comment.id, 'down')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 font-comfortaa ${
                  comment.userVote === 'down'
                    ? 'bg-error-100 dark:bg-error-900 text-error-700 dark:text-error-300 shadow-lg'
                    : 'text-accent-500 dark:text-accent-400 hover:text-error-600 dark:hover:text-error-300 hover:bg-error-50 dark:hover:bg-error-900/20'
                }`}
              >
                <ThumbsDown className="h-4 w-4" />
              </button>
            </div>
            
            {!isReply && (
              <button
                onClick={() => setShowReplies(prev => ({ ...prev, [comment.id]: !prev[comment.id] }))}
                className="flex items-center space-x-2 text-sm text-accent-500 dark:text-accent-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium font-comfortaa px-4 py-2 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20"
              >
                <Reply className="h-4 w-4" />
                <span>Reply</span>
              </button>
            )}
          </div>

          {!isReply && showReplies[comment.id] && (
            <div className="mt-6">
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-700 dark:to-accent-600 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold font-comfortaa text-accent-600 dark:text-accent-300">Y</span>
                  </div>
                </div>
                <div className="flex-1">
                  <textarea
                    value={newReply[comment.id] || ''}
                    onChange={(e) => setNewReply(prev => ({ ...prev, [comment.id]: e.target.value }))}
                    placeholder="Write a thoughtful reply..."
                    className="w-full p-4 border border-accent-300 dark:border-accent-600 rounded-xl bg-white dark:bg-accent-800 text-accent-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none font-comfortaa shadow-lg transition-all duration-300"
                    rows={3}
                  />
                  <div className="flex justify-end mt-3">
                    <button
                      onClick={() => handleSubmitReply(comment.id)}
                      className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 text-sm font-bold font-comfortaa shadow-luxury hover:shadow-luxury-lg transform hover:scale-105"
                    >
                      Post Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {comment.replies.map(reply => (
            <CommentComponent key={reply.id} comment={reply} isReply={true} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-16 bg-gradient-to-br from-accent-50 to-primary-50 dark:from-accent-900 dark:to-accent-800 rounded-3xl p-8 shadow-luxury border border-accent-200 dark:border-accent-700">
      <div className="flex items-center space-x-3 mb-8">
        <MessageCircle className="h-8 w-8 text-primary-600 dark:text-primary-400" />
        <h3 className="text-3xl font-bold font-crimson text-accent-900 dark:text-white">
          Comments ({comments.length})
        </h3>
      </div>

      {/* New Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-12">
        <div className="flex space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-lg font-bold font-comfortaa text-primary-600 dark:text-primary-300">Y</span>
            </div>
          </div>
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts and join the conversation..."
              className="w-full p-6 border border-accent-300 dark:border-accent-600 rounded-2xl bg-white dark:bg-accent-800 text-accent-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none font-comfortaa text-lg shadow-luxury transition-all duration-300"
              rows={4}
            />
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 font-bold font-comfortaa shadow-luxury hover:shadow-luxury-lg transform hover:scale-105"
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map(comment => (
          <CommentComponent key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
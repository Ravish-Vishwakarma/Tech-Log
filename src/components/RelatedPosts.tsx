import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import { BlogPost } from '../data/blogPosts';

interface RelatedPostsProps {
  posts: BlogPost[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
  return (
    <div className="mt-16 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-accent-800 dark:to-accent-700 rounded-3xl p-8 shadow-luxury border border-accent-200 dark:border-accent-700">
      <h3 className="text-3xl font-bold font-playfair text-accent-900 dark:text-white mb-8">You might also like</h3>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="group bg-white dark:bg-accent-800 rounded-2xl shadow-premium hover:shadow-luxury transition-all duration-500 border border-accent-200 dark:border-accent-700 overflow-hidden transform hover:-translate-y-2"
          >
            <div className="aspect-video bg-gradient-to-br from-primary-400 to-secondary-600 relative overflow-hidden">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6">
              <h4 className="font-bold font-merriweather text-accent-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2 text-lg leading-tight">
                {post.title}
              </h4>
              <p className="text-sm text-accent-600 dark:text-accent-300 mb-4 line-clamp-2 font-inter leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-accent-500 dark:text-accent-400">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span className="font-medium font-inter">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span className="font-inter">{post.readTime} min read</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full font-medium font-inter"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
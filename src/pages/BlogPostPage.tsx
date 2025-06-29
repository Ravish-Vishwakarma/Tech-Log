import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Clock, User, Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts, getRelatedPosts } from '../data/blogPosts';
import MarkdownRenderer from '../components/MarkdownRenderer';
import TableOfContents from '../components/TableOfContents';
import CommentSection from '../components/CommentSection';
import RelatedPosts from '../components/RelatedPosts';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const relatedPosts = getRelatedPosts(post.id, post.tags);

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-50 via-white to-primary-50 dark:from-accent-900 dark:via-accent-800 dark:to-accent-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Light mode background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-600 to-luxury-600 dark:hidden" />
        {/* Dark mode background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-800 via-accent-700 to-accent-900 hidden dark:block" />
        
        {/* Light mode overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent dark:hidden" />
        {/* Dark mode overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent hidden dark:block" />
        
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Light mode elements - gentle floating effect */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse-slow dark:hidden" />
          <div className="absolute bottom-32 left-32 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl animate-pulse-slow dark:hidden" />
          <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-orange-400/8 rounded-full blur-xl animate-pulse-slow dark:hidden" />
          
          {/* Dark mode elements - subtle glow effect */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-primary-400/10 rounded-full blur-2xl animate-pulse-slow hidden dark:block" />
          <div className="absolute bottom-32 left-32 w-48 h-48 bg-secondary-400/15 rounded-full blur-3xl animate-pulse-slow hidden dark:block" />
          <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-luxury-400/12 rounded-full blur-xl animate-pulse-slow hidden dark:block" />
        </div>

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rotate-45 transform"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rotate-45 transform"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white rotate-45 transform"></div>
          <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-white rotate-45 transform"></div>
        </div>

        <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Back button and tags in the same row */}
            <div className="flex items-center gap-4 mb-6">
              <Link
                to="/"
                className="inline-flex items-center justify-center w-12 h-12 text-white/80 hover:text-white transition-all duration-300 bg-black/20 dark:bg-black/30 backdrop-blur-sm rounded-xl hover:bg-black/30 dark:hover:bg-black/40 group flex-shrink-0"
                aria-label="Back to Home"
              >
                <ArrowLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform duration-300" />
              </Link>
              
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/20 dark:bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium font-inter"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight font-playfair">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-8 text-white/90 dark:text-white/80">
              <div className="flex items-center space-x-3">
                <User className="h-6 w-6" />
                <span className="font-medium font-inter">{post.author}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6" />
                <span className="font-inter">{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6" />
                <span className="font-inter">{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex gap-8">
          {/* Left Sidebar - Ad Space */}
          <aside className="w-64 flex-shrink-0 hidden xl:block">
            <div className="sticky top-32 space-y-8">
              {/* Premium Ad Placeholder */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-accent-800 dark:to-accent-700 rounded-2xl p-6 text-center border-2 border-dashed border-primary-300 dark:border-accent-600 shadow-luxury">
                <p className="text-accent-600 dark:text-accent-400 text-sm font-medium font-inter mb-4">Premium Advertisement</p>
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-accent-700 dark:to-accent-600 rounded-xl h-48 flex items-center justify-center shadow-lg">
                  <span className="text-accent-500 dark:text-accent-400 text-xs font-inter">Your Premium Ad Here</span>
                </div>
              </div>
              
              {/* Sponsored Content */}
              <div className="bg-gradient-to-br from-luxury-50 to-primary-50 dark:from-accent-800 dark:to-accent-700 rounded-2xl p-6 text-center border-2 border-dashed border-luxury-300 dark:border-accent-600 shadow-luxury">
                <p className="text-accent-600 dark:text-accent-400 text-sm font-medium font-inter mb-4">Sponsored Content</p>
                <div className="bg-gradient-to-br from-luxury-100 to-primary-100 dark:from-accent-700 dark:to-accent-600 rounded-xl h-32 flex items-center justify-center shadow-lg">
                  <span className="text-accent-500 dark:text-accent-400 text-xs font-inter">Sponsor Ad</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content - Takes up remaining space */}
          <main className="flex-1 min-w-0">
            <article className="bg-white dark:bg-accent-800 rounded-3xl shadow-luxury p-10 mb-12 border border-accent-200 dark:border-accent-700">
              <MarkdownRenderer content={post.content} />
            </article>
            
            <CommentSection postId={post.id} />
            <RelatedPosts posts={relatedPosts} />
          </main>

          {/* Right Sidebar - Table of Contents */}
          <aside className="w-80 flex-shrink-0 hidden lg:block">
            <TableOfContents content={post.content} />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const HomePage: React.FC = () => {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  useEffect(() => {
    // Add class to hide scrollbar on homepage
    document.documentElement.classList.add('homepage-no-scrollbar');
    
    // Cleanup when component unmounts
    return () => {
      document.documentElement.classList.remove('homepage-no-scrollbar');
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-50 via-white to-primary-50 dark:from-accent-900 dark:via-accent-800 dark:to-accent-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Light mode background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-600 to-luxury-600 dark:hidden" />
        {/* Dark mode background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-800 via-accent-700 to-accent-900 hidden dark:block" />
        
        {/* Light mode overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent dark:hidden" />
        {/* Dark mode overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent hidden dark:block" />
        
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Light mode elements - gentle floating effect */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse-slow dark:hidden" />
          <div className="absolute bottom-32 left-32 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl animate-pulse-slow dark:hidden" />
          <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-orange-400/8 rounded-full blur-xl animate-pulse-slow dark:hidden" />
          <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-secondary-400/8 rounded-full blur-2xl animate-pulse-slow dark:hidden" />
          
          {/* Dark mode elements - subtle glow effect */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-primary-400/10 rounded-full blur-2xl animate-pulse-slow hidden dark:block" />
          <div className="absolute bottom-32 left-32 w-48 h-48 bg-secondary-400/15 rounded-full blur-3xl animate-pulse-slow hidden dark:block" />
          <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-luxury-400/12 rounded-full blur-xl animate-pulse-slow hidden dark:block" />
          <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-accent-400/10 rounded-full blur-2xl animate-pulse-slow hidden dark:block" />
        </div>

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rotate-45 transform"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rotate-45 transform"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white rotate-45 transform"></div>
          <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-white rotate-45 transform"></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rotate-45 transform"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              <span className="font-playfair">Welcome to</span>
              <br />
              <span className="font-merriweather bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 dark:from-primary-400 dark:via-secondary-400 dark:to-luxury-400 bg-clip-text text-transparent">
                TechGlobe
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 dark:text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-inter font-light">
              Discover the latest in web development, programming tutorials, and tech insights. 
              Join thousands of developers learning and growing together in our community.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/subscribe"
                className="group inline-flex items-center space-x-3 bg-white dark:bg-accent-700 text-primary-600 dark:text-white font-semibold px-8 py-4 rounded-2xl hover:bg-accent-50 dark:hover:bg-accent-600 transition-all duration-300 shadow-luxury hover:shadow-luxury-lg transform hover:scale-105 font-inter"
              >
                <span>Subscribe for Updates</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to={`/blog/${featuredPost.id}`}
                className="group inline-flex items-center space-x-3 bg-white/10 dark:bg-white/5 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 border border-white/20 dark:border-white/10 font-inter"
              >
                <span>Read Latest Article</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Featured Post */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-accent-900 dark:text-white mb-4">
              Featured Article
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full" />
          </div>
          
          <Link
            to={`/blog/${featuredPost.id}`}
            className="group block bg-white dark:bg-accent-800 rounded-3xl shadow-luxury hover:shadow-luxury-lg overflow-hidden transition-all duration-500 transform hover:-translate-y-3 border border-accent-200 dark:border-accent-700"
          >
            <div className="md:flex md:h-96">
              <div className="md:w-1/2 h-64 md:h-full">
                <div className="h-full bg-gradient-to-br from-primary-400 to-secondary-600 relative overflow-hidden">
                  <img
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium font-inter">
                      Featured
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <div className="flex flex-wrap gap-3 mb-6">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium font-inter"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl font-bold font-merriweather text-accent-900 dark:text-white mb-6 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight">
                  {featuredPost.title}
                </h3>
                
                <p className="text-accent-600 dark:text-accent-300 mb-8 leading-relaxed text-lg font-inter">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-accent-500 dark:text-accent-400">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span className="font-medium font-inter">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span className="font-inter">{featuredPost.readTime} min read</span>
                    </div>
                  </div>
                  <span className="font-inter">{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Recent Posts */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-accent-900 dark:text-white mb-4">
              Recent Articles
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary-600 to-luxury-600 mx-auto rounded-full" />
          </div>
          
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-white dark:bg-accent-800 rounded-2xl shadow-premium hover:shadow-luxury transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-accent-200 dark:border-accent-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary-400 to-secondary-600 relative overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-xs font-medium font-inter"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold font-merriweather text-accent-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-accent-600 dark:text-accent-300 mb-6 text-sm line-clamp-3 font-inter leading-relaxed">
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
                    <span className="font-inter">{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
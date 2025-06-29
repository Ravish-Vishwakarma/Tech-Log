import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Moon, Sun, BookOpen } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { blogPosts } from '../data/blogPosts';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const searchResults = searchQuery.length > 2 
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 5)
    : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowResults(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-accent-900/90 backdrop-blur-xl border-b border-primary-200 dark:border-accent-700 shadow-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300 group">
            <div className="relative">
              <BookOpen className="h-8 w-8 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-primary-600 dark:bg-primary-400 opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold font-playfair text-accent-900 dark:text-white bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Tech Log
            </span>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-2xl mx-8 relative">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-accent-400 dark:text-accent-500" />
                <input
                  type="text"
                  placeholder="Search articles, tutorials, and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowResults(true)}
                  onBlur={() => setTimeout(() => setShowResults(false), 200)}
                  className="w-full pl-10 pr-4 py-3 bg-accent-50 dark:bg-accent-800 border border-accent-200 dark:border-accent-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300 font-inter text-accent-900 dark:text-white placeholder-accent-500 dark:placeholder-accent-400 shadow-lg hover:shadow-luxury"
                />
              </div>
            </form>

            {/* Search Results Dropdown */}
            {showResults && searchResults.length > 0 && (
              <div className="absolute top-full mt-3 w-full bg-white dark:bg-accent-800 rounded-2xl shadow-luxury-lg border border-accent-200 dark:border-accent-700 max-h-96 overflow-y-auto backdrop-blur-xl">
                {searchResults.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="block p-6 hover:bg-accent-50 dark:hover:bg-accent-700 border-b border-accent-100 dark:border-accent-600 last:border-b-0 transition-all duration-200 group"
                    onClick={() => {
                      setShowResults(false);
                      setSearchQuery('');
                    }}
                  >
                    <h4 className="font-semibold font-inter text-accent-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-sm text-accent-600 dark:text-accent-300 line-clamp-2 font-inter">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center mt-3 space-x-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-accent-700 dark:text-accent-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium font-inter"
            >
              Home
            </Link>
            <Link 
              to="/subscribe" 
              className="text-accent-700 dark:text-accent-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium font-inter"
            >
              Subscribe
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-accent-100 dark:bg-accent-800 hover:bg-accent-200 dark:hover:bg-accent-700 transition-all duration-300 shadow-lg hover:shadow-luxury group"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4 text-accent-600 dark:text-accent-300 group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <Sun className="h-4 w-4 text-accent-600 dark:text-accent-300 group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Clock, User } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    
    return blogPosts.filter(post => {
      const searchTerm = query.toLowerCase();
      return (
        post.title.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.author.toLowerCase().includes(searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    });
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-50 via-white to-primary-50 dark:from-accent-900 dark:via-accent-800 dark:to-accent-900 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <Search className="h-10 w-10 text-primary-600 dark:text-primary-400" />
            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-accent-900 dark:text-white">
              Search Results
            </h1>
          </div>
          
          {query && (
            <div className="bg-white dark:bg-accent-800 rounded-2xl p-6 border border-accent-200 dark:border-accent-700 shadow-luxury">
              <p className="text-accent-600 dark:text-accent-300 font-inter text-lg">
                Showing results for: <span className="font-bold text-primary-600 dark:text-primary-400">"{query}"</span>
              </p>
              <p className="text-sm text-accent-500 dark:text-accent-400 mt-2 font-inter">
                {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} found
              </p>
            </div>
          )}
        </div>

        {/* Search Results */}
        {query ? (
          <div className="space-y-8">
            {searchResults.length > 0 ? (
              searchResults.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="block bg-white dark:bg-accent-800 rounded-2xl shadow-luxury hover:shadow-luxury-lg transition-all duration-500 overflow-hidden group border border-accent-200 dark:border-accent-700 transform hover:-translate-y-2"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="aspect-video bg-gradient-to-br from-primary-400 to-secondary-600 relative overflow-hidden">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex flex-wrap gap-3 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-xs font-medium font-inter"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h2 className="text-2xl font-bold font-merriweather text-accent-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight">
                        {post.title}
                      </h2>
                      
                      <p className="text-accent-600 dark:text-accent-300 mb-6 line-clamp-3 font-inter leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-accent-500 dark:text-accent-400">
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4" />
                            <span className="font-medium font-inter">{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span className="font-inter">{post.readTime} min read</span>
                          </div>
                        </div>
                        <span className="font-inter">{new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center py-20">
                <Search className="h-20 w-20 text-accent-300 dark:text-accent-600 mx-auto mb-6" />
                <h2 className="text-3xl font-bold font-playfair text-accent-900 dark:text-white mb-4">
                  No results found
                </h2>
                <p className="text-accent-600 dark:text-accent-300 mb-8 font-inter text-lg max-w-md mx-auto">
                  We couldn't find any articles matching "{query}". Try adjusting your search terms or browse our latest content.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-2xl hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 font-bold font-inter shadow-luxury hover:shadow-luxury-lg transform hover:scale-105"
                >
                  <span>Browse All Articles</span>
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20">
            <Search className="h-20 w-20 text-accent-300 dark:text-accent-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold font-playfair text-accent-900 dark:text-white mb-4">
              Start Your Search
            </h2>
            <p className="text-accent-600 dark:text-accent-300 font-inter text-lg">
              Enter a search term in the header to find articles, tutorials, and more premium content.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
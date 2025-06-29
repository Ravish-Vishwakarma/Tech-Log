import React, { useState } from 'react';
import { Mail, CheckCircle, BookOpen, Bell, Users, Zap } from 'lucide-react';

const SubscribePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubscribed(true);
  };

  if (isSubscribed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-success-50 to-primary-100 dark:from-accent-900 dark:to-accent-800 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white dark:bg-accent-800 rounded-3xl shadow-luxury-lg p-10 text-center border border-accent-200 dark:border-accent-700">
          <div className="mb-8">
            <CheckCircle className="h-20 w-20 text-success-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold font-playfair text-accent-900 dark:text-white mb-4">
              Welcome aboard! 🎉
            </h1>
            <p className="text-accent-600 dark:text-accent-300 font-inter leading-relaxed">
              You've successfully subscribed to TechGlobe. Get ready for amazing content!
            </p>
          </div>
          
          <div className="bg-success-50 dark:bg-success-900/20 rounded-2xl p-6 mb-8 border border-success-200 dark:border-success-800">
            <p className="text-sm text-success-700 dark:text-success-300 font-inter">
              Check your email for a confirmation message and to customize your preferences.
            </p>
          </div>
          
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold py-4 rounded-2xl hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-luxury hover:shadow-luxury-lg transform hover:scale-105 font-inter"
          >
            Continue Reading
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-accent-900 dark:via-accent-800 dark:to-accent-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <Mail className="h-16 w-16 text-primary-600 mx-4" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair text-accent-900 dark:text-white mb-6">
            Never Miss an Update
          </h1>
          <p className="text-xl md:text-2xl text-accent-600 dark:text-accent-300 max-w-3xl mx-auto leading-relaxed font-inter">
            Join thousands of developers who get the latest articles, tutorials, and tech insights 
            delivered straight to their inbox with our newsletter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Benefits */}
          <div className="space-y-10">
            <div className="flex items-start space-x-6 group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-2xl flex items-center justify-center shadow-luxury group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-merriweather text-accent-900 dark:text-white mb-3">
                  Weekly Digest
                </h3>
                <p className="text-accent-600 dark:text-accent-300 leading-relaxed font-inter">
                  Get a curated selection of the best articles, tutorials, and resources every week, handpicked by our expert team.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-luxury-100 dark:from-secondary-900 dark:to-luxury-900 rounded-2xl flex items-center justify-center shadow-luxury group-hover:scale-110 transition-transform duration-300">
                  <Bell className="h-8 w-8 text-secondary-600 dark:text-secondary-400" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-merriweather text-accent-900 dark:text-white mb-3">
                  Breaking Tech News
                </h3>
                <p className="text-accent-600 dark:text-accent-300 leading-relaxed font-inter">
                  Be the first to know about major updates, new releases, and important announcements in the tech world.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-luxury-100 to-primary-100 dark:from-luxury-900 dark:to-primary-900 rounded-2xl flex items-center justify-center shadow-luxury group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-luxury-600 dark:text-luxury-400" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-merriweather text-accent-900 dark:text-white mb-3">
                  Exclusive Content
                </h3>
                <p className="text-accent-600 dark:text-accent-300 leading-relaxed font-inter">
                  Access subscriber-only articles, early previews, and special behind-the-scenes content from industry experts.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-success-100 to-primary-100 dark:from-success-900 dark:to-primary-900 rounded-2xl flex items-center justify-center shadow-luxury group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-success-600 dark:text-success-400" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-merriweather text-accent-900 dark:text-white mb-3">
                  No Spam, Ever
                </h3>
                <p className="text-accent-600 dark:text-accent-300 leading-relaxed font-inter">
                  Quality over quantity. We respect your inbox and only send valuable content that matters.
                </p>
              </div>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="bg-white dark:bg-accent-800 rounded-3xl shadow-luxury-lg p-10 border border-accent-200 dark:border-accent-700">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="email" className="block text-lg font-bold font-merriweather text-accent-700 dark:text-accent-300 mb-4">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-6 py-4 border border-accent-300 dark:border-accent-600 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-accent-700 text-accent-900 dark:text-white placeholder-accent-500 dark:placeholder-accent-400 font-inter text-lg shadow-lg transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-primary-600 via-secondary-600 to-luxury-600 text-white font-bold py-5 rounded-2xl hover:from-primary-700 hover:via-secondary-700 hover:to-luxury-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-luxury hover:shadow-luxury-lg font-inter text-lg"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Subscribing...</span>
                  </div>
                ) : (
                  'Subscribe to TechGlobe'
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-accent-500 dark:text-accent-400 font-inter">
                By subscribing, you agree to our{' '}
                <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                  Terms of Service
                </a>
              </p>
            </div>

            {/* Social Proof */}
            <div className="mt-10 pt-8 border-t border-accent-200 dark:border-accent-700">
              <div className="flex items-center justify-center space-x-6 text-sm text-accent-500 dark:text-accent-400">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span className="font-medium font-inter">12,000+ subscribers</span>
                </div>
                <div className="w-2 h-2 bg-accent-400 rounded-full" />
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium font-inter">No spam</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center font-playfair text-accent-900 dark:text-white mb-16">
            What Our Subscribers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Sarah Johnson",
                role: "Senior Frontend Developer",
                content: "TechGlobe's newsletter is the first thing I read every Monday. The content is always relevant, well-curated, and incredibly valuable."
              },
              {
                name: "Mike Chen",
                role: "Full Stack Engineer",
                content: "I've learned so much from TechGlobe's exclusive articles. The tutorials are practical, detailed, and easy to follow. Worth every subscription!"
              },
              {
                name: "Emma Davis",
                role: "DevOps Engineer",
                content: "The weekly digest keeps me updated on the latest trends without overwhelming my inbox. The content is absolutely top-notch!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-accent-800 rounded-2xl p-8 shadow-luxury border border-accent-200 dark:border-accent-700 transform hover:-translate-y-2 transition-all duration-300">
                <p className="text-accent-600 dark:text-accent-300 mb-6 italic font-inter text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-primary-600 dark:text-primary-300 font-bold font-comfortaa text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold font-merriweather text-accent-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-accent-500 dark:text-accent-400 font-inter">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useTheme } from '../contexts/ThemeContext';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const { theme } = useTheme();

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({node, ...props}) => (
          <h1 
            id={props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')} 
            className="text-4xl font-bold font-playfair text-accent-900 dark:text-white mb-8 mt-12 scroll-mt-24 leading-tight" 
            {...props} 
          />
        ),
        h2: ({node, ...props}) => (
          <h2 
            id={props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')} 
            className="text-3xl font-bold font-merriweather text-accent-900 dark:text-white mb-6 mt-10 scroll-mt-24 leading-tight" 
            {...props} 
          />
        ),
        h3: ({node, ...props}) => (
          <h3 
            id={props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')} 
            className="text-2xl font-bold font-merriweather text-accent-900 dark:text-white mb-4 mt-8 scroll-mt-24 leading-tight" 
            {...props} 
          />
        ),
        h4: ({node, ...props}) => (
          <h4 
            id={props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')} 
            className="text-xl font-bold font-merriweather text-accent-900 dark:text-white mb-4 mt-6 scroll-mt-24 leading-tight" 
            {...props} 
          />
        ),
        p: ({node, ...props}) => (
          <p className="text-accent-700 dark:text-accent-300 mb-6 leading-8 font-inter text-lg" {...props} />
        ),
        ul: ({node, ...props}) => (
          <ul className="list-disc list-inside text-accent-700 dark:text-accent-300 mb-6 space-y-2 font-inter text-lg" {...props} />
        ),
        ol: ({node, ...props}) => (
          <ol className="list-decimal list-inside text-accent-700 dark:text-accent-300 mb-6 space-y-2 font-inter text-lg" {...props} />
        ),
        li: ({node, ...props}) => (
          <li className="leading-8" {...props} />
        ),
        blockquote: ({node, ...props}) => (
          <blockquote className="border-l-4 border-primary-500 pl-6 italic text-accent-600 dark:text-accent-400 mb-6 bg-primary-50 dark:bg-primary-900/20 py-4 rounded-r-lg font-inter text-lg" {...props} />
        ),
        code: ({node, inline, className, children, ...props}) => {
          const match = /language-(\w+)/.exec(className || '');
          const language = match ? match[1] : '';
          
          if (!inline && language) {
            return (
              <div className="mb-8">
                <SyntaxHighlighter
                  style={theme === 'dark' ? tomorrow : prism}
                  language={language}
                  PreTag="div"
                  className="rounded-2xl shadow-luxury border border-accent-200 dark:border-accent-700"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            );
          }
          
          return (
            <code 
              className="bg-accent-100 dark:bg-accent-800 text-accent-800 dark:text-accent-200 px-3 py-1 rounded-lg text-base font-mono border border-accent-200 dark:border-accent-700" 
              {...props}
            >
              {children}
            </code>
          );
        },
        table: ({node, ...props}) => (
          <div className="overflow-x-auto mb-8 rounded-2xl border border-accent-200 dark:border-accent-700 shadow-luxury">
            <table className="min-w-full divide-y divide-accent-200 dark:divide-accent-700" {...props} />
          </div>
        ),
        thead: ({node, ...props}) => (
          <thead className="bg-accent-50 dark:bg-accent-800" {...props} />
        ),
        th: ({node, ...props}) => (
          <th className="px-6 py-4 text-left text-sm font-bold font-inter text-accent-500 dark:text-accent-300 uppercase tracking-wider" {...props} />
        ),
        td: ({node, ...props}) => (
          <td className="px-6 py-4 whitespace-nowrap text-base text-accent-900 dark:text-accent-100 font-inter" {...props} />
        ),
        a: ({node, ...props}) => (
          <a 
            className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 underline font-medium transition-colors duration-300" 
            target="_blank" 
            rel="noopener noreferrer" 
            {...props} 
          />
        ),
        img: ({node, ...props}) => (
          <img className="rounded-2xl mb-8 max-w-full h-auto shadow-luxury border border-accent-200 dark:border-accent-700" {...props} />
        ),
        hr: ({node, ...props}) => (
          <hr className="border-accent-300 dark:border-accent-600 my-12" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
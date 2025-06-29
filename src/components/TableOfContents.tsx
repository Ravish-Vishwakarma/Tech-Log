import React, { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from markdown content
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const headings: TocItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      
      headings.push({ id, text, level });
    }

    setToc(headings);
  }, [content]);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = toc.map(item => document.getElementById(item.id)).filter(Boolean);
      
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i];
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveId(element.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [toc]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (toc.length === 0) return null;

  return (
    <div className="sticky top-32 bg-white dark:bg-accent-800 rounded-2xl shadow-luxury border border-accent-200 dark:border-accent-700 p-8">
      <h3 className="text-xl font-bold font-playfair text-accent-900 dark:text-white mb-6">Table of Contents</h3>
      <nav className="space-y-3">
        {toc.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToHeading(item.id)}
            className={`block w-full text-left transition-all duration-300 font-inter ${
              item.level === 1 ? 'font-semibold text-base' : ''
            } ${
              item.level === 2 ? 'pl-4 text-sm' : ''
            } ${
              item.level === 3 ? 'pl-8 text-sm' : ''
            } ${
              item.level >= 4 ? 'pl-12 text-xs' : ''
            } ${
              activeId === item.id
                ? 'text-primary-600 dark:text-primary-400 font-bold bg-primary-50 dark:bg-primary-900/20 px-3 py-2 rounded-lg'
                : 'text-accent-600 dark:text-accent-300 hover:text-accent-900 dark:hover:text-white hover:bg-accent-50 dark:hover:bg-accent-700/50 px-3 py-2 rounded-lg'
            }`}
          >
            {item.text}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TableOfContents;
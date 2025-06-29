import React, { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
  exists: boolean;
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
      
      headings.push({ id, text, level, exists: false });
    }

    // Check which headings actually exist in the DOM after a short delay
    const checkHeadingsExist = () => {
      const updatedHeadings = headings.map(heading => ({
        ...heading,
        exists: document.getElementById(heading.id) !== null
      }));
      
      // Only include headings that actually exist in the DOM
      const existingHeadings = updatedHeadings.filter(heading => heading.exists);
      setToc(existingHeadings);
    };

    // Use a timeout to ensure the markdown has been rendered
    const timeoutId = setTimeout(checkHeadingsExist, 100);
    
    return () => clearTimeout(timeoutId);
  }, [content]);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = toc
        .map(item => document.getElementById(item.id))
        .filter(Boolean);
      
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
    <div className="sticky top-32 bg-white dark:bg-accent-800 rounded-2xl shadow-luxury border border-accent-200 dark:border-accent-700 flex flex-col" style={{ height: 'calc(100vh - 10rem)' }}>
      {/* Header */}
      <div className="p-6 border-b border-accent-200 dark:border-accent-700 flex-shrink-0">
        <h3 className="text-xl font-bold font-playfair text-accent-900 dark:text-white">
          Table of Contents
        </h3>
      </div>
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto toc-scrollbar">
        <nav className="p-6 space-y-2">
          {toc.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToHeading(item.id)}
              className={`block w-full text-left transition-all duration-300 font-inter rounded-lg ${
                item.level === 1 ? 'font-semibold text-base' : ''
              } ${
                item.level === 2 ? 'pl-4 text-sm' : ''
              } ${
                item.level === 3 ? 'pl-8 text-sm' : ''
              } ${
                item.level >= 4 ? 'pl-12 text-xs' : ''
              } ${
                activeId === item.id
                  ? 'text-primary-600 dark:text-primary-400 font-bold bg-primary-50 dark:bg-primary-900/20 px-3 py-2'
                  : 'text-accent-600 dark:text-accent-300 hover:text-accent-900 dark:hover:text-white hover:bg-accent-50 dark:hover:bg-accent-700/50 px-3 py-2'
              }`}
            >
              <span className="block truncate" title={item.text}>
                {item.text}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TableOfContents;
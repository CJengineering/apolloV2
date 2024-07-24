'use client';
import React, { useEffect, useState } from 'react';

const WebflowPage: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [cssLinks, setCssLinks] = useState<string[]>([]);
  const [jsLinks, setJsLinks] = useState<string[]>([]);

  useEffect(() => {
    const fetchWebflowContent = async () => {
      try {
        const response = await fetch('https://www.communityjameel.org/stories/harvesting-hope'); // Replace with your Webflow page URL
        const html = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Extract CSS and JS files
        const cssLinks = Array.from(doc.querySelectorAll('link[rel="stylesheet"]')).map(link => (link as HTMLLinkElement).href);
        const jsLinks = Array.from(doc.querySelectorAll('script[src]')).map(script => (script as HTMLScriptElement).src);

        setContent(html);
        setCssLinks(cssLinks);
        setJsLinks(jsLinks);
      } catch (error) {
        console.error('Error fetching Webflow content:', error);
      }
    };

    fetchWebflowContent();
  }, []);

  useEffect(() => {
    // Dynamically append CSS links to the document head
    cssLinks.forEach(link => {
      const linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.href = link;
      document.head.appendChild(linkElement);
    });

    // Dynamically append JS scripts to the document body
    jsLinks.forEach(src => {
      const scriptElement = document.createElement('script');
      scriptElement.src = src;
      scriptElement.async = true;
      document.body.appendChild(scriptElement);
    });
  }, [cssLinks, jsLinks]);

  return (
    <div>
      {/* Render the HTML content */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default WebflowPage;

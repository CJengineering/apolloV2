'use client';
import { useState, useEffect } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

const TocComponent = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const headerElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headers: Heading[] = Array.from(headerElements).map((header) => ({
      id: header.id || '',
      text: (header  as HTMLElement).innerText,
      level: parseInt(header.tagName.replace('H', ''), 10),
    }));
    setHeadings(headers);
  }, []);

  return (
    <nav>
      <ul>
        {headings.map((header) => (
          <li key={header.id} style={{ marginLeft: (header.level - 1) * 2 }}>
            <a href={`#${header.text}`}>{header.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TocComponent;

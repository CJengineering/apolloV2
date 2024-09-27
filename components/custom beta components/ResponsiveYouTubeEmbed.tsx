// components/ResponsiveYouTubeEmbed.tsx

import React from 'react';

interface ResponsiveYouTubeEmbedProps {
  embedId: string;
}

const ResponsiveYouTubeEmbed: React.FC<ResponsiveYouTubeEmbedProps> = ({ embedId }) => {
  return React.createElement(
    'div',
    { className: 'w-full aspect-video' },
    React.createElement('iframe', {
      className: 'w-full h-full',
      src: `https://www.youtube.com/embed/${embedId}`,
      title: 'YouTube video player',
      frameBorder: '0',
      allowFullScreen: true,
      loading: 'lazy',
    })
  );
};

export default ResponsiveYouTubeEmbed;

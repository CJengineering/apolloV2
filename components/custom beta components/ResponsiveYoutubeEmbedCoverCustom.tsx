"use client";
import React, { useState } from 'react';

interface ResponsiveYouTubeEmbedProps {
  embedId: string;
  coverImage: string; // URL of the custom cover image
}

const ResponsiveYouTubeEmbedCoverCustom: React.FC<ResponsiveYouTubeEmbedProps> = ({ embedId, coverImage }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  console.log('cover image',coverImage)

  return (
    <div className="relative w-full aspect-video">
      {!isPlaying ? (
        <div
          className="w-full h-full bg-cover bg-center cursor-pointer flex items-center justify-center"
          style={{ backgroundImage: `url(${coverImage})` }}
          onClick={() => setIsPlaying(true)}
        >
          <button
            className="w-16 h-16 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center"
            aria-label="Play video"
          >
            ▶
          </button>
        </div>
      ) : (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
};

export default ResponsiveYouTubeEmbedCoverCustom;

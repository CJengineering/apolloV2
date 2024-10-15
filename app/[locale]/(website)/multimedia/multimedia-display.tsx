'use client';
import React, { Suspense } from 'react'

import PostCard from '@/components/custom beta components/PostCard';
import { useMultimediaContext } from './multimedia-context';
import MediaCard from '@/components/CJ-components/components-CJ/basic components/MediaCard';
import { mapMultimediaToMediaCard } from '@/functions/transformers/multimediaToCardMultimedia';

export default function MultimediaDisplay() {
    const {filteredMultimedias} = useMultimediaContext();
   const cleanedMedia =filteredMultimedias.map((media) => mapMultimediaToMediaCard(media));
  return (
    <div className="grid gap-x-9 gap-y-4 grid-cols-1 lg:grid-cols-2 ">
     
    <Suspense>
     
      {cleanedMedia.map((post) => (
        <MediaCard key={post.name} {...post} />
      ))}
    </Suspense>
  </div>
  )
}

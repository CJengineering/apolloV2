'use client';
import React, { Suspense } from 'react'
import { usePostContext } from './post-context';
import PostCard from '@/components/custom beta components/PostCard';

export default function PostsDisplay() {
    const {filteredPosts} = usePostContext();
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 ">
     
    <Suspense>
      {filteredPosts.map((post) => (
        <PostCard key={post.name} content={post} />
      ))}
    </Suspense>
  </div>
  )
}

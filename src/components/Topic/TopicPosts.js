import React from 'react';
import PostCard from './PostCard';

export const TopicPosts = ({ title, posts }) => {
  return (
    <div className="flex flex-col gap-4 px-4 mb-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};


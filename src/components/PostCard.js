import React from 'react';
import { getFormattedDate } from '../utils/Date';

const PostCard = ({ post }) => {
  return (
    <div className="rounded-lg p-4 shadow-md hover:shadow-lg bg-white dark:bg-gray-800">
      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{post.text}</p>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-500 dark:text-gray-200">{getFormattedDate(post?.date)}</span>
      </div>
    </div>
  );
};

export default PostCard;

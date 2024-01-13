import React from "react";
import { getFormattedDate } from "../../utils/Date";

export const TopicBar = ({ title, posts }) => {
  return (
    <div className=" my-2 p-4 width-3/4 my-2 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          {title ?? ""}
        </h5>
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {posts?.map((post) => (
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {post?.title}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {getFormattedDate(post?.date)} | {post?.text.substring(0, 30)}
                  </p>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  View Post
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

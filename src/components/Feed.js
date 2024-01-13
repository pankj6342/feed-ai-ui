import React, { useEffect } from "react";
import { PostCard } from "./PostCard";
import { Link } from "react-router-dom";
import { TopicBar } from "./Topic/TopicBar";

export const Feed = ({ subscribedTopicPosts }) => {
  console.log({ subscribedTopicPosts });
  return (
    <div className="w-full">
      {!subscribedTopicPosts ? (
        <div classNameName="min-h-screen w-full flex flex-col items-center justify-center">
          No Topics Suscribed <br />
          <span>
            Go to{" "}
            <Link classNameName="text-blue-500" to="/topics">
              Explore Section
            </Link>
          </span>
        </div>
      ) : (
        <div classNameName="mx-auto">
          <div classNameName="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-col justify-between space-y-2 w-full">
            {Object.entries(subscribedTopicPosts).map(
              ([topicName, topicData]) => {
                const firstTwoPosts = topicData.posts.slice(0, 2);
                return <TopicBar title={topicName} posts={firstTwoPosts} />;
              }
            )}
          </div>
        </div>
      )}
    </div>
  );
};

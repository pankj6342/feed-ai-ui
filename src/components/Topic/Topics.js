import React, { useContext, useEffect, useState } from "react";
import TopicContext from "../../context/topic/TopicContext";
import { TopicCard } from "./TopicCard";
import UserContext from "../../context/user/UserContext";

export const Topics = () => {
  const { topics, subscribedTopics, unsubscribedTopics } = useContext(TopicContext);
  const {userData} = useContext(UserContext);
  const userId = userData?._id;
  useEffect(()=>{}, [userData?.subscriptions]);

  const TopicContainer = ({ title, topicList, subscribed}) => {
    return (
      <div className="my-2">
          <span>{title}</span>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {topicList?.map((topic) => (
              <TopicCard topic={topic} subscribed={subscribed} userId={userId}/>
            ))}
          </div>
      </div>
    );
  };

  return (
      <div className="w-full md:w-9/10 bg-white rounded-lg shadow-md space-x-2 p-4 mb-4">
        {!topics?.length ? (
          <div>No topics available currently.</div>
        ) : (
          <div className="w-full rounded-lg shadow-md p-3 flex flex-col">
            <TopicContainer
              title={"Subscribed Topics"}
              subscribed={true}
              topicList={subscribedTopics}
            />
            <hr />
            <TopicContainer
              title={"Explore Other Topics"}
              subscribed={false}
              topicList={unsubscribedTopics}
            />
          </div>
        )}
      </div>
  );
};

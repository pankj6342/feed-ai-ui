import React, { useContext, useState } from "react";
import TopicContext from "../../context/topic/TopicContext";

export const TopicCard = ({ topic, subscribed, userId }) => {
  const [isSubscribed, setIsSubscribed] = useState(subscribed);
  const { title, description } = topic;
  const {removeSubscriberFromTopic, addSubscriberToTopic} = useContext(TopicContext);

  const onClickHandler = async () => {
    try {
      if(isSubscribed) await removeSubscriberFromTopic(topic._id, userId);
      else await addSubscriberToTopic(topic._id, userId);
    } catch (error) {
      alert('An error occured')
    }
  }

  return (
    <div className="w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex space-x-8">
            {title}
          </h5>
        <button
          href="#"
          className={`mb-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-${
            isSubscribed ? "red" : "green"
          }-700 rounded-lg hover:bg-${
            isSubscribed ? "red" : "green"
          }-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
          onClick={()=>onClickHandler()}
        >
          {isSubscribed ? <>Unsubscribe </>: <> Subscribe <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg></>}
        </button>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
         {description ?? `Explore ${title}`}
        </p>
      </div>
    </div>
  );
};

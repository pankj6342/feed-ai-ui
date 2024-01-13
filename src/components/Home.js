import React, { useContext, useEffect } from "react";
import UserContext from "../context/user/UserContext";
import { Feed } from "./Feed";
import TopicContext from "../context/topic/TopicContext";

const Home = () => {
  const {posts} = useContext(UserContext);

  return <div className="w-[90vw] h-[90vh] p-5 bg-gray-200 flex flex-col items-center justify-center">
  <Feed subscribedTopicPosts={posts}/>
  </div>
};

export default Home;

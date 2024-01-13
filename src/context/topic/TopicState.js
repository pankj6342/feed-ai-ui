import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopicContext from "./TopicContext";
import axios from "axios";
import UserContext from "../user/UserContext";
import { baseUrl } from "../../config";

function TopicState(props) {
  const navigate = useNavigate();
  const host = baseUrl;
  const [topics, setTopics] = useState([]);
  const { userData, setUserData } = useContext(UserContext);
  const subscriptions = userData?.subscriptions;

  var [subscribedTopics, setSubsribedTopics] = useState([]);
  var [unsubscribedTopics, setUnsubscribedTopics] = useState([]);

  const filterTopics = (subscriptions, topics) => {
    let subscribed = [];
    let unsubscribed = [];
    for (const topic of topics) {
      if (subscriptions?.includes(topic._id)) subscribed.push(topic);
      else unsubscribed.push(topic);
    }
    setSubsribedTopics(subscribed);
    setUnsubscribedTopics(unsubscribed);
  };

  useEffect(() => {
    filterTopics(subscriptions, topics);
  }, [subscriptions, topics, userData]);

  useEffect(()=>{
      getAllTopics();
  }, []);

  const createTopic = async (title) => {
    try {
      const response = await axios.post(`${host}/api/topic/create`, {
        title,
      });
      const data = response?.data;
      if (data?.success) console.log(`topic ${title} successfully created`);
      else console.log("Error while creating topic");
    } catch (error) {
        console.log({createTopicError: error?.message});
    }
  };

  const addPostToTopic = async (postId, topicId) => {
    try {
        const response = await axios.post(`${host}/api/topic/addpost`, {
            topicId,
            postId,
          });
        const {data} = response;
        if(data?.success){
            console.log('post added to topic successfully');
        }
        else console.log('error while adding post to topic');     
    } catch (error) {
        console.log({addPostToTopicError: error?.message});
    }
  };

  const addSubscriberToTopic = async (topicId, userId) =>{
        try {
            const response = await axios.post(`${host}/api/topic/addsubscriber`, {
                topicId,
                userId,
              });
            const {data} = response;
            if(data?.success){
                console.log('subsriber added to topic successfully');
                alert(`Successfully Subscribed`);
                let newSubscriptionList = subscriptions.concat(topicId);
                setUserData({...userData, subscriptions: newSubscriptionList});
            }
            else console.log('error while adding subscriber to topic');     
        } catch (error) {
            console.log({addPostToTopicError: error?.message});
        }
  }

  const removeSubscriberFromTopic = async (topicId, userId) =>{
    try {
        const response = await axios.post(`${host}/api/topic/removesubscriber`, {
            topicId,
            userId,
          });
        const {data} = response;
        if(data?.success){
            console.log('topic unsubscribed successfully');
            alert(`Subscription Removed`);
            let newSubscriptionList = subscriptions.filter((e)=>e._id!==topicId);
            setUserData({...userData, subscriptions: newSubscriptionList});
        }
        else console.log('error while removing subscriber of topic');     
    } catch (error) {
        console.log({addPostToTopicError: error?.message});
    }
}

const getAllTopics = async () =>{
  try {
    const response = await axios.get(`${host}/api/topic/getAllTopics`);
    const {success, topics} = response?.data;
    console.log()
    if(success) setTopics(topics);
  } catch (error) {
      console.log({getAllTopicsError: error?.message});
  }
}

  return (
    <TopicContext.Provider value={{ createTopic, addPostToTopic, addSubscriberToTopic, removeSubscriberFromTopic, topics, subscribedTopics, unsubscribedTopics, setSubsribedTopics, setUnsubscribedTopics }}>
      {props.children}
    </TopicContext.Provider>
  );
}

export default TopicState;

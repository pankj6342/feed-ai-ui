import React from "react";
import { useNavigate } from "react-router-dom";
import PostContext from "./PostContext";
import axios from "axios";
import { baseUrl } from "../../config";

function PostState(props) {
  const navigate = useNavigate();
  const host = baseUrl;

  const createPost = async (title, text) => {
    try {
      const response = await axios.post(`${host}/api/post/create`, {
        title, text
      });
      const data = response?.data;
      if (data?.success) console.log(`post ${title} successfully created`);
      else console.log("Error while creating post");
    } catch (error) {
        console.log({createPostError: error?.message});
    }
  };

  return (
    <PostContext.Provider value={{ createPost }}>
      {props.children}
    </PostContext.Provider>
  );
}

export default PostState;

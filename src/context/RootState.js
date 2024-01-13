import React, { useState } from "react";
import RootContext from "./RootContext";
import UserState from "./user/UserState";
import TopicState from "./topic/TopicState";
import PostState from "./post/PostState";

function RootState(props) {
  return (
    // <RootContext.Provider value={}}>
      <UserState>
        <TopicState>
          <PostState>{props.children}</PostState>
        </TopicState>
      </UserState>
    // </RootContext.Provider>
  );
}

export default RootState;

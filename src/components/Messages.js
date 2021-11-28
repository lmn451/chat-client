import React from "react";
import Message from "./Message";

const Messages = ({ messages }) => {
  return (
    <ul>
      {messages?.map((message) => (
        <Message key={Math.random()} message={message} />
      ))}
    </ul>
  );
};

export default Messages;

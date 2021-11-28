import React from "react";
import styled from "styled-components";
import { useChatContext } from "./ChatsContext";

const Container = styled.li`
  border: 1px solid;
  cursor: pointer;
`;

const ChatPreview = ({ chat }) => {
  const { setChatID } = useChatContext();
  return (
    <Container
      onClick={() => {
        setChatID(chat.chatID);
      }}
    >
      <h2>{chat.chatID}</h2>
      <h3>{chat.chatName}</h3>
    </Container>
  );
};

export default ChatPreview;

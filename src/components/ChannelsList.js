import styled from "styled-components";
import React from "react";
import ChatPreview from "./ChatPreview";

const Container = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ChannelsList = ({ chats }) => {
  return (
    <Container>
      {chats.map((chat) => (
        <ChatPreview chat={chat} key={chat.chatID} />
      ))}
    </Container>
  );
};

export default ChannelsList;

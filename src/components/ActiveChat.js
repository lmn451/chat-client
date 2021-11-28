import React from "react";
import useChat from "../hooks/useChat";
import { useChatContext } from "./ChatsContext";
import Messages from "./Messages";
import styled from "styled-components";
import MessageForm from "./MessageForm";

const useMessages = () => {
  const { chat } = useChatContext();
  console.log("🚀 ~ file: ActiveChat.js ~ line 7 ~ useMessages ~ chat", chat);
  const { messages } = useChat(chat?.chatID);
  return messages;
};

const Container = styled.div``;

const ActiveChat = () => {
  const messages = useMessages();
  return (
    <Container>
      <Messages messages={messages} />
      <MessageForm />
    </Container>
  );
};

export default ActiveChat;

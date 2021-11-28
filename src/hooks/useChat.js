import { useEffect, useState } from "react";

const messagesForFirstChat = [
  {
    chatID: 1,
    messageID: Math.random(),
    author: "John",
    text: "HEllo from jon",
  },
  {
    chatID: 1,
    messageID: Math.random(),
    author: "Ken",
    text: "HEllo from ken",
  },
  {
    chatID: 1,
    messageID: Math.random(),
    author: "Dave",
    text: "HEllo from dave",
  },
  {
    chatID: 1,
    messageID: Math.random(),
    author: "Stever",
    text: "HEllo from stew",
  },
  {
    chatID: 1,
    messageID: Math.random(),
    author: "John",
    text: "Buyr from jon",
  },
];
const messagesForSecondChat = [
  {
    chatID: 2,
    messageID: Math.random(),
    author: "John",
    text: "PRiv from jon",
  },
  { chatID: 2, messageID: Math.random(), author: "Ken", text: "PRiv from ken" },
  {
    chatID: 2,
    messageID: Math.random(),
    author: "Dave",
    text: "PRiv from dave",
  },
  {
    chatID: 2,
    messageID: Math.random(),
    author: "Stever",
    text: "PRiv from stew",
  },
  {
    chatID: 2,
    messageID: Math.random(),
    author: "John",
    text: "Buyr from jon",
  },
];

const chats = [
  {
    messages: messagesForFirstChat,
  },
  {
    messages: messagesForSecondChat,
  },
];

const useChat = (chatID) => {
  const [chat, setChat] = useState({});
  useEffect(() => {
    setChat(chats[chatID - 1]);
  }, [chatID]);
  return chat;
};

export default useChat;

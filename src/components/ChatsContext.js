import { createContext, useContext, useState } from "react";
import useChats from "../hooks/useChats";

const defaultState = {
  chatID: 0,
  chatName: "default chat name",
  setChat: (chatID) => {},
};

const ChatContext = createContext(defaultState);

const useChatContext = () => useContext(ChatContext);

const ChatProvider = ({ children }) => {
  const chats = useChats();
  const [chatID, setChatID] = useState(1);

  const chat = chats[chatID - 1];

  const value = {
    chat,
    setChatID,
  };
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export { ChatProvider, useChatContext };

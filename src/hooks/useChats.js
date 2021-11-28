import { useEffect, useState } from "react";

const useChats = () => {
  const [chats, setChats] = useState([
    { chatID: 1, chatName: "First Chat" },
    { chatID: 2, chatName: "Second Chat" },
  ]);
  // useEffect(() => {
  //   setChats([
  //     { chatID: 1, chatName: "First Chat" },
  //     { chatID: 2, chatName: "Second Chat" },
  //   ]);
  // }, []);
  return chats;
};

export default useChats;

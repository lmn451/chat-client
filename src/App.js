import "./App.css";
import styled from "styled-components";
import ChannelsList from "./components/ChannelsList";
import ActiveChat from "./components/ActiveChat";
import { useEffect, useState } from "react";
import useChats from "./hooks/useChats";
import { ChatProvider } from "./components/ChatsContext";

const Container = styled.div`
  display: flex;
`;

function App() {
  const chats = useChats();
  return (
    <Container>
      <ChatProvider>
        <ChannelsList chats={chats} />
        <ActiveChat />
      </ChatProvider>
    </Container>
  );
}

export default App;

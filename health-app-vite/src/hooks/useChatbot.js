// src/hooks/useChatbot.js
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export function useChatbot() {
  const { messages, loading, sendMessage, resetChat } =
    useContext(ChatContext);

  return {
    history: messages,
    loading,
    sendMessage,
    resetChat,
  };
}


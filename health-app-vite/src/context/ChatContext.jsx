// src/context/ChatContext.jsx
import { createContext, useContext, useState } from "react";
import { UIContext } from "./UIContext";
import { FirebaseContext } from "./FirebaseContext";

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  const { setError } = useContext(UIContext);
  const { userId } = useContext(FirebaseContext);

  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      text: "Hello! I’m your AI health assistant. How can I help you today?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      role: "user",
      text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          message: text,
          history: messages.map((m) => ({
            role: m.role,
            content: m.text,
          })),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      const aiMsg = {
        id: Date.now() + 1,
        role: "assistant",
        text: data.reply,
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
      setError("Unable to reach the AI assistant.");
    } finally {
      setLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        text: "Hello! I’m your AI health assistant. How can I help you today?",
      },
    ]);
  };

  return (
    <ChatContext.Provider value={{ messages, loading, sendMessage, resetChat }}>
      {children}
    </ChatContext.Provider>
  );
}

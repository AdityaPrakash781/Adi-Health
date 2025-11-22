import { fetchWithBackoff } from "../utils/fetchWithBackoff";

export const sendChatToModel = async (messages) => {
  const res = await fetchWithBackoff("/api/chatbot", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });

  const data = await res.json();
  return data.reply;
};
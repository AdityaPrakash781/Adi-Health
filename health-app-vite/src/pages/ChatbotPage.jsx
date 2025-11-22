import ChatWindow from "../components/Chat/ChatWindow";
import ChatInput from "../components/Chat/ChatInput";
import { useChatbot } from "../hooks/useChatbot";
import ErrorBanner from "../components/Common/ErrorBanner";

export default function ChatbotPage() {
  const { history, loading, sendMessage } = useChatbot();

  return (
    <div className="flex flex-col h-[75vh] p-6 rounded-2xl bg-white shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Health Chatbot</h2>
      <ErrorBanner />
      <ChatWindow history={history} loading={loading} />
      <ChatInput onSend={sendMessage} disabled={loading} />
    </div>
  );
}
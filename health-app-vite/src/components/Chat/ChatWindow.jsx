import ChatMessage from "./ChatMessage";

export default function ChatWindow({ history = [], loading }) {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto pr-2 space-y-3">
      {history.map((msg) => (
        <ChatMessage key={msg.id ?? msg.createdAt} {...msg} />
      ))}

      {loading && (
        <div className="italic text-sm opacity-70 text-gray-500">Thinking...</div>
      )}
    </div>
  );
}
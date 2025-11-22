export default function ChatMessage({ role, text }) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`max-w-[70%] p-3 rounded-xl shadow-sm text-sm ${
          isUser
            ? "bg-primary text-white rounded-br-none"
            : "bg-lightBg text-darkText border border-border rounded-tl-none"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
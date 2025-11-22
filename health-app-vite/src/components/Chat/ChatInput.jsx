import { useState } from "react";

export default function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    onSend(value);
    setValue("");
  };

  return (
    <form onSubmit={submit} className="flex gap-3 mt-3">
      <input
        className="flex-1 p-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask something..."
      />

      <button
        disabled={disabled || !value.trim()}
        className={`px-6 py-3 rounded-xl text-white bg-primary transition-opacity ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Send
      </button>
    </form>
  );
}

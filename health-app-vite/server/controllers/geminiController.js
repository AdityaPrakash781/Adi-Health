// server/controllers/geminiController.js
import fetch from "node-fetch";

export const callGemini = async ({ messages, system }) => {
  const API_KEY = process.env.GEMINI_API_KEY;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${API_KEY}`;

  const payload = {
    contents: messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    })),
    systemInstruction: {
      parts: [{ text: system }]
    },
    tools: [{ google_search: {} }]
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (data.error) throw new Error(data.error.message);

  const candidate = data.candidates?.[0];
  return candidate?.content?.parts?.[0]?.text || "No response available.";
};

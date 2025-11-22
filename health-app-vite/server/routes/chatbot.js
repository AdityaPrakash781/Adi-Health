import express from "express";
import { callGemini } from "../controllers/geminiController.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { messages } = req.body;

    const system = `
You are a friendly medical information assistant.
You can explain medications, conditions, symptoms, and give general advice.
But you MUST say: "This is not a substitute for professional medical guidance."
Always use simple, helpful language.
    `;

    const reply = await callGemini({ messages, system });

    res.json({ reply });
  } catch (error) {
    console.error("Chatbot API Error:", error);
    res.status(500).json({ error: error.message || "Chatbot request failed." });
  }
});

export default router;
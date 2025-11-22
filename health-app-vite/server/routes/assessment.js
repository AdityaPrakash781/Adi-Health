import express from "express";
import { callGemini } from "../controllers/geminiController.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { metrics } = req.body;

    const system = `
You are a professional health analyst.
You analyze: steps, sleep, calories, distance, heart rate.
You give: 1) high-level insight 2) 3 specific actions.
Keep the tone objective, encouraging, medical-safe.
    `;

    const prompt = `
Here are the user's daily health metrics:
Steps: ${metrics.steps}
Sleep: ${metrics.sleep}
Calories: ${metrics.calories}
Distance: ${metrics.distance}
Heart Rate: ${metrics.heartRate}
Provide a medical-safe analysis.
    `;

    const reply = await callGemini({
      system,
      messages: [{ role: "user", text: prompt }],
    });

    res.json({ reply });
  } catch (error) {
    console.error("Assessment API Error:", error);
    res.status(500).json({ error: error.message || "Assessment request failed." });
  }
});

export default router;
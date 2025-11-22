import express from "express";

const router = express.Router();

const FIT_URL = "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate";

router.post("/aggregate", async (req, res) => {
  try {
    const { token, body } = req.body;

    if (!token) {
      return res.status(401).json({ error: "Missing Google Fit access token" });
    }

    const response = await fetch(FIT_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Google Fit Error:", err);
    res.status(500).json({ error: "Google Fit request failed" });
  }
});

export default router;
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import chatbotRoute from "./routes/chatbot.js";
import assessmentRoute from "./routes/assessment.js";
import fitRoute from "./routes/fit.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/chatbot", chatbotRoute);
app.use("/api/assessment", assessmentRoute);
app.use("/api/fit", fitRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
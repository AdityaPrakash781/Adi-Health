// api/assessmentAPI.js
import { fetchWithBackoff } from "../utils/fetchWithBackoff";

export const submitAssessment = async (assessmentData) => {
  const res = await fetchWithBackoff("/api/assessment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(assessmentData),
  });

  const data = await res.json();
  return data; // includes score, category, recommendations, etc.
};

export const getAssessmentHistory = async () => {
  const res = await fetchWithBackoff("/api/assessment/history", {
    method: "GET",
  });

  const data = await res.json();
  return data.history || [];
};

import { useState, useContext, useCallback } from "react";
import { FirebaseContext } from "../context/FirebaseContext";
import { UIContext } from "../context/UIContext";
import { addDoc, collection } from "firebase/firestore";
import { sendChatToModel } from "../api/chatbotAPI";

export const useAssessment = () => {
  const { db, userId } = useContext(FirebaseContext);
  const { setError, setLoading } = useContext(UIContext);

  const [assessment, setAssessment] = useState(null);

  const runAssessment = useCallback(
    async (userInput) => {
      if (!db || !userId) return;

      setLoading(true);

      try {
        const prompt = [
          { role: "system", text: "You are a medical triage assistant." },
          { role: "user", text: userInput },
        ];

        const responseText = await sendChatToModel(prompt);

        setAssessment(responseText);

        await addDoc(collection(db, "users", userId, "assessments"), {
          input: userInput,
          response: responseText,
          createdAt: new Date().toISOString(),
        });
      } catch (e) {
        console.error(e);
        setError("Unable to generate assessment.");
      } finally {
        setLoading(false);
      }
    },
    [db, userId, setError, setLoading]
  );

  return { assessment, runAssessment };
};
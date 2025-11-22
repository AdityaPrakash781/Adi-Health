// src/hooks/useGoogleFit.js
import { useState, useCallback, useContext } from "react";
import { UIContext } from "../context/UIContext";
import {
  syncGoogleFitData,
} from "../api/googleFitAPI";

export const useGoogleFit = () => {
  const { setError, setLoading } = useContext(UIContext);

  const [fitnessData, setFitnessData] = useState({
    steps: 0,
    calories: 0,
    distance: 0,
    heartRate: 0,
    sleep: 0,
  });

  const syncGoogleFit = useCallback(async () => {
    setLoading(true);

    try {
      const synced = await syncGoogleFitData();

      setFitnessData({
        steps: synced.steps ?? 0,
        calories: synced.calories ?? 0,
        distance: synced.distance ?? 0,
        heartRate: synced.heartRate ?? 0,
        sleep: synced.sleep ?? 0,
      });
    } catch (e) {
      console.error(e);
      setError("Google Fit sync failed.");
    } finally {
      setLoading(false);
    }
  }, []);

  return { fitnessData, syncGoogleFit };
};

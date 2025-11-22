import { fetchWithBackoff } from "../utils/fetchWithBackoff";

export const getGoogleFitSteps = async () => {
  const res = await fetchWithBackoff("/api/googlefit/steps", {
    method: "GET",
  });

  const data = await res.json();
  return data.steps || 0;
};

export const getGoogleFitHeartRate = async () => {
  const res = await fetchWithBackoff("/api/googlefit/heartrate", {
    method: "GET",
  });

  const data = await res.json();
  return data.heartRate || [];
};

export const syncGoogleFitData = async () => {
  const res = await fetchWithBackoff("/api/googlefit/sync", {
    method: "POST",
  });

  const data = await res.json();
  return data;
};
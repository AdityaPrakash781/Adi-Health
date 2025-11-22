// firebase/config.js
export const FIREBASE_LOCAL_CONFIG = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "ID",
  appId: "APP_ID",
  measurementId: "MEASURE_ID"
};

export const isLocalRun = typeof window.__initial_auth_token === "undefined";
export const firebaseConfig = isLocalRun
  ? FIREBASE_LOCAL_CONFIG
  : (window.__firebase_config ? JSON.parse(window.__firebase_config) : {});

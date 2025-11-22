// Replace these values with your actual Firebase configuration
export const FIREBASE_LOCAL_CONFIG = {
  apiKey: "AIzaSyBZrd-e2qRVeJHf1ixlZPUkTUDtkM7QAG4",                                    // Copy from Firebase Console
  authDomain: "adi-health-navigator.firebaseapp.com",   // Copy from Firebase Console
  projectId: "adi-health-navigator",                    // Copy from Firebase Console
  storageBucket: "adi-health-navigator.firebasestorage.app",    // Copy from Firebase Console
  messagingSenderId: "201401994608",                      // Copy from Firebase Console
  appId: "1:201401994608:web:0403f2086e3f80458053b5",              // Copy from Firebase Console
  measurementId: "G-VXSCGMPR37"                           // Copy from Firebase Console (optional)
};

export const isLocalRun = typeof window !== "undefined" && typeof window.__initial_auth_token === "undefined";

export const firebaseConfig = isLocalRun
  ? FIREBASE_LOCAL_CONFIG
  : typeof window !== "undefined" && window.__firebase_config
  ? JSON.parse(window.__firebase_config)
  : FIREBASE_LOCAL_CONFIG;















  
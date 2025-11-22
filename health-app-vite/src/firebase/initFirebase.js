import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInAnonymously,
  signInWithCustomToken,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./config";

export const initFirebase = ({ setDb, setAuth, setUserId, setError, setLoading }) => {
  try {
    const isMissing = !firebaseConfig.apiKey || firebaseConfig.apiKey.includes("example");
    if (isMissing) {
      console.warn("Firebase configuration not properly set. Using mock mode.");
      setError("Firebase not configured. Some features may not work.");
      setLoading(false);
      return;
    }

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);

    setDb(db);
    setAuth(auth);

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        setLoading(false);
      } else {
        try {
          const initialToken = typeof window !== "undefined" ? window.__initial_auth_token : null;
          if (initialToken) {
            await signInWithCustomToken(auth, initialToken);
          } else {
            const anon = await signInAnonymously(auth);
            setUserId(anon.user.uid);
          }
        } catch (err) {
          console.error("Auth error:", err);
          setError("Authentication failed.");
        } finally {
          setLoading(false);
        }
      }
    });
  } catch (err) {
    console.error("Firebase init error:", err);
    setError("Firebase initialization failed.");
    setLoading(false);
  }
};
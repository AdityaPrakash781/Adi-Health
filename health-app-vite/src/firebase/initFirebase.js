// firebase/initFirebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInAnonymously,
  signInWithCustomToken,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig, isLocalRun } from "./config";

export const initFirebase = ({ setDb, setAuth, setUserId, setError, setLoading }) => {
  try {
    const isMissing = !firebaseConfig.apiKey;
    if (isMissing) {
      setError("Missing Firebase configuration");
      setLoading(false);
      return;
    }

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);

    setDb(db);
    setAuth(auth);

    onAuthStateChanged(auth, async user => {
      if (user) {
        setUserId(user.uid);
        setLoading(false);
      } else {
        const initialToken = window.__initial_auth_token;
        if (initialToken) {
          await signInWithCustomToken(auth, initialToken);
        } else {
          const anon = await signInAnonymously(auth);
          setUserId(anon.user.uid);
        }
        setLoading(false);
      }
    });
  } catch (err) {
    console.error(err);
    setError("Firebase initialization failed.");
    setLoading(false);
  }
};

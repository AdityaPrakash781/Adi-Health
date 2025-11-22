import { createContext, useState, useEffect } from "react";
import { initFirebase } from "../firebase/initFirebase";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    initFirebase({ setDb, setAuth, setUserId, setError, setLoading });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        db,
        auth,
        userId,
        loading,
        error,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
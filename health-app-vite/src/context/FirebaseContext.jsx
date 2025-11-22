import { createContext, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const { db, userId, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <FirebaseContext.Provider value={{ db, userId }}>
      {children}
    </FirebaseContext.Provider>
  );
};
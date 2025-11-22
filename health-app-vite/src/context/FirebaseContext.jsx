// src/context/FirebaseContext.jsx
import { createContext, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const { db, userId } = useContext(AuthContext);

  return (
    <FirebaseContext.Provider value={{ db, userId }}>
      {children}
    </FirebaseContext.Provider>
  );
};

import { createContext, useState } from "react";

export const UIContext = createContext();

export function UIProvider({ children }) {
  const [error, setError] = useState(null);
  const [tab, setTab] = useState("reminders");
  const [loading, setLoading] = useState(false);

  return (
    <UIContext.Provider
      value={{
        error,
        setError,
        tab,
        setTab,
        loading,
        setLoading,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

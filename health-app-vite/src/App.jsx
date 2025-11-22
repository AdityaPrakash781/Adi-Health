import { useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
import { FirebaseProvider } from "./context/FirebaseContext";
import { UIProvider } from "./context/UIContext";
import { ChatProvider } from "./context/ChatContext";
import AppLayout from "./components/layout/AppLayout";
import AppRouter from "./router/AppRouter";
import { requestNotificationPermission } from "./utils/notifications";

export default function App() {
  useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <AuthProvider>
      <FirebaseProvider>
        <UIProvider>
          <ChatProvider>
            <AppLayout>
              <AppRouter />
            </AppLayout>
          </ChatProvider>
        </UIProvider>
      </FirebaseProvider>
    </AuthProvider>
  );
}


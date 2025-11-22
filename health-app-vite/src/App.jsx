import { useEffect } from "react";

// Context Providers
import { AuthProvider } from "./context/AuthContext";
import { FirebaseProvider } from "./context/FirebaseContext";
import { UIProvider } from "./context/UIContext";
import { ChatProvider } from "./context/ChatContext";

// Layout
import AppLayout from "./components/layout/AppLayout";

// Router
import AppRouter from "./router/AppRouter";

// Notifications
import { requestNotificationPermission } from "./utils/notifications";

export default function App() {

  // Ask for push notification permission when the app loads
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




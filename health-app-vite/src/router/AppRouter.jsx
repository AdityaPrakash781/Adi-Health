import { useContext } from "react";
import { UIContext } from "../context/UIContext";
import RemindersPage from "../pages/RemindersPage";
import ActivityPage from "../pages/ActivityPage";
import ChatbotPage from "../pages/ChatbotPage";
import MedicationsPage from "../pages/MedicationsPage";

export default function AppRouter() {
  const { tab } = useContext(UIContext);

  switch (tab) {
    case "reminders":
      return <RemindersPage />;

    case "activity":
      return <ActivityPage />;

    case "chatbot":
      return <ChatbotPage />;

    case "medications":
      return <MedicationsPage />;

    default:
      return <RemindersPage />;
  }
}
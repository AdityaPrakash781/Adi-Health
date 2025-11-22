import { useContext } from "react";
import { UIContext } from "../../context/UIContext";
import { Pill, Activity, Bot, BellPlus } from "lucide-react";

const MENU = [
  { id: "reminders", label: "Reminders", icon: BellPlus },
  { id: "activity", label: "Activity", icon: Activity },
  { id: "chatbot", label: "Chatbot", icon: Bot },
  { id: "medications", label: "Medications", icon: Pill },
];

export default function Sidebar() {
  const { tab, setTab } = useContext(UIContext);

  return (
    <aside className="w-60 h-screen bg-white border-r border-border p-4 flex flex-col gap-2">
      <h2 className="text-2xl font-semibold text-primary mb-4">Navigator</h2>

      {MENU.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => setTab(item.id)}
            className={`
              flex items-center gap-3 p-3 rounded-lg text-left
              ${tab === item.id
                ? "bg-primary text-white"
                : "hover:bg-gray-100 text-gray-700"}
            `}
          >
            <Icon size={20} />
            {item.label}
          </button>
        );
      })}
    </aside>
  );
}

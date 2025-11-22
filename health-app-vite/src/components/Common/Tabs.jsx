import { useContext } from "react";
import { UIContext } from "../../context/UIContext";

import { Pill, Activity, Bot, BellPlus } from "lucide-react";

const TABS = [
  { id: "reminders", label: "Reminders", icon: BellPlus },
  { id: "activity", label: "Activity", icon: Activity },
  { id: "chatbot", label: "Chatbot", icon: Bot },
  { id: "medications", label: "Medications", icon: Pill },
];


export default function Tabs() {
  const { tab, setTab } = useContext(UIContext);

  return (
    <div className="flex gap-3 bg-white p-3 rounded-xl shadow mb-4">
      {TABS.map((t) => {
  const Icon = t.icon;
  return (
    <button
      key={t.id}
      onClick={() => setTab(t.id)}
      className={`
        px-4 py-2 rounded-lg flex items-center gap-2 transition
        ${tab === t.id
          ? "bg-primary text-white"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"}
      `}
    >
      <Icon size={18} />
      {t.label}
    </button>
  );
})}
    </div>
  );
}



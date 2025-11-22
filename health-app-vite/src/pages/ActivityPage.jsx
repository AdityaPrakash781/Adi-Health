// src/pages/ActivityPage.jsx
import ActivitySummary from "../components/activity/ActivitySummary";
import ActivityStats from "../components/activity/ActivityStats";

export default function ActivityPage() {
  return (
    <div className="p-4 space-y-6">
      <ActivitySummary />
      <ActivityStats />
    </div>
  );
}

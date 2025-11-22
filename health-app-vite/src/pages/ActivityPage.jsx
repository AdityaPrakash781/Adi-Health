import ActivitySummary from "../components/Activity/ActivitySummary";
import ActivityStats from "../components/Activity/ActivityStats";

export default function ActivityPage() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-semibold mb-4">Activity Tracker</h1>
      <ActivitySummary />
      <ActivityStats />
    </div>
  );
}
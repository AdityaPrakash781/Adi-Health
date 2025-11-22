// src/components/activity/ActivityGrid.jsx
import StepsCard from "./StepsCard";
import CaloriesCard from "./CaloriesCard";
import HeartRateCard from "./HeartRateCard";
import SleepCard from "./SleepCard";
import DistanceCard from "./DistanceCard";

export default function ActivityGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <StepsCard />
      <CaloriesCard />
      <HeartRateCard />
      <SleepCard />
      <DistanceCard />
    </div>
  );
}

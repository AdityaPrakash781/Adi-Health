// src/components/activity/HeartRateCard.jsx
export default function HeartRateCard({ bpm = 82 }) {
  return (
    <div className="p-5 bg-pink-50 rounded-xl">
      <p className="text-sm text-gray-600">Heart Rate</p>
      <p className="text-3xl font-bold">{bpm} bpm</p>
    </div>
  );
}

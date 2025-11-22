// src/components/activity/DistanceCard.jsx
export default function DistanceCard({ km = 5.2 }) {
  return (
    <div className="p-5 bg-green-50 rounded-xl">
      <p className="text-sm text-gray-600">Distance</p>
      <p className="text-3xl font-bold">{km} km</p>
    </div>
  );
}

// src/components/activity/StepsCard.jsx
export default function StepsCard({ steps = 8432 }) {
  return (
    <div className="p-5 bg-indigo-50 rounded-xl">
      <p className="text-sm text-gray-600">Steps</p>
      <p className="text-3xl font-bold">{steps.toLocaleString()}</p>
    </div>
  );
}

// src/components/activity/CaloriesCard.jsx
export default function CaloriesCard({ calories = 534 }) {
  return (
    <div className="p-5 bg-purple-50 rounded-xl">
      <p className="text-sm text-gray-600">Calories</p>
      <p className="text-3xl font-bold">{calories} kcal</p>
    </div>
  );
}

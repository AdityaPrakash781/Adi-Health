export default function ActivitySummary() {
  return (
    <div className="bg-white shadow rounded-xl p-5">
      <h2 className="text-lg font-semibold">Today's Summary</h2>
      <p className="text-sm text-gray-500">Your daily health metrics</p>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="p-4 bg-indigo-50 rounded-lg">
          <p className="text-sm text-gray-600">Steps</p>
          <p className="text-xl font-bold">8,432</p>
        </div>

        <div className="p-4 bg-purple-50 rounded-lg">
          <p className="text-sm text-gray-600">Calories</p>
          <p className="text-xl font-bold">534 kcal</p>
        </div>

        <div className="p-4 bg-pink-50 rounded-lg">
          <p className="text-sm text-gray-600">Heart Rate</p>
          <p className="text-xl font-bold">82 bpm</p>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600">Sleep</p>
          <p className="text-xl font-bold">6.8 hrs</p>
        </div>
      </div>
    </div>
  );
}
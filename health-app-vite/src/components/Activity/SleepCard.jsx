export default function SleepCard({ hours = 6.8 }) {
  return (
    <div className="p-5 bg-blue-50 rounded-xl">
      <p className="text-sm text-gray-600">Sleep</p>
      <p className="text-3xl font-bold">{hours} hrs</p>
    </div>
  );
}
export default function ScheduleList({ meds }) {
  if (!meds.length)
    return (
      <p className="text-gray-500 text-center mt-4">
        No scheduled medications.
      </p>
    );

  // Group meds by time
  const grouped = meds.reduce((acc, med) => {
    acc[med.time] = acc[med.time] || [];
    acc[med.time].push(med);
    return acc;
  }, {});

  return (
    <div className="space-y-6 mt-4">
      {Object.keys(grouped).map((time) => (
        <div key={time} className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-2">{time}</h3>

          <ul className="space-y-2">
            {grouped[time].map((med) => (
              <li key={med.id} className="text-gray-700">
                {med.name} — {med.dosage}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

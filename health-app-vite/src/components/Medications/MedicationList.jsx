export default function MedicationList({ meds, onToggle, onDelete }) {
  if (!meds.length)
    return (
      <p className="text-gray-500 text-center mt-4">No medications added yet.</p>
    );

  return (
    <div className="space-y-3">
      {meds.map((med) => (
        <div
          key={med.id}
          className="bg-white shadow-sm p-4 rounded-xl flex justify-between items-center"
        >
          <div>
            <h3 className="font-semibold text-lg">{med.name}</h3>
            <p className="text-gray-600 text-sm">{med.dosage}</p>
            <p className="text-gray-500 text-sm">Time: {med.time}</p>
            <p className="text-gray-500 text-sm capitalize">
              Frequency: {med.frequency.replace("-", " ")}
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <input
              type="checkbox"
              checked={med.done}
              onChange={(e) => onToggle(med.id, e.target.checked)}
              className="w-5 h-5"
            />

            <button
              onClick={() => onDelete(med.id)}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

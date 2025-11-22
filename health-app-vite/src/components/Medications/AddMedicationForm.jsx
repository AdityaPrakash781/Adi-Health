import { useState, useContext } from "react";
import { UIContext } from "../../context/UIContext";

export default function AddMedicationForm({ onAdd }) {
  const { setError } = useContext(UIContext);

  const [name, setName] = useState("");
  const [dosage, setDosage] = useState("");
  const [time, setTime] = useState("");
  const [frequency, setFrequency] = useState("daily");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !dosage.trim() || !time.trim()) {
      setError("All fields are required.");
      return;
    }

    onAdd({
      name,
      dosage,
      time,
      frequency,
      done: false,
    });

    setName("");
    setDosage("");
    setTime("");
    setFrequency("daily");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-sm p-5 rounded-xl space-y-4"
    >
      <h2 className="text-xl font-semibold">Add Medication</h2>

      <div className="space-y-1">
        <label className="text-sm text-gray-600">Name</label>
        <input
          className="w-full p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Paracetamol"
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm text-gray-600">Dosage</label>
        <input
          className="w-full p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
          placeholder="500 mg"
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm text-gray-600">Time</label>
        <input
          type="time"
          className="w-full p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm text-gray-600">Frequency</label>
        <select
          className="w-full p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="twice-daily">Twice Daily</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Add Medication
      </button>
    </form>
  );
}
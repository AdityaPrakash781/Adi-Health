import AddMedicationForm from "../components/Medications/AddMedicationForm";
import MedicationList from "../components/Medications/MedicationList";
import ScheduleList from "../components/Medications/ScheduleList";

import { useMedications } from "../hooks/useMedications";
import { calculateStreak } from "../utils/streaks";
import { scheduleLocalReminder } from "../utils/reminderScheduler";

export default function MedicationsPage() {
  const { medications, addMedication, toggleMedication, deleteMedication } =
    useMedications();

  // Streak analytics
  const streak = calculateStreak(medications);

  // Handle new medication addition + reminder scheduling
  const handleAdd = (med) => {
    addMedication(med);
    scheduleLocalReminder(med); // local notification reminder
  };

  return (
    <div className="space-y-8">

      {/* Streak Analytics Card */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-1">Medication Consistency</h2>
        <p className="text-gray-600 mb-3">
          Track your adherence and stay consistent
        </p>
        <div className="text-3xl font-bold text-primary">
          {streak.percentage}% — <span className="text-gray-700">{streak.message}</span>
        </div>
      </div>

      {/* Add Medication Form */}
      <AddMedicationForm onAdd={handleAdd} />

      {/* Medication List */}
      <MedicationList
        meds={medications}
        onToggle={toggleMedication}
        onDelete={deleteMedication}
      />

      {/* Scheduled by Time */}
      <ScheduleList meds={medications} />
    </div>
  );
}




import AddMedicationForm from "../components/Medications/AddMedicationForm";
import MedicationList from "../components/Medications/MedicationList";
import ScheduleList from "../components/Medications/ScheduleList";
import { useMedications } from "../hooks/useMedications";
import { calculateStreak } from "../utils/streaks";
import { scheduleLocalReminder } from "../utils/reminderScheduler";
import ErrorBanner from "../components/Common/ErrorBanner";

export default function MedicationsPage() {
  const { medications, addMedication, toggleMedication, deleteMedication } =
    useMedications();

  const streak = calculateStreak(medications);

  const handleAdd = (med) => {
    addMedication(med);
    scheduleLocalReminder(med);
  };

  return (
    <div className="space-y-8">
      <ErrorBanner />

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-1">Medication Consistency</h2>
        <p className="text-gray-600 mb-3">
          Track your adherence and stay consistent
        </p>
        <div className="text-3xl font-bold text-primary">
          {streak.percentage}% — <span className="text-gray-700">{streak.message}</span>
        </div>
      </div>

      <AddMedicationForm onAdd={handleAdd} />

      <MedicationList
        meds={medications}
        onToggle={toggleMedication}
        onDelete={deleteMedication}
      />

      <ScheduleList meds={medications} />
    </div>
  );
}
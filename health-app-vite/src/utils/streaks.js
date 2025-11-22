export function calculateStreak(medications) {
  const completed = medications.filter((m) => m.done).length;
  const total = medications.length;

  if (total === 0) {
    return { percentage: 0, message: "Add medications to start tracking!" };
  }

  const streak = Math.round((completed / total) * 100);

  return {
    percentage: streak,
    message:
      streak >= 90
        ? "Excellent!"
        : streak >= 70
        ? "Great Progress!"
        : streak >= 40
        ? "Keep Going!"
        : "Let's Improve!",
  };
}
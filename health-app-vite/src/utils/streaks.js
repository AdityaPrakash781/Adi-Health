export function calculateStreak(medications) {
  const completed = medications.filter((m) => m.done).length;
  const total = medications.length;

  const streak = Math.round((completed / total) * 100);

  return {
    percentage: streak || 0,
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

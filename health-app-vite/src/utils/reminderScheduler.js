export function scheduleLocalReminder(med) {
  if (!("Notification" in window)) return;

  Notification.requestPermission().then((permission) => {
    if (permission !== "granted") return;

    const [hour, minute] = med.time.split(":").map(Number);

    const now = new Date();
    const reminder = new Date();
    reminder.setHours(hour, minute, 0, 0);

    if (reminder < now) {
      reminder.setDate(reminder.getDate() + 1);
    }

    const timeout = reminder.getTime() - now.getTime();

    setTimeout(() => {
      new Notification("Medication Reminder", {
        body: `${med.name} — ${med.dosage}`,
      });
    }, timeout);
  });
}

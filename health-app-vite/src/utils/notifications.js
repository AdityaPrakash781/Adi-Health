export function requestNotificationPermission() {
  if (!("Notification" in window)) return false;

  Notification.requestPermission();
  return true;
}

export function sendPushNotification(title, message) {
  if (Notification.permission !== "granted") return;

  new Notification(title, { body: message });
}

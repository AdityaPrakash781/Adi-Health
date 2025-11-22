// firebase/chatService.js
import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
  limit,
} from "firebase/firestore";

export const CHAT_COLLECTION = (appId, userId) =>
  `/artifacts/${appId}/users/${userId}/chats`;

export const listenToChatHistory = (db, appId, userId, callback) => {
  const ref = collection(db, CHAT_COLLECTION(appId, userId));
  const q = query(ref, orderBy("createdAt", "asc"), limit(100));

  return onSnapshot(q, snap => {
    const chats = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(chats);
  });
};

export const saveChatMessage = async (db, appId, userId, message) => {
  const ref = collection(db, CHAT_COLLECTION(appId, userId));
  await addDoc(ref, message);
};

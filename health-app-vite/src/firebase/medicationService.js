// src/firebase/medicationService.js
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

export const MEDICATION_COLLECTION = (userId) =>
  `/users/${userId}/medications`;

export async function addMedication(db, userId, data) {
  const ref = collection(db, MEDICATION_COLLECTION(userId));
  return await addDoc(ref, {
    ...data,
    createdAt: new Date(),
  });
}

export async function getMedications(db, userId) {
  const ref = collection(db, MEDICATION_COLLECTION(userId));
  const snapshot = await getDocs(ref);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function deleteMedication(db, userId, id) {
  const ref = doc(db, MEDICATION_COLLECTION(userId), id);
  await deleteDoc(ref);
}

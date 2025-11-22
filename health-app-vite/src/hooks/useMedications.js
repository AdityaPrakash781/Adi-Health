// src/hooks/useMedications.js
import { useState, useEffect, useCallback, useContext } from "react";
import { FirebaseContext } from "../context/FirebaseContext";
import { UIContext } from "../context/UIContext";
import {
  addDoc,
  deleteDoc,
  updateDoc,
  collection,
  doc,
  onSnapshot,
} from "firebase/firestore";

export const useMedications = () => {
  const { db, userId } = useContext(FirebaseContext);
  const { setError } = useContext(UIContext);

  const [medications, setMedications] = useState([]);

  useEffect(() => {
    if (!db || !userId) return;

    const colRef = collection(db, "users", userId, "medications");

    return onSnapshot(
      colRef,
      (snap) => {
        const meds = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setMedications(meds);
      },
      () => setError("Unable to fetch medications.")
    );
  }, [db, userId]);

  const addMedication = useCallback(
    async (med) => {
      try {
        await addDoc(collection(db, "users", userId, "medications"), med);
      } catch (e) {
        console.error(e);
        setError("Failed to add medication.");
      }
    },
    [db, userId]
  );

  const toggleMedication = useCallback(
    async (id, done) => {
      try {
        await updateDoc(doc(db, "users", userId, "medications", id), { done });
      } catch (e) {
        setError("Unable to update medication.");
      }
    },
    [db, userId]
  );

  const deleteMedication = useCallback(
    async (id) => {
      try {
        await deleteDoc(doc(db, "users", userId, "medications", id));
      } catch (e) {
        setError("Unable to delete medication.");
      }
    },
    [db, userId]
  );

  return { medications, addMedication, toggleMedication, deleteMedication };
};

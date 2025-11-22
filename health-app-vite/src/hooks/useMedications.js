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

    const unsubscribe = onSnapshot(
      colRef,
      (snap) => {
        const meds = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setMedications(meds);
      },
      (error) => {
        console.error("Medications fetch error:", error);
        setError("Unable to fetch medications.");
      }
    );

    return () => unsubscribe();
  }, [db, userId, setError]);

  const addMedication = useCallback(
    async (med) => {
      if (!db || !userId) return;

      try {
        await addDoc(collection(db, "users", userId, "medications"), {
          ...med,
          createdAt: new Date().toISOString(),
        });
      } catch (e) {
        console.error(e);
        setError("Failed to add medication.");
      }
    },
    [db, userId, setError]
  );

  const toggleMedication = useCallback(
    async (id, done) => {
      if (!db || !userId) return;

      try {
        await updateDoc(doc(db, "users", userId, "medications", id), { done });
      } catch (e) {
        console.error(e);
        setError("Unable to update medication.");
      }
    },
    [db, userId, setError]
  );

  const deleteMedication = useCallback(
    async (id) => {
      if (!db || !userId) return;

      try {
        await deleteDoc(doc(db, "users", userId, "medications", id));
      } catch (e) {
        console.error(e);
        setError("Unable to delete medication.");
      }
    },
    [db, userId, setError]
  );

  return { medications, addMedication, toggleMedication, deleteMedication };
};
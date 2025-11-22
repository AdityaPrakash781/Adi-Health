import { useContext } from "react";
import { UIContext } from "../../context/UIContext";

export default function ErrorBanner() {
  const { error, setError } = useContext(UIContext);

  if (!error) return null;

  return (
    <div className="mb-4 p-4 rounded-lg bg-red-100 border border-red-300 text-red-700 flex justify-between items-center">
      <span>{error}</span>
      <button
        onClick={() => setError(null)}
        className="font-semibold text-red-800 hover:text-red-900"
      >
        ✕
      </button>
    </div>
  );
}
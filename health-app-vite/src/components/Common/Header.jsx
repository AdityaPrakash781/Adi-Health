import Tabs from "../common/Tabs";
import ErrorBanner from "../common/ErrorBanner";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-border px-6 py-4">
      <div className="max-w-3xl mx-auto">
        {/* App Title */}
        <h1 className="text-2xl font-semibold text-primary mb-3">
          Health Navigator
        </h1>

        {/* Tabs for Reminder / Activity / Chatbot */}
        <Tabs />

        {/* Global error banner (only shows when error exists) */}
        <ErrorBanner />
      </div>
    </header>
  );
}

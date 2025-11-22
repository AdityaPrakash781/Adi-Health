import Sidebar from "./Sidebar";

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-neutralBg flex">
      <Sidebar />

      <main className="flex-1 container max-w-4xl mx-auto py-6 px-6">
        {children}
      </main>
    </div>
  );
}

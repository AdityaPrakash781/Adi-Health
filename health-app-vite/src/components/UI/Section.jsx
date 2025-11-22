// src/components/UI/Section.jsx
export default function Section({ title, children }) {
  return (
    <section className="bg-white border border-border shadow-sm rounded-xl p-6 space-y-4">
      {title && <h2 className="text-xl font-semibold text-foreground">{title}</h2>}
      {children}
    </section>
  );
}

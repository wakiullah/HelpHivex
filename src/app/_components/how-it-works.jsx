const steps = [
  { title: "Start a Campaign", desc: "Start a campaign program." },
  { title: "Share with Community", desc: "Share your story to build reach." },
  { title: "Collect Donations", desc: "Commit to your goals." },
];

export default function HowItWorks() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12">
      <h2 className="text-2xl font-bold mb-6">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-[var(--color-card)] rounded-lg shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-slate-800/10 flex items-center justify-center mb-4">
              {i + 1}
            </div>
            <h4 className="font-semibold">{s.title}</h4>
            <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

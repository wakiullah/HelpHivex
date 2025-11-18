const stats = [
  { value: "5.3k", label: "Donors" },
  { value: "280", label: "Campaigns" },
  { value: "$500k+", label: "Funds Raised" },
];

export default function StatsBars() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-6">
          Together we've raised $500K+ for 120+ campaigns
        </h3>
        <div className="grid grid-cols-3 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

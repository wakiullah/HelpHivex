import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Raise Funds. Create Impact. Connect with Supporters.
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl">
          A modern crowdfunding platform for charities, startups & individuals.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button className="btn-primary px-6 py-3">Start a Campaign</Button>
          <button className="rounded-md border px-6 py-3 bg-transparent">
            Browse Campaigns
          </button>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <div className="w-80 md:w-96 h-64 bg-[var(--color-card)] rounded-2xl shadow-lg flex items-center justify-center">
          <img
            src="/illustration-heart.png"
            alt="illustration"
            className="w-3/4"
          />
        </div>
      </div>
    </section>
  );
}

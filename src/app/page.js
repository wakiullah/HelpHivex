import Header from "@/components/common/header";
import Hero from "./_components/hero";
import TrendingCampaigns from "./_components/trending-campaigns";
import HowItWorks from "./_components/how-it-works";
import StarsBars from "./_components/stars-bars";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header />
      <main>
        <Hero />
        <TrendingCampaigns />
        <HowItWorks />
        <StarsBars />
      </main>
      <footer className="px-6 md:px-12 lg:px-24 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} FundBridge — Built with Next.js & shadcn/ui
      </footer>
    </div>
  );
}

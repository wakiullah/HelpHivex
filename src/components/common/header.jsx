import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="py-6 px-6 md:px-12 lg:px-24 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-bold">
          FB
        </div>
        <span className="font-semibold text-lg">FundBridge</span>
      </div>

      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a className="hover:underline" href="#">
          Home
        </a>
        <a className="hover:underline" href="#campaigns">
          Campaigns
        </a>
        <a className="hover:underline" href="#start">
          Start Fundrading
        </a>
        <a className="hover:underline" href="#about">
          About
        </a>
        <Button className="ml-4">Start a Campaign</Button>
      </nav>

      {/* Mobile menu CTA */}
      <div className="md:hidden">
        <Button>Start</Button>
      </div>
    </header>
  );
}

import CampaignCard from "@/components/common/campain-card";

const campaigns = [
  {
    title: "Help Fund Education",
    raised: 2000,
    target: 43000,
    image: "/camp1.jpg",
    author: "Sustainlife",
  },
  {
    title: "Support Disaster Relief",
    raised: 1230,
    target: 42000,
    image: "/camp2.jpg",
    author: "Samarino",
  },
  {
    title: "Plant Trees for the Planet",
    raised: 3500,
    target: 41000,
    image: "/camp3.jpg",
    author: "Stand4Earth",
  },
  {
    title: "Medical Fund for James",
    raised: 900,
    target: 3500,
    image: "/camp4.jpg",
    author: "Friends of James",
  },
];

export default function TrendingCampaigns() {
  return (
    <section id="campaigns" className="px-6 md:px-12 lg:px-24 py-12">
      <h2 className="text-2xl font-bold mb-6">Trending Campaigns</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {campaigns.map((c, i) => (
          <CampaignCard
            key={i}
            title={c.title}
            raised={c.raised}
            target={c.target}
            image={c.image}
            author={c.author}
          />
        ))}
      </div>
    </section>
  );
}

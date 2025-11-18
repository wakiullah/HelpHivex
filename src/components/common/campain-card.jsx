import Image from "next/image";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function CampaignCard({ title, author, raised, target, image }) {
  const progress = Math.min(100, Math.round((raised / target) * 100));
  return (
    <Card className="p-0 overflow-hidden">
      <div className="h-40 w-full bg-gray-100 relative">
        {image ? (
          <Image src={image} alt={title} fill className="object-cover" />
        ) : (
          <div className="w-full h-40 flex items-center justify-center text-white bg-gradient-to-r from-green-400 to-emerald-600">
            Image
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm mt-1 text-muted-foreground">{author}</p>

        <div className="mt-4">
          <div className="flex items-baseline justify-between">
            <div className="text-lg font-bold">${raised.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">
              ${target.toLocaleString()} goal
            </div>
          </div>

          <div className="w-full bg-slate-100 rounded-full h-2 mt-3 overflow-hidden">
            <div
              className="h-2 rounded-full bg-[var(--color-primary)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-4">
            <Button className="w-full">Donate Now</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

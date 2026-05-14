import { Quote, Star } from "lucide-react";

export function Testimonials({
  items,
  gradient = "linear-gradient(180deg, #2F7D57 0%, #3B82F6 100%)",
}: {
  items: { quote: string; name: string; location?: string }[];
  gradient?: string;
}) {
  return (
    <div className="overflow-x-auto -mx-6 px-6 pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex gap-6 snap-x snap-mandatory">
        {items.map((t, i) => (
          <article
            key={i}
            className="snap-start shrink-0 w-[88vw] sm:w-[460px] rounded-[32px] p-10 text-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:-translate-y-2"
            style={{ background: gradient }}
          >
            <Quote className="opacity-40 mb-6" size={48} />
            <p className="text-[20px] leading-[1.6] font-medium">{t.quote}</p>
            <div className="mt-8 flex items-center justify-between">
              <div>
                <div className="font-semibold">{t.name}</div>
                {t.location && <div className="text-white/70 text-sm">{t.location}</div>}
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} className="fill-yellow-300 stroke-yellow-300" />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

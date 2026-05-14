import { Quote, Star } from "lucide-react";

export function Testimonials({
  items,
  gradient = "linear-gradient(180deg, #2F7D57 0%, #3B82F6 100%)",
}: {
  items: { quote: string; name: string; location?: string }[];
  gradient?: string;
}) {
  return (
    <div className="overflow-x-auto -mx-6 px-6 pb-8 scroll-snap-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex gap-6 pr-12">
        {items.map((t, i) => (
          <article
            key={i}
            className="snap-start shrink-0 w-[86vw] sm:w-[440px] rounded-[32px] p-9 text-white shadow-[0_22px_60px_-20px_rgba(0,0,0,0.35)] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.45)] relative overflow-hidden"
            style={{ background: gradient }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0) 60%)" }} />
            <Quote className="opacity-40 mb-5 relative" size={42} />
            <p className="text-[18px] leading-[1.65] font-medium relative">{t.quote}</p>
            <div className="mt-7 flex items-center justify-between relative">
              <div>
                <div className="font-semibold">{t.name}</div>
                {t.location && <div className="text-white/70 text-sm">{t.location}</div>}
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="fill-yellow-300 stroke-yellow-300" />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

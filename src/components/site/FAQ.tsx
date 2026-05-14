import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="max-w-4xl mx-auto">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b" style={{ borderColor: "var(--divider)" }}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-8 text-left"
            >
              <span className="text-[22px] md:text-[28px] font-semibold text-[#2C2C2C]" style={{ color: "#2C2C2C" }}>
                {it.q}
              </span>
              <ChevronDown
                className="shrink-0 transition-transform duration-500 text-[var(--deep-green)]"
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                size={28}
              />
            </button>
            <div
              className="grid transition-all duration-500 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
            >
              <div className="overflow-hidden">
                <p className="text-paragraph pb-8 pr-12">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

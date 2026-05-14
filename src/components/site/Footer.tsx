import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-[var(--background-alt)] border-t border-[var(--divider)]">
      <div className="container-wellness py-20 grid gap-12 md:grid-cols-4">
        <div className="space-y-4">
          <div className="text-2xl font-bold" style={{ background: "var(--gradient-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Stillwave
          </div>
          <p className="text-[15px] text-[#5B5B5B] leading-relaxed max-w-xs">
            A gentle space for sleep, calm, and emotional wellbeing.
          </p>
        </div>
        {[
          { title: "Explore", items: [["Sleep","/sleep"],["Stress & Anxiety","/stress"],["Mindfulness","/mindfulness"]] },
          { title: "Company", items: [["About","/"],["Careers","/"],["Press","/"]] },
          { title: "Account", items: [["Sign In","/signin"],["Get Started","/onboarding"],["Help","/"]] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#6B7280] mb-5" style={{ color: "#6B7280" }}>{col.title}</h4>
            <ul className="space-y-3">
              {col.items.map(([label, href]) => (
                <li key={label}><Link to={href as string} className="text-[16px] text-[#2C2C2C] hover:text-[var(--deep-green)] transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--divider)] py-8 text-center text-sm text-[#6B7280]">
        © {new Date().getFullYear()} Stillwave. Breathe gently.
      </div>
    </footer>
  );
}

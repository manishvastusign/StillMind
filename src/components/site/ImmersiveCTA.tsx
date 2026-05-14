import { Link } from "@tanstack/react-router";
import forest from "@/assets/cta-forest.jpg";

export function ImmersiveCTA({
  title,
  subtitle,
  cta = "Begin your journey",
  to = "/onboarding",
  overlay = "linear-gradient(135deg, rgba(31,79,62,0.92), rgba(59,130,246,0.7))",
  bgImage,
}: {
  title: string;
  subtitle: string;
  cta?: string;
  to?: string;
  overlay?: string;
  bgImage?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <img
        src={bgImage ?? forest}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: overlay }} />
      <div className="relative container-wellness py-32 md:py-44 text-center text-white">
        <h2 className="heading-section max-w-3xl mx-auto" style={{ color: "#fff" }}>
          {title}
        </h2>
        <p className="mt-6 text-paragraph max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
          {subtitle}
        </p>
        <Link to={to} className="btn-cta mt-12 inline-flex" style={{ boxShadow: "0 0 60px rgba(110,231,231,0.35), 0 14px 40px rgba(59,130,246,0.45)" }}>
          {cta}
        </Link>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/screening")({
  head: () => ({ meta: [{ title: "Wellness Screening — StillMind" }] }),
  component: Screening,
});

function Screening() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <section className="pt-[160px] pb-32">
        <div className="container-wellness max-w-3xl text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--sage)]">Wellness Screening</p>
            <h1 className="heading-hero mt-6">A gentle 3-minute check-in.</h1>
            <p className="text-paragraph mt-8">
              A private, science-backed screening to help you understand where your sleep, stress and mindfulness are today — and what could help most.
            </p>
            <Link to="/onboarding" className="btn-cta mt-12 inline-flex">Begin screening</Link>
          </Reveal>
        </div>
      </section>
      <Footer />
    </div>
  );
}

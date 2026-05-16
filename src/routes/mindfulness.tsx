import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FAQ } from "@/components/site/FAQ";
import { Testimonials } from "@/components/site/Testimonials";
import { Reveal } from "@/components/site/Reveal";
import { ImmersiveCTA } from "@/components/site/ImmersiveCTA";

import {
  Brain,
  Flower2,
  Wind,
  Footprints,
  HeartHandshake,
  Sparkles,
  Moon,
  Focus,
  Leaf,
} from "lucide-react";

import hero from "@/assets/hero-mindfulness.jpg";

export const Route = createFileRoute("/mindfulness")({
  head: () => ({
    meta: [
      { title: "Mindfulness — StillMind" },
      {
        name: "description",
        content:
          "Mindfulness, meditation and guided programs to build healthy habits that last.",
      },
    ],
  }),
  component: MindPage,
});

const cats = [
  {
    title: "Daily Mindfulness",
    description: "A 5-minute pause for ordinary days.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Guided Meditation",
    description:
      "Hundreds of sessions, every mood covered.",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Breath Awareness",
    description:
      "Use your breath as the simplest anchor.",
    image:
      "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Mindful Walking",
    description:
      "Take your practice into the world.",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Emotional Presence",
    description:
      "Sit kindly with whatever's here.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Gratitude Practice",
    description:
      "Train your attention toward what's good.",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1200&auto=format&fit=crop",
  },
];

const habits = [
  {
    title: "Reduce Mental Noise",
    icon: Brain,
  },
  {
    title: "Improve Emotional Awareness",
    icon: HeartHandshake,
  },
  {
    title: "Build Calm Daily Routines",
    icon: Leaf,
  },
  {
    title: "Increase Focus",
    icon: Focus,
  },
  {
    title: "Sleep More Peacefully",
    icon: Moon,
  },
  {
    title: "Feel More Present",
    icon: Sparkles,
  },
];

function MindPage() {
  return (
    <div
      className="min-h-screen bg-[var(--background)]"
      style={{ ["--deep-green" as never]: "#2F6B52" }}
    >
      <Navbar accent="#2F6B52" />

      <section
        className="pt-[140px] pb-32 md:pb-40"
        style={{
          background:
            "linear-gradient(180deg, var(--background) 0%, #ECEDE7 100%)",
        }}
      >
        <div className="container-wellness grid lg:grid-cols-[1.05fr_1fr] gap-16 lg:gap-20 items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A27A] mb-5">
              Mindfulness
            </p>

            <h1
              className="heading-hero"
              style={{ color: "#1E3D32" }}
            >
              Habits that last a quiet lifetime.
            </h1>

            <p className="mt-7 max-w-lg text-[17px] md:text-[18px] leading-[1.75] text-[#4B4B4B]">
              Guided meditations, mindful walks and gentle
              daily practices designed to fit your life — not
              interrupt it. Build presence, kindly.
            </p>

            <Link
              to="/onboarding"
              className="btn-cta btn-cta-mind btn-cta-glow mt-10 inline-flex"
            >
              Begin practising
            </Link>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative animate-[parallax-rise_1.4s_cubic-bezier(0.22,1,0.36,1)_both]">
              <div className="absolute -inset-8 rounded-[44px] bg-gradient-to-br from-[#7FA38D]/40 to-[#C8A27A]/30 blur-3xl animate-[float_10s_ease-in-out_infinite]" />

              <img
                src={hero}
                alt="Person meditating in a sunlit forest"
                width={1280}
                height={1280}
                className="relative rounded-[40px] w-full h-[520px] object-cover shadow-[0_30px_80px_rgba(30,61,50,0.22)]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-28 md:py-32">
        <div className="container-wellness">
          <Reveal>
            <h2
              className="heading-section mb-14 max-w-2xl"
              style={{ color: "#1E3D32" }}
            >
              Six paths into presence
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {cats.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="card-wellness card-hover h-full overflow-hidden !p-7">
                  <div className="overflow-hidden rounded-[20px] mb-7">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="card-img w-full h-44 object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <h3
                    className="text-[22px] font-semibold leading-tight"
                    style={{ color: "#2C2C2C" }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-[#5B5B5B] mt-3 leading-[1.65]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HABITS */}
      <section className="py-32 bg-[#ECEDE7]">
        <div className="container-wellness">
          <Reveal>
            <h2
              className="heading-section text-center max-w-3xl mx-auto"
              style={{ color: "#1E3D32" }}
            >
              What a mindful life makes room for
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {habits.map((item, i) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={i * 50}>
                  <div
                    className="
                      card-wellness
                      card-hover
                      flex
                      items-center
                      gap-5
                      h-full
                      !p-7
                      !rounded-[24px]
                    "
                  >
                    <div
                      className="
                        w-14
                        h-14
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        shadow-md
                        shrink-0
                      "
                      style={{
                        background:
                          "linear-gradient(135deg, #2F6B52, #7FA38D)",
                      }}
                    >
                      <Icon
                        size={26}
                        strokeWidth={2.2}
                        className="text-white"
                      />
                    </div>

                    <span
                      className="text-[17px] md:text-[18px] font-semibold leading-snug"
                      style={{ color: "#2C2C2C" }}
                    >
                      {item.title}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMMERSIVE NATURE */}
      <section
        className="relative overflow-hidden py-32 md:py-40 text-center"
        style={{
          background:
            "linear-gradient(135deg, #1E3D32 0%, #4D7C5A 50%, #A08D6B 100%)",
          backgroundSize: "200% 200%",
          animation:
            "gradient-pan 18s ease-in-out infinite",
        }}
      >
        <div className="container-wellness relative">
          <Reveal>
            <h2
              className="heading-section text-white max-w-3xl mx-auto"
              style={{ color: "#fff" }}
            >
              The forest is always practising.
            </h2>

            <p className="mt-6 text-[19px] text-white/85 max-w-xl mx-auto">
              Step into a five-minute mindful walk,
              narrated by birdsong and slow light
              through trees.
            </p>

            <Link
              to="/onboarding"
              className="btn-cta btn-cta-mind mt-12 inline-flex"
              style={{
                boxShadow:
                  "0 0 80px rgba(127,163,141,0.4)",
              }}
            >
              Take the walk
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32">
        <div className="container-wellness">
          <Reveal>
            <h2
              className="heading-section text-center mb-16"
              style={{ color: "#1E3D32" }}
            >
              Quiet transformations.
            </h2>
          </Reveal>

          <Testimonials
            gradient="linear-gradient(180deg, #2F6B52 0%, #7FA38D 100%)"
            items={[
              {
                quote:
                  "Ten minutes a day. That's all it took to feel like myself again.",
                name: "Eli",
                location: "Lisbon",
              },
              {
                quote:
                  "Stillwave taught me how to be a friend to my own mind.",
                name: "Hana",
                location: "Kyoto",
              },
              {
                quote:
                  "I no longer wake up reaching for my phone. I reach for a breath instead.",
                name: "Marcus",
                location: "Cape Town",
              },
            ]}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-[var(--background-alt)]">
        <div className="container-wellness">
          <Reveal>
            <h2
              className="heading-section text-center mb-16"
              style={{ color: "#1E3D32" }}
            >
              Common Curiosities
            </h2>
          </Reveal>

          <FAQ
            items={[
              {
                q: "What is mindfulness?",
                a: "The simple, quiet act of paying kind attention to what's happening — without trying to change it.",
              },
              {
                q: "How often should I practice?",
                a: "Daily, even if briefly. Five minutes most days outperforms one long Sunday session.",
              },
              {
                q: "Do I need to sit cross-legged?",
                a: "Not at all. Comfort is part of the practice. A chair, a bed, even a walk all work.",
              },
              {
                q: "Will it make me more productive?",
                a: "Maybe. But that's not why we're here. We're here to make you more *present*.",
              },
            ]}
          />
        </div>
      </section>

      <ImmersiveCTA
        title="Begin practising. Begin again. Begin now."
        subtitle="Free for two weeks. Then for as long as it serves you."
        cta="Start practising"
        overlay="linear-gradient(135deg, rgba(30,61,50,0.92), rgba(160,141,107,0.55))"
      />

      <Footer />
    </div>
  );
}
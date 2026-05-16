import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FAQ } from "@/components/site/FAQ";
import { Testimonials } from "@/components/site/Testimonials";
import { Reveal } from "@/components/site/Reveal";
import { ImmersiveCTA } from "@/components/site/ImmersiveCTA";
import { useEffect, useState } from "react";

import {
  Brain,
  HeartHandshake,
  Sparkles,
  Volume2,
  VolumeX,
} from "lucide-react";

import hero from "@/assets/hero-stress.jpg";

export const Route = createFileRoute("/stress")({
  head: () => ({
    meta: [
      { title: "Stress & Anxiety — StillMind" },
      {
        name: "description",
        content:
          "Anxiety and stress relief whenever you need it. Breathwork, meditations, and emotional reset programs.",
      },
    ],
  }),
  component: StressPage,
});

const programs = [
  {
    title: "Anxiety Relief",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Emotional Reset",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Calm Breathing",
    image:
      "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Deep Relaxation",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Letting Go",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Stress Recovery",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
];

const supportCards = [
  {
    title: "Calm your thoughts",
    description:
      "Soft anchors to bring a busy mind back to centre.",
    icon: Brain,
  },
  {
    title: "Improve emotional balance",
    description:
      "Tools for the moments your feelings feel too loud.",
    icon: HeartHandshake,
  },
  {
    title: "Build healthy habits",
    description:
      "Tiny rituals that compound into a steady, mindful life.",
    icon: Sparkles,
  },
];

function StressPage() {
  return (
    <div
      className="min-h-screen bg-[var(--background)]"
      style={{ ["--deep-green" as never]: "#2F7D6A" }}
    >
      <Navbar accent="#2F7D6A" />

      <section className="pt-[120px] pb-32">
        <div className="container-wellness grid lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B7CFF] mb-6">
              Stress & Anxiety
            </p>

            <h1
              className="heading-hero"
              style={{ color: "#1F4F4A" }}
            >
              Stress relief, whenever you need it.
            </h1>

            <p className="text-paragraph mt-8 max-w-xl">
              Calming breathwork, soothing meditations and gentle
              programs to soften anxious moments and bring your
              nervous system back home.
            </p>

            <Link
              to="/onboarding"
              className="btn-cta btn-cta-stress mt-12 inline-flex"
            >
              Relieve stress for free
            </Link>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-[#8B7CFF]/30 to-[#4F7CFF]/20 blur-3xl" />

              <img
                src={hero}
                alt="Person breathing peacefully"
                width={1280}
                height={1280}
                className="relative rounded-[40px] w-full h-[560px] object-cover shadow-[0_30px_80px_rgba(31,79,74,0.18)]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* BREATHING */}
      <section className="py-32 bg-white">
        <div className="container-wellness text-center">
          <Reveal>
            <h2
              className="heading-section max-w-2xl mx-auto"
              style={{ color: "#1F4F4A" }}
            >
              Breathe with us for sixty seconds
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <BreathCircle />
          </Reveal>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-32">
        <div className="container-wellness">
          <Reveal>
            <h2
              className="heading-section mb-12"
              style={{ color: "#1F4F4A" }}
            >
              Programs for hard days
            </h2>
          </Reveal>

          <div className="overflow-x-auto -mx-6 px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-6 snap-x snap-mandatory">
              {programs.map((program) => (
                <article
                  key={program.title}
                  className="
                    snap-start
                    shrink-0
                    w-[300px]
                    md:w-[340px]
                    rounded-[32px]
                    overflow-hidden
                    relative
                    h-[420px]
                    shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                    transition-transform
                    duration-500
                    hover:-translate-y-2
                  "
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(31,79,74,0) 35%, rgba(47,125,106,0.88) 100%)",
                    }}
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-white text-2xl font-semibold">
                      {program.title}
                    </h3>

                    <p className="text-white/75 text-sm mt-2">
                      12 min · Guided
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RECOVERY */}
      <section className="py-32 bg-[var(--background-alt)]">
        <div className="container-wellness">
          <Reveal>
            <h2
              className="heading-section text-center max-w-3xl mx-auto"
              style={{ color: "#1F4F4A" }}
            >
              Gentle support, always within reach
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {supportCards.map((item, i) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="card-wellness h-full">
                    <div
                      className="
                        w-16
                        h-16
                        rounded-3xl
                        mb-6
                        flex
                        items-center
                        justify-center
                        shadow-lg
                      "
                      style={{
                        background:
                          "linear-gradient(135deg, #2F7D6A, #4F7CFF)",
                      }}
                    >
                      <Icon
                        size={30}
                        strokeWidth={2.2}
                        className="text-white"
                      />
                    </div>

                    <h3
                      className="text-2xl font-semibold"
                      style={{ color: "#2C2C2C" }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-[#5B5B5B] mt-3">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32">
        <div className="container-wellness">
          <Reveal>
            <h2
              className="heading-section text-center mb-16"
              style={{ color: "#1F4F4A" }}
            >
              Lighter shoulders, softer minds.
            </h2>
          </Reveal>

          <Testimonials
            gradient="linear-gradient(180deg, #2F7D6A 0%, #6D5EF5 100%)"
            items={[
              {
                quote:
                  "I keep this open on my desk. A 3-minute reset gets me through my hardest meetings.",
                name: "Daniel",
                location: "Toronto",
              },
              {
                quote:
                  "My anxiety hasn't disappeared, but I have a place to go now when it visits.",
                name: "Sofia",
                location: "Madrid",
              },
              {
                quote:
                  "The breathing exercises are subtle magic. I didn't believe until I tried.",
                name: "Ravi",
                location: "Bangalore",
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
              style={{ color: "#1F4F4A" }}
            >
              Soft questions, gentle answers
            </h2>
          </Reveal>

          <FAQ
            items={[
              {
                q: "Can this replace therapy?",
                a: "No — and we'd never claim to. StillMind is a beautiful complement to therapy and a daily steadying tool.",
              },
              {
                q: "What if I've never meditated?",
                a: "Perfect. Many of our most-loved sessions are designed for absolute beginners.",
              },
              {
                q: "How long until I feel a difference?",
                a: "Some moments offer immediate relief. Most people notice deeper shifts within two to three weeks of practice.",
              },
              {
                q: "Is this safe for panic attacks?",
                a: "Our Quick Relief library was designed alongside clinical experts for acute anxious moments.",
              },
            ]}
          />
        </div>
      </section>

      <ImmersiveCTA
        title="A calmer mind is closer than you think."
        subtitle="Start with one breath. Then another. We'll be right here."
        cta="Begin gently"
        overlay="linear-gradient(135deg, rgba(31,79,74,0.92), rgba(109,94,245,0.6))"
      />

      <Footer />
    </div>
  );
}

function BreathCircle() {
  const [phase, setPhase] =
    useState<"inhale" | "hold" | "exhale">("inhale");

  const [muted, setMuted] = useState(false);

  const [started, setStarted] = useState(false);

  const [audio] = useState(() => new Audio("/bell.mp3"));

  useEffect(() => {
    audio.loop = true;

    audio.volume = 0.7;

    return () => {
      audio.pause();
    };
  }, []);

  useEffect(() => {
    audio.muted = muted;
  }, [muted]);

  useEffect(() => {
    const seq: ("inhale" | "hold" | "exhale")[] = [
      "inhale",
      "hold",
      "exhale",
    ];

    let i = 0;

    const id = setInterval(() => {
      i = (i + 1) % 3;

      setPhase(seq[i]);
    }, 4000);

    return () => clearInterval(id);
  }, []);

  const startBreathing = async () => {
    try {
      await audio.play();

      setStarted(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-20 flex flex-col items-center relative">
      {/* BREATH CIRCLE */}
      <div className="relative w-[280px] h-[280px] flex items-center justify-center">
        {/* OUTER GLOW */}
        <div
          className="
            absolute
            inset-0
            rounded-full
            opacity-40
            blur-3xl
            animate-pulse
          "
          style={{
            background:
              "linear-gradient(135deg, #6EE7E7, #6D5EF5)",
          }}
        />

        {/* MAIN CIRCLE */}
        <button
          onClick={startBreathing}
          className="
            rounded-full
            flex
            items-center
            justify-center
            text-white
            font-semibold
            text-2xl
            backdrop-blur-xl
            relative
            z-10
            cursor-pointer
          "
          style={{
            width: 220,
            height: 220,
            background:
              "linear-gradient(135deg, #6EE7E7 0%, #6D5EF5 100%)",
            transform:
              phase === "inhale"
                ? "scale(1.15)"
                : phase === "exhale"
                ? "scale(0.85)"
                : "scale(1)",
            transition: "transform 4s ease-in-out",
            boxShadow:
              "0 30px 80px rgba(109,94,245,0.35)",
          }}
        >
          {!started
            ? "Start"
            : phase === "inhale"
            ? "Inhale"
            : phase === "hold"
            ? "Hold"
            : "Exhale"}
        </button>
      </div>

      {/* TEXT */}
      <p className="text-[#6B7280] mt-8 text-sm uppercase tracking-[0.2em]">
        4 · 4 · 4 box breathing
      </p>

      {/* MUTE BUTTON */}
      <button
        onClick={() => setMuted(!muted)}
        className="
          absolute
          right-0
          bottom-0
          w-14
          h-14
          rounded-full
          bg-white/80
          backdrop-blur-xl
          border
          border-white/40
          shadow-lg
          flex
          items-center
          justify-center
          hover:scale-105
          transition-all
          duration-300
        "
      >
        {muted ? (
          <VolumeX size={22} className="text-[#1F4F4A]" />
        ) : (
          <Volume2 size={22} className="text-[#1F4F4A]" />
        )}
      </button>
    </div>
  );
}
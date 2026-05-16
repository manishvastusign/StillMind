import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FAQ } from "@/components/site/FAQ";
import { Testimonials } from "@/components/site/Testimonials";
import { Reveal } from "@/components/site/Reveal";
import { ImmersiveCTA } from "@/components/site/ImmersiveCTA";

import {
  Heart,
  Brain,
  Sparkles,
  Smile,
  BatteryCharging,
  Sunrise,
} from "lucide-react";

import hero from "@/assets/hero-sleep.jpg";

export const Route = createFileRoute("/sleep")({
  head: () => ({
    meta: [
      { title: "Sleep — StillMind" },
      {
        name: "description",
        content:
          "Sleep stories, sleep meditations, music and soundscapes for your dreamiest sleep yet.",
      },
    ],
  }),

  component: SleepPage,
});

const programs = [
  {
    title: "Deep Sleep",
    type: "Story",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Rain Sounds",
    type: "Soundscape",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Ocean Sleep",
    type: "Soundscape",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Calm Bedtime",
    type: "Meditation",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Night Meditation",
    type: "Meditation",
    image:
      "https://images.unsplash.com/photo-1511295742362-92c96b1cf484?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Sleep Stories",
    type: "Story",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
  },
];

const benefits = [
  {
    title: "Reduced stress",
    description:
      "Lower cortisol so your body can finally rest.",
    icon: Heart,
    gradient: "from-[#6EE7E7] to-[#6B5BFF]",
  },

  {
    title: "Emotional recovery",
    description:
      "Process the day's weight while you sleep.",
    icon: Brain,
    gradient: "from-[#8B5CF6] to-[#EC4899]",
  },

  {
    title: "Better focus",
    description:
      "Wake up sharp, present and lightly clear-headed.",
    icon: Sparkles,
    gradient: "from-[#60A5FA] to-[#2563EB]",
  },

  {
    title: "Improved mood",
    description:
      "Sleep is the gentlest mood medicine we know.",
    icon: Smile,
    gradient: "from-[#34D399] to-[#10B981]",
  },

  {
    title: "More energy",
    description:
      "Restorative sleep that lasts past your morning coffee.",
    icon: BatteryCharging,
    gradient: "from-[#FBBF24] to-[#F59E0B]",
  },

  {
    title: "Soft mornings",
    description:
      "End the harsh wake-ups. Begin gently instead.",
    icon: Sunrise,
    gradient: "from-[#FB7185] to-[#F97316]",
  },
];

function SleepPage() {
  return (
    <div
      className="min-h-screen bg-[var(--background)]"
      style={{ ["--deep-green" as never]: "#1E4D3F" }}
    >
      <Navbar accent="#1E4D3F" />

      {/* HERO */}
      <section className="pt-[120px] pb-32">
        <div className="container-wellness grid lg:grid-cols-2 gap-20 items-center">

          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3B82F6] mb-6">
              Sleep
            </p>

            <h1
              className="heading-hero"
              style={{ color: "#1E4D3F" }}
            >
              Sleep deeper. Wake softer.
            </h1>

            <p className="text-paragraph mt-8 max-w-xl">
              Drift away with sleep stories, calming soundscapes and bedtime
              meditations crafted to quiet a racing mind and welcome you into
              restorative rest.
            </p>

            <Link
              to="/onboarding"
              className="btn-cta btn-cta-sleep mt-12 inline-flex"
            >
              Sleep better tonight
            </Link>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">

              <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-[#244B5A]/40 to-[#3B82F6]/30 blur-3xl" />

              <img
                src={hero}
                alt="Person sleeping under moonlight"
                width={1280}
                height={1280}
                className="relative rounded-[40px] w-full h-[560px] object-cover shadow-[0_30px_80px_rgba(36,59,83,0.3)]"
              />

            </div>
          </Reveal>

        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24 bg-[#EAE9E4]">
        <div className="container-wellness">

          <Reveal>
            <h2
              className="heading-section  max-w-3xl mb-12"
              style={{ color: "#1E4D3F" }}
            >
              Tonight's selection.
            </h2>
          </Reveal>

          <div className="overflow-x-auto -mx-6 px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

            <div className="flex gap-6 snap-x snap-mandatory">

              {programs.map((p) => (

                <article
                  key={p.title}
                  className="
                    snap-start
                    shrink-0
                    w-[300px]
                    md:w-[340px]
                    rounded-[32px]
                    overflow-hidden
                    relative
                    h-[440px]
                    cursor-pointer
                    transition-transform
                    duration-500
                    hover:-translate-y-2
                    shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                  "
                >

                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(27,43,52,0) 30%, rgba(27,43,52,0.85) 100%)",
                    }}
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-8">

                    <p className="text-white/70 text-xs uppercase tracking-[0.2em] mb-2">
                      {p.type}
                    </p>

                    <h3 className="text-white text-2xl font-semibold">
                      {p.title}
                    </h3>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-32 bg-[var(--background-alt)]">

        <div className="container-wellness">

          <Reveal>

            <h2
              className="heading-section text-center max-w-3xl mx-auto"
              style={{ color: "#1E4D3F" }}
            >
              What deep sleep gives you back.
            </h2>

          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {benefits.map((item, i) => {

              const Icon = item.icon;

              return (

                <Reveal key={item.title} delay={i * 60}>

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[36px]
                      p-10
                      bg-white
                      border
                      border-white/40
                      shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                      transition-all
                      duration-500
                      hover:-translate-y-2
                    "
                  >

                    {/* GLOW */}
                    <div
                      className={`
                        absolute
                        top-0
                        right-0
                        w-[180px]
                        h-[180px]
                        rounded-full
                        blur-3xl
                        opacity-20
                        bg-gradient-to-br
                        ${item.gradient}
                      `}
                    />

                    {/* ICON */}
                    <div
                      className={`
                        relative
                        z-10
                        w-16
                        h-16
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        bg-gradient-to-br
                        ${item.gradient}
                        shadow-lg
                      `}
                    >

                      <Icon
                        size={30}
                        className="text-white"
                        strokeWidth={2.2}
                      />

                    </div>

                    {/* TITLE */}
                    <h3
                      className="relative z-10 text-[30px] font-semibold mt-8"
                      style={{ color: "#2C2C2C" }}
                    >
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="relative z-10 text-[#5B5B5B] mt-4 text-[18px] leading-relaxed">
                      {item.description}
                    </p>

                  </div>

                </Reveal>

              );
            })}

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}
import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FAQ } from "@/components/site/FAQ";
import { Testimonials } from "@/components/site/Testimonials";
import { Reveal } from "@/components/site/Reveal";
import { ImmersiveCTA } from "@/components/site/ImmersiveCTA";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { useState } from "react";
import hero from "@/assets/hero-sleep.jpg";
import card from "@/assets/card-sleep.jpg";

export const Route = createFileRoute("/sleep")({
  head: () => ({
    meta: [
      { title: "Sleep — Stillwave" },
      { name: "description", content: "Sleep stories, sleep meditations, music and soundscapes for your dreamiest sleep yet." },
    ],
  }),
  component: SleepPage,
});

const programs = [
  "Deep Sleep", "Rain Sounds", "Ocean Sleep", "Calm Bedtime", "Night Meditation", "Sleep Stories",
];
const benefits = [
  ["Reduced stress", "Lower cortisol so your body can finally rest."],
  ["Emotional recovery", "Process the day's weight while you sleep."],
  ["Better focus", "Wake up sharp, present and lightly clear-headed."],
  ["Improved mood", "Sleep is the gentlest mood medicine we know."],
  ["More energy", "Restorative sleep that lasts past your morning coffee."],
  ["Soft mornings", "End the harsh wake-ups. Begin gently instead."],
];

function SleepPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]" style={{ ["--deep-green" as never]: "#1E4D3F" }}>
      <Navbar accent="#1E4D3F" />

      {/* HERO */}
      <section className="pt-[120px] pb-32">
        <div className="container-wellness grid lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3B82F6] mb-6">Sleep</p>
            <h1 className="heading-hero" style={{ color: "#1E4D3F" }}>Sleep deeper. Wake softer.</h1>
            <p className="text-paragraph mt-8 max-w-xl">
              Drift away with sleep stories, calming soundscapes and bedtime meditations crafted to quiet a racing mind and welcome you into restorative rest.
            </p>
            <Link to="/onboarding" className="btn-cta btn-cta-sleep mt-12 inline-flex">Sleep better tonight</Link>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-[#244B5A]/40 to-[#3B82F6]/30 blur-3xl" />
              <img src={hero} alt="Person sleeping under moonlight" width={1280} height={1280} className="relative rounded-[40px] w-full h-[560px] object-cover shadow-[0_30px_80px_rgba(36,59,83,0.3)]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24 bg-[#EAE9E4]">
        <div className="container-wellness">
          <Reveal><h2 className="heading-section mb-12" style={{ color: "#1E4D3F" }}>Tonight's selection.</h2></Reveal>
          <div className="overflow-x-auto -mx-6 px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-6 snap-x snap-mandatory">
              {programs.map((p, i) => (
                <article key={p} className="snap-start shrink-0 w-[300px] md:w-[340px] rounded-[32px] overflow-hidden relative h-[440px] cursor-pointer transition-transform duration-500 hover:-translate-y-2 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
                  <img src={card} alt={p} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(27,43,52,0) 30%, rgba(27,43,52,0.85) 100%)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-white/70 text-xs uppercase tracking-[0.2em] mb-2">{["Story","Soundscape","Soundscape","Meditation","Meditation","Story"][i]}</p>
                    <h3 className="text-white text-2xl font-semibold">{p}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AUDIO PLAYER */}
      <section className="py-32">
        <div className="container-wellness max-w-3xl">
          <Reveal>
            <div className="card-wellness !p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">Now playing</p>
              <h3 className="text-2xl font-semibold mt-2" style={{ color: "#2C2C2C" }}>Rainfall on Cedar Pines</h3>
              <p className="text-[#6B7280] mt-1">Sleep soundscape · 45 min</p>
              <AudioPlayerMock />
            </div>
          </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-32 bg-[var(--background-alt)]">
        <div className="container-wellness">
          <Reveal><h2 className="heading-section text-center max-w-3xl mx-auto" style={{ color: "#1E4D3F" }}>What deep sleep gives you back.</h2></Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {benefits.map(([t, d], i) => (
              <Reveal key={t} delay={i * 60}>
                <div className="card-wellness h-full">
                  <div className="w-12 h-12 rounded-2xl mb-6" style={{ background: "linear-gradient(135deg, #6EE7E7, #6B5BFF)" }} />
                  <h3 className="text-xl font-semibold" style={{ color: "#2C2C2C" }}>{t}</h3>
                  <p className="text-[#5B5B5B] mt-3 text-[16px] leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NIGHT MEDITATION */}
      <section className="relative overflow-hidden py-40 text-center" style={{ background: "linear-gradient(135deg, #1B2B34 0%, #244B5A 50%, #3B82F6 100%)" }}>
        <Stars />
        <div className="container-wellness relative">
          <Reveal>
            <h2 className="heading-section text-white max-w-3xl mx-auto" style={{ color: "#fff" }}>Let the day end softly.</h2>
            <p className="mt-6 text-[19px] text-white/80 max-w-xl mx-auto">A 10-minute night meditation to release everything you've carried today.</p>
            <Link to="/onboarding" className="btn-cta btn-cta-sleep mt-12 inline-flex" style={{ boxShadow: "0 0 80px rgba(59,130,246,0.45)" }}>
              Begin tonight's session
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32">
        <div className="container-wellness">
          <Reveal><h2 className="heading-section text-center mb-16" style={{ color: "#1E4D3F" }}>Bedside stories.</h2></Reveal>
          <Testimonials gradient="linear-gradient(180deg, #264653 0%, #3A86FF 100%)" items={[
            { quote: "I haven't slept through the night in years. Now it just happens.", name: "Maya", location: "Brooklyn" },
            { quote: "The Sleep Stories knock me out every time. In the best way.", name: "Alex", location: "Berlin" },
            { quote: "I used to dread bedtime. Now it's the softest part of my day.", name: "Priya", location: "Mumbai" },
          ]} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-[var(--background-alt)]">
        <div className="container-wellness">
          <Reveal><h2 className="heading-section text-center mb-16" style={{ color: "#1E4D3F" }}>Sleep questions, answered.</h2></Reveal>
          <FAQ items={[
            { q: "How long should I listen?", a: "Most stories run 25–45 minutes. Most people drift off in the first ten." },
            { q: "Can I use it without headphones?", a: "Absolutely. Soft speakers work beautifully and won't disturb a partner." },
            { q: "Is there a sleep timer?", a: "Yes — set it and forget it. Audio fades gently when you've drifted off." },
            { q: "Do you have content for kids?", a: "Yes, a whole library of bedtime stories and soundscapes for little ones too." },
          ]} />
        </div>
      </section>

      <ImmersiveCTA
        title="Tonight could be the night you sleep deeply."
        subtitle="Start a free 14-day trial and rediscover what rested feels like."
        cta="Start sleeping better"
        overlay="linear-gradient(135deg, rgba(27,43,52,0.92), rgba(59,130,246,0.65))"
      />
      <Footer />
    </div>
  );
}

function AudioPlayerMock() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="mt-10">
      <div className="h-[6px] rounded-full bg-[#DADADA] overflow-hidden">
        <div className="h-full w-[34%]" style={{ background: "var(--gradient-progress)" }} />
      </div>
      <div className="flex items-center justify-between text-xs text-[#6B7280] mt-2">
        <span>15:23</span><span>45:00</span>
      </div>
      <div className="flex items-center justify-center gap-8 mt-8">
        <button className="text-[#6B7280] hover:text-[#2C2C2C] transition-colors"><SkipBack size={28} /></button>
        <button onClick={() => setPlaying(!playing)} className="w-16 h-16 rounded-full text-white flex items-center justify-center transition-transform hover:scale-105" style={{ background: "var(--gradient-sleep)" }}>
          {playing ? <Pause size={26} /> : <Play size={26} className="ml-1" />}
        </button>
        <button className="text-[#6B7280] hover:text-[#2C2C2C] transition-colors"><SkipForward size={28} /></button>
      </div>
    </div>
  );
}

function Stars() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-70">
      {Array.from({ length: 40 }).map((_, i) => {
        const top = (i * 37) % 100;
        const left = (i * 53) % 100;
        const size = (i % 3) + 1;
        const delay = (i % 7) * 0.4;
        return (
          <span key={i} className="absolute rounded-full bg-white" style={{
            top: `${top}%`, left: `${left}%`, width: size, height: size,
            animation: `fade-in 2s ease-in-out ${delay}s infinite alternate`,
            boxShadow: "0 0 6px rgba(255,255,255,0.8)",
          }} />
        );
      })}
    </div>
  );
}

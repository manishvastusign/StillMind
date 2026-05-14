import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/signin")({
  head: () => ({ meta: [{ title: "Welcome back — Stillwave" }] }),
  component: SignIn,
});

function SignIn() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-6 bg-[var(--background)]">
      {/* Soft glow background */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-[120px] opacity-40" style={{ background: "radial-gradient(circle, #7FA38D, transparent 70%)" }} />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full blur-[120px] opacity-40" style={{ background: "radial-gradient(circle, #3B82F6, transparent 70%)" }} />

      <div className="relative w-full max-w-[520px] animate-[fade-in_0.6s_ease-out]">
        <div className="text-center mb-8">
          <Link to="/" className="text-2xl font-bold inline-block" style={{ background: "var(--gradient-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Stillwave
          </Link>
        </div>
        <div className="bg-white rounded-[32px] p-12 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
          <h1 className="text-[30px] md:text-[36px] font-semibold leading-[1.2] tracking-tight" style={{ color: "#2C2C2C" }}>Welcome back.</h1>
          <p className="mt-3 text-[16px] text-[#5B5B5B]">Continue your wellness journey.</p>

          <form className="mt-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-[15px] font-medium text-[#5B5B5B] mb-2 block">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@calm.com" className="w-full h-[60px] rounded-[18px] border-[1.5px] border-[#D7D7D7] bg-white px-5 text-[17px] text-[#2C2C2C] focus:outline-none focus:border-[#3B82F6] focus:ring-4 focus:ring-[rgba(59,130,246,0.08)] transition-all" />
            </div>
            <div>
              <label className="text-[15px] font-medium text-[#5B5B5B] mb-2 block">Password</label>
              <input value={pw} onChange={(e) => setPw(e.target.value)} type="password" placeholder="••••••••" className="w-full h-[60px] rounded-[18px] border-[1.5px] border-[#D7D7D7] bg-white px-5 text-[17px] text-[#2C2C2C] focus:outline-none focus:border-[#3B82F6] focus:ring-4 focus:ring-[rgba(59,130,246,0.08)] transition-all" />
            </div>
            <button type="submit" className="btn-cta w-full !h-[60px] !py-0">Sign in</button>
          </form>

          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-[#E2E2E2]" />
            <span className="text-sm text-[#6B7280]">or continue with</span>
            <div className="flex-1 h-px bg-[#E2E2E2]" />
          </div>

          <button className="w-full h-[60px] rounded-full border-[1.5px] border-[#D7D7D7] bg-white flex items-center justify-center gap-3 text-[17px] font-semibold text-[#2C2C2C] hover:shadow-md hover:-translate-y-0.5 transition-all">
            <GoogleIcon /> Continue with Google
          </button>

          <div className="mt-8 flex items-center justify-between text-[15px]">
            <Link to="/" className="text-[#2F7D57] hover:underline">Forgot password?</Link>
            <span className="text-[#6B7280]">New here? <Link to="/onboarding" className="text-[#2F7D57] font-semibold hover:underline">Sign up</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.6 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.3-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.5 26.7 36 24 36c-5.3 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.6l6.2 5.2C40.9 35.5 44 30.2 44 24c0-1.3-.1-2.3-.4-3.5z"/></svg>
  );
}

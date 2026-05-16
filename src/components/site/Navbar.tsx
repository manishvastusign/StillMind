import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/sleep", label: "Sleep" },
  { to: "/stress", label: "Stress & Anxiety" },
  { to: "/mindfulness", label: "Mindfulness" },
];

export function Navbar({ accent = "var(--deep-green)" }: { accent?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();
  const [user, setUser] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      unsubscribe();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 backdrop-blur-xl ${
          scrolled
            ? "shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
            : ""
        }`}
        style={{
          height: scrolled ? 72 : 84,
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        <div className="container-wellness h-full flex items-center justify-between gap-8">
          
          {/* LEFT SECTION */}
          <div className="flex items-center gap-4">
            
            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/70 backdrop-blur-md"
            >
              <Menu size={22} />
            </button>

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/stillmind-logo.png"
                alt="StillMind"
                className="h-16 w-auto object-contain mt-1"
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => {
              const active = location.pathname === l.to;

              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="relative text-[18px] font-medium transition-colors duration-300 hover:opacity-80"
                  style={{ color: active ? accent : "#2C2C2C" }}
                >
                  {l.label}

                  <span
                    className="absolute -bottom-2 left-0 h-[2px] rounded-full transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      width: active ? "100%" : "0%",
                      background: accent,
                      opacity: active ? 1 : 0,
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Link
                  to="/dashboard/home"
                  className="hidden sm:inline text-[18px] font-semibold text-[#4B4B4B] hover:text-[var(--deep-green)] transition-colors"
                >
                  Dashboard
                </Link>

                <Link
                  to="/onboarding"
                  className="btn-cta btn-cta-glow"
                  style={{ padding: "12px 26px", fontSize: 15 }}
                >
                  Try StillMind For Free
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="hidden sm:inline text-[18px] font-semibold text-[#4B4B4B] hover:text-[var(--deep-green)] transition-colors"
                >
                  Sign in
                </Link>

                <Link
                  to="/onboarding"
                  className="btn-cta btn-cta-glow"
                  style={{ padding: "12px 26px", fontSize: 15 }}
                >
                  Try Free
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm lg:hidden">
          
          <div className="w-[82%] max-w-[320px] h-full bg-white shadow-2xl p-6 flex flex-col">
            
            {/* TOP */}
            <div className="flex items-center justify-between mb-10">
              <img
                src="/stillmind-logo.png"
                alt="StillMind"
                className="h-12 w-auto"
              />

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center"
              >
                <X size={22} />
              </button>
            </div>

            {/* NAV LINKS */}
            <div className="flex flex-col gap-6">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[18px] font-semibold text-[#2C2C2C]"
                >
                  {l.label}
                </Link>
              ))}

              {user ? (
                <Link
                  to="/dashboard/home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[18px] font-semibold text-[#2C2C2C]"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  to="/signin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[18px] font-semibold text-[#2C2C2C]"
                >
                  Sign In
                </Link>
              )}
            </div>

            {/* CTA */}
            <div className="mt-auto pt-10">
              <Link
                to="/onboarding"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-cta btn-cta-glow w-full flex items-center justify-center"
              >
                Try StillMind For Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { auth, googleProvider } from "../lib/firebase";

import {
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [{ title: "Welcome back — Stillwave" }],
  }),
  component: SignIn,
});

function SignIn() {

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");

  const [pw, setPw] = useState("");

  const handleEmailLogin = async () => {

    if (!email || !pw) {

      alert("Please enter email and password");
      return;
    }

    try {

      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email,
        pw
      );

      window.location.href = "/dashboard/home";

    } catch (error: any) {

      alert(error.message);

    } finally {

      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {

    try {

      await signInWithPopup(
        auth,
        googleProvider
      );

      window.location.href =
        "/dashboard/home";

    } catch (error) {

      console.error(error);

      alert("Google sign in failed");
    }
  };

  const handleForgotPassword = async () => {

    if (!email) {

      alert("Please enter your email first");
      return;
    }

    try {

      await sendPasswordResetEmail(
        auth,
        email
      );

      alert("Password reset email sent");

    } catch (error: any) {

      alert(error.message);
    }
  };

  return (

    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-5 py-10">

      {/* BACKGROUND */}
      <div className="auth-scene">

        <div className="auth-glow" />

      </div>

      {/* OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-[#04111f]/40
          z-[1]
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[520px]">

        {/* LOGO */}
        <div className="text-center mb-8">

          <Link
            to="/"
            className="inline-block group"
          >

            <h1
              className="
                text-[58px]
                leading-none
                font-[300]
                tracking-[-0.08em]
                italic
                text-white
                opacity-95
                transition-all
                duration-300
                group-hover:opacity-100
              "
              style={{
                fontFamily:
                  '"Cormorant Garamond", serif',
              }}
            >
              Stillwave
            </h1>

          </Link>

        </div>

        {/* CARD */}
        <div
          className="
            backdrop-blur-xl
            bg-[#081629]/62
            border
            border-white/10
            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            rounded-[32px]
            p-10
            md:p-11
          "
        >

          {/* TITLE */}
          <h1
            className="
              text-white
              text-[30px]
              md:text-[32px]
              font-[500]
              tracking-[-0.03em]
              leading-[1.1]
            "
          >
            Welcome back.
          </h1>

          {/* SUBTITLE */}
          <p
            className="
              mt-3
              text-[16px]
              font-[400]
              text-white/65
              leading-relaxed
            "
          >
            Continue your wellness journey with Stillwave.
          </p>

          {/* FORM */}
          <form
            className="mt-8 space-y-5"
            onSubmit={(e) =>
              e.preventDefault()
            }
          >

            {/* EMAIL */}
            <div>

              <label
                className="
                  block
                  mb-2
                  text-[14px]
                  font-[400]
                  tracking-[0.01em]
                  text-white/72
                "
              >
                Email
              </label>

              <input
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                type="email"
                placeholder="you@stillwave.com"
                className="
                  w-full
                  h-[58px]
                  rounded-[18px]
                  border
                  border-white/10
                  bg-white/[0.07]
                  px-5
                  text-white
                  text-[15px]
                  font-[400]
                  placeholder:text-white/28
                  outline-none
                  focus:border-[#7FA38D]
                  transition-all
                "
              />

            </div>

            {/* PASSWORD */}
            <div>

              <label
                className="
                  block
                  mb-2
                  text-[14px]
                  font-[400]
                  tracking-[0.01em]
                  text-white/72
                "
              >
                Password
              </label>

              <input
                value={pw}
                onChange={(e) =>
                  setPw(e.target.value)
                }
                type="password"
                placeholder="••••••••"
                className="
                  w-full
                  h-[58px]
                  rounded-[18px]
                  border
                  border-white/10
                  bg-white/[0.07]
                  px-5
                  text-white
                  text-[15px]
                  font-[400]
                  placeholder:text-white/28
                  outline-none
                  focus:border-[#7FA38D]
                  transition-all
                "
              />

            </div>

            {/* SIGN IN BUTTON */}
            <button
              type="button"
              onClick={handleEmailLogin}
              disabled={loading}
              className="
                w-full
                h-[58px]
                rounded-[18px]
                bg-white
                text-[#123B72]
                text-[15px]
                font-[500]
                tracking-[0.01em]
                hover:scale-[1.01]
                transition-all
                disabled:opacity-60
              "
            >
              {loading
                ? "Signing in..."
                : "Sign In"}
            </button>

          </form>

          {/* DIVIDER */}
          <div className="my-7 flex items-center gap-4">

            <div className="flex-1 h-px bg-white/10" />

            <span
              className="
                text-[12px]
                uppercase
                tracking-[0.2em]
                text-white/35
              "
            >
              or
            </span>

            <div className="flex-1 h-px bg-white/10" />

          </div>

          {/* GOOGLE BUTTON */}
          <button
            onClick={handleGoogleLogin}
            className="
              w-full
              h-[58px]
              rounded-[18px]
              border
              border-white/10
              bg-white/[0.07]
              hover:bg-white/[0.10]
              flex
              items-center
              justify-center
              gap-3
              text-[15px]
              font-[500]
              text-white
              transition-all
            "
          >

            <GoogleIcon />

            Continue with Google

          </button>

          {/* FOOTER */}
          <div
            className="
              mt-7
              flex
              items-center
              justify-between
              text-[15px]
              font-[400]
            "
          >

            <button
              onClick={handleForgotPassword}
              className="
                text-[#CFE8D5]
                hover:underline
              "
            >
              Forgot password?
            </button>

            <span className="text-white/60">

              New here?{" "}

              <Link
                to="/signup"
                className="
                  text-[#CFE8D5]
                  font-[500]
                  hover:underline
                "
              >
                Sign up
              </Link>

            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

function GoogleIcon() {

  return (

    <svg
      width="22"
      height="22"
      viewBox="0 0 48 48"
    >

      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.6 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.3-.4-3.5z"
      />

      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />

      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.5 26.7 36 24 36c-5.3 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />

      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.6l6.2 5.2C40.9 35.5 44 30.2 44 24c0-1.3-.1-2.3-.4-3.5z"
      />
      // Hello, I am a comment!
    </svg>
  );
}
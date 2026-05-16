import {
  createFileRoute,
  Link,
  useNavigate,
} from "@tanstack/react-router";

import {
  Check,
  HelpCircle,
  Lock,
  X,
} from "lucide-react";

import { useState } from "react";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
});

function PricingPage() {
  const navigate = useNavigate();

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  // NAME VALIDATION
  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setCardName(value);
  };

  // CARD VALIDATION
  const handleCardNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 16) {
      value = value.slice(0, 16);
    }

    value = value.replace(/(.{4})/g, "$1 ").trim();

    setCardNumber(value);
  };

  // EXPIRY VALIDATION
  const handleExpiryChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 4) {
      value = value.slice(0, 4);
    }

    if (value.length >= 3) {
      value = value.replace(
        /^(\d{2})(\d{1,2})$/,
        "$1/$2"
      );
    }

    setExpiry(value);
  };

  // CVV VALIDATION
  const handleCvvChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 3) {
      value = value.slice(0, 3);
    }

    setCvv(value);
  };

  // FORM VALIDATION
  const isFormValid =
    cardName.trim().length >= 3 &&
    cardNumber.replace(/\s/g, "").length === 16 &&
    expiry.length === 5 &&
    cvv.length === 3;

  return (
    <div className="min-h-screen bg-[#F5F5F3]">

      {/* HEADER */}
      <div className="h-[78px] bg-white border-b border-black/5 flex items-center justify-between px-8">

        <Link to="/">
          <img
            src="/stillmind-logo.png"
            alt="StillMind"
            className="h-[48px] w-auto object-contain cursor-pointer"
          />
        </Link>


<button
  onClick={() => {
    window.location.href = "/";
  }}
  className="text-black/30 hover:text-black transition"
>
  <X size={28} strokeWidth={1.8} />
</button>
      </div>

      {/* BODY */}
      <div className="w-full max-w-[1600px] mx-auto px-8 py-6 grid grid-cols-1 lg:grid-cols-[0.92fr_1fr] gap-6">

        {/* LEFT */}
        <div className="space-y-6">

          {/* HERO */}
          <div className="bg-white rounded-[28px] px-10 pt-10 pb-10 min-h-[560px]">

            <h1 className="text-[36px] leading-[1.08] tracking-[-0.04em] font-[500] text-[#1D1D1D] max-w-[520px]">
              Try StillMind Premium with a 14-day free trial
            </h1>

            <p className="mt-8 text-[16px] text-black/70">
              Based on your answers, we recommend:
            </p>

            <p className="mt-3 text-[26px] italic leading-[1.25] text-[#1F1F1F] max-w-[500px] font-[400]">
              Relax your mind and 7 Days of Managing Stress
            </p>

            {/* MINI CARDS */}
            <div className="mt-10 flex items-end gap-4">

              {/* CARD 1 */}
              <div className="w-[150px] h-[210px] rounded-[24px] bg-gradient-to-b from-[#52D08C] to-[#2D7D92] p-5 shadow-[0_10px_24px_rgba(0,0,0,0.10)]">

                <p className="text-[10px] tracking-[0.14em] uppercase text-black/40">
                  Meditation
                </p>

                <h3 className="mt-5 text-[18px] leading-[1.2] font-[500] text-[#18463D]">
                  Relax your mind
                </h3>
              </div>

              {/* CARD 2 */}
              <div className="w-[135px] h-[185px] rounded-[22px] bg-gradient-to-b from-[#466FA7] to-[#204667] p-4 shadow-[0_10px_24px_rgba(0,0,0,0.10)]">

                <p className="text-[10px] tracking-[0.14em] uppercase text-black/30">
                  Meditation
                </p>

                <h3 className="mt-5 text-[16px] leading-[1.25] font-[500] text-[#18364B]">
                  Managing Stress
                </h3>
              </div>
            </div>
          </div>

          {/* BENEFITS */}
          <div className="bg-white rounded-[28px] px-10 pt-10 pb-12">

            <p className="text-[16px] text-black/75 mb-6">
              Included in basic membership
            </p>

            {/* BASIC */}
            <div className="flex gap-4 mb-8">

              <div className="h-7 w-7 rounded-full bg-[#A6A6A6] flex items-center justify-center shrink-0 mt-1">
                <Check className="text-white" size={14} />
              </div>

              <div>
                <h4 className="text-[18px] font-[700] text-[#202020]">
                  Limited access to content
                </h4>
              </div>
            </div>

            <h3 className="text-[30px] leading-[1.15] tracking-[-0.03em] font-[500] text-[#202020] mb-8 max-w-[500px]">
              Your premium membership includes
            </h3>

            <div className="space-y-8">

              {[
                {
                  title: "50,000+ minutes of premium content",
                  sub:
                    "Sleep Stories, Meditations, Nature sounds, Sleep soundscapes, Relaxing music, and more",
                },

                {
                  title: "New content daily",
                  sub:
                    "Daily guided content to help with any of life's stressors.",
                },

                {
                  title: "Cancel anytime",
                  sub:
                    "Flexible access with no commitments.",
                },
              ].map((item) => (

                <div
                  key={item.title}
                  className="flex gap-4"
                >

                  <div className="h-8 w-8 rounded-full bg-[#6C63FF] flex items-center justify-center shrink-0 mt-1">
                    <Check className="text-white" size={15} />
                  </div>

                  <div>

                    <h4 className="text-[18px] leading-[1.35] font-[700] text-[#202020]">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-[14px] leading-[1.7] text-black/60 max-w-[520px]">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* PLAN */}
          <div className="bg-white rounded-[28px] px-10 pt-10 pb-10">

            <h2 className="text-[34px] leading-[1.08] tracking-[-0.04em] font-[500] text-[#202020]">
              Here's Your Plan.
            </h2>

            <p className="mt-4 text-[16px] text-black/65">
              Don't worry, you can cancel at any time.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex items-center justify-between text-[18px] font-[400] text-[#202020]">
                <span>Yearly Plan</span>
                <span>₹2,399.00/yr.</span>
              </div>

              <div className="flex items-center justify-between text-[16px] text-[#5D63FF]">
                <span>14-day Trial</span>
                <span>FREE</span>
              </div>

              <div className="h-px bg-black/10" />

              <div className="flex items-center justify-between text-[28px] leading-none font-[700] text-[#202020]">
                <span>Total due today*</span>
                <span>₹0.00</span>
              </div>

              <div className="flex items-center justify-between text-[16px] text-black/60">
                <span>Total due after trial</span>
                <span>₹2,399.00</span>
              </div>

              <p className="pt-2 text-[14px] leading-[1.8] text-black/55">
                After your offer ends, you will be automatically billed for StillMind Premium at ₹2,399.00 + applicable tax.
              </p>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="bg-white rounded-[28px] px-10 pt-10 pb-10">

            <div className="flex items-center gap-3">

              <h3 className="text-[26px] leading-[1.08] font-[500] text-[#202020]">
                2. Choose your payment method
              </h3>

              <HelpCircle
                className="text-black/40"
                size={18}
              />
            </div>

            {/* PAYPAL */}
            <button className="mt-8 h-[62px] w-full rounded-full bg-[#FFC439] text-[18px] font-[700] text-[#003087] shadow-sm">
              PayPal
            </button>

            {/* FORM */}
            <div className="mt-5 space-y-4">

              {/* NAME */}
              <input
                value={cardName}
                onChange={handleNameChange}
                placeholder="Name on Card"
                className="h-[64px] w-full rounded-[14px] border border-black/15 bg-white px-5 text-[16px] outline-none focus:border-[#BFD8F5]"
              />

              <div className="grid grid-cols-3 gap-3">

                {/* CARD */}
                <input
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="Card number"
                  className="h-[64px] rounded-[14px] border border-black/15 bg-white px-5 text-[16px] outline-none"
                />

                {/* EXPIRY */}
                <input
                  value={expiry}
                  onChange={handleExpiryChange}
                  placeholder="MM/YY"
                  className="h-[64px] rounded-[14px] border border-black/15 bg-white px-5 text-[16px] outline-none"
                />

                {/* CVV */}
                <input
                  value={cvv}
                  onChange={handleCvvChange}
                  placeholder="CVV"
                  className="h-[64px] rounded-[14px] border border-black/15 bg-white px-5 text-[16px] outline-none"
                />
              </div>

              {/* COUNTRY */}
              <select className="h-[64px] w-full rounded-[14px] border border-black/15 bg-white px-5 text-[16px] outline-none">
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
              </select>
            </div>

            <p className="mt-6 text-[14px] leading-[1.8] text-black/55">
              By providing your card information, you allow StillMind to charge your card for future payments in accordance with their terms.
            </p>

            {/* CTA */}
            <button
              disabled={!isFormValid}
              onClick={() => {
                alert(
                  "Payment has been done successfully"
                );

                navigate({
                  to: "/",
                });
              }}
              className={`mt-8 h-[64px] w-full rounded-full text-[18px] font-[500] text-white transition-all duration-300 ${
                isFormValid
                  ? "bg-gradient-to-r from-[#3FAE75] to-[#4D8DFF] hover:scale-[1.01]"
                  : "bg-[#D5D5D5] cursor-not-allowed"
              }`}
            >
              Start Your Trial
            </button>

            {/* SECURITY */}
            <div className="mt-5 flex items-center justify-center gap-2 text-[14px] text-black/55">
              <Lock size={14} />
              <span>
                All transactions are secure and encrypted.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import {
  Moon,
  Waves,
  Circle,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  component: OnboardingPage,
});

const interestOptions = [
  {
    id: "sleep",
    label: "Improve sleep quality",
    icon: Moon,
    from: "#43D68C",
    to: "#5B7CFF",
    activeFrom: "#3DA96F",
    activeTo: "#4D74FF",
  },

  {
    id: "stress",
    label: "Reduce stress or anxiety",
    icon: Waves,
    from: "#51D5FF",
    to: "#6C5CFF",
    activeFrom: "#3697D9",
    activeTo: "#584BDE",
  },

  {
    id: "focus",
    label: "Improve focus",
    icon: Circle,
    from: "#4FA3FF",
    to: "#8A4DFF",
    activeFrom: "#437EF3",
    activeTo: "#7444DA",
  },

  {
    id: "self",
    label: "Self-improvement",
    icon: Sparkles,
    from: "#8A5BFF",
    to: "#FF5FB2",
    activeFrom: "#7048D8",
    activeTo: "#D44D98",
  },

  {
    id: "other",
    label: "Something else",
    icon: Sparkles,
    from: "#A855F7",
    to: "#FF6B81",
    activeFrom: "#7E3FD1",
    activeTo: "#D94D66",
  },
];

const questions = [
  {
    title: "How often do you feel stressed?",
    subtitle: "No pressure, there's no wrong answer 🙂",
    options: [
      "Occasionally",
      "Frequently",
      "Every Day",
      "Never",
    ],
  },

  {
    title: "How do you manage your stress now?",
    subtitle: "You've come to the right place for help!",
    options: [
      "I don't know how to",
      "I try different mindfulness techniques",
      "I distract myself",
      "None of the above",
    ],
  },

  {
    title: "How would you like to feel every day?",
    subtitle: "Tip: Imagine if you didn't feel anxious or stressed.",
    options: [
      "Calm and happy",
      "In control of my life",
      "More present",
      "All of the above",
    ],
  },
];

function OnboardingPage() {

  const navigate = useNavigate();
  // DEMO USER ID
// Replace this later with real logged-in user id
const userId = "current-user";

// UNIQUE STORAGE KEY
const onboardingKey = `stillmind-onboarding-${userId}`;

  const [step, setStep] = useState(0);

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const [selectedAnswer, setSelectedAnswer] = useState("");
  useEffect(() => {

  const completed = localStorage.getItem(onboardingKey);

  if (completed === "true") {

    navigate({
      to: "/pricing",
    });
  }

}, []);

  const isInterestPage = step === 0;

  const currentQuestion = questions[step - 1];

  const progress = useMemo(() => {
    return ((step - 1) / questions.length) * 100;
  }, [step]);

  const toggleInterest = (id: string) => {

    setSelectedInterests((prev) => {

      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }

      return [...prev, id];
    });
  };

  const handleContinue = () => {

    if (isInterestPage) {
      setStep(1);
      return;
    }

    if (step < questions.length) {
      setSelectedAnswer("");
      setStep((prev) => prev + 1);
      return;
    }

    // SAVE SURVEY COMPLETION
localStorage.setItem(onboardingKey, "true");

// REDIRECT
navigate({
  to: "/pricing",
});
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5]">

      {/* HEADER */}
      <div className="bg-white border-b border-[#ECECEC]">

        <div className="h-[84px] flex items-center justify-between px-8">

         <img
  src="/stillmind-logo.png"
  alt="StillMind"
  className="h-16 w-auto object-contain"
/>

          <button
            onClick={() =>
              navigate({
                to: "/",
              })
            }
            className="text-[#A7A7A7] text-[36px] leading-none hover:opacity-70"
          >
            ×
          </button>
        </div>

        {/* PROGRESS BAR */}
        {!isInterestPage && (
          <div className="w-full h-[4px] bg-[#ECECEC] overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#4D9FFF] via-[#5E6BFF] to-[#7D5CFF] transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        )}
      </div>

      {/* INTEREST PAGE */}
      {isInterestPage && (

        <div className="max-w-[760px] mx-auto pt-14 pb-16 px-6">

          <div className="text-center">

            <h2 className="text-[34px] font-[500] text-[#2B2B2B]">
              What brings you to StillMind?
            </h2>

            <p className="text-[#6E6E6E] text-[16px] mt-2">
              Select all that apply
            </p>
          </div>

          {/* OPTIONS */}
          <div className="mt-6 flex flex-col gap-4">

            {interestOptions.map((item) => {

              const active = selectedInterests.includes(item.id);

              return (
                <button
                  key={item.id}
                  onClick={() => toggleInterest(item.id)}
                  className={`
                    h-[74px]
                    rounded-full
                    border
                    px-8
                    flex
                    items-center
                    gap-5
                    text-left
                    transition-all
                    duration-300
                    ${active
                      ? "border-transparent"
                      : "border-[#E8E8E8] bg-white"}
                  `}
                  style={{
                    background: active
                      ? `linear-gradient(135deg, ${item.activeFrom}, ${item.activeTo})`
                      : "white",
                  }}
                >

                  {/* ICON */}
                  <div
                    className="h-[42px] w-[42px] rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${item.from}, ${item.to})`,
                    }}
                  >
                    <item.icon
                      size={22}
                      strokeWidth={2.2}
                      className="text-white"
                    />
                  </div>

                  {/* TEXT */}
                  <span
                    className={`
                      text-[18px]
                      font-[500]
                      transition-all
                      duration-300
                      ${active
                        ? "text-white"
                        : "text-[#111111]"}
                    `}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* BUTTONS */}
          <div className="mt-6">

            <button
              disabled={selectedInterests.length === 0}
              onClick={handleContinue}
              className="
                h-[68px]
                rounded-full
                w-full
                text-[22px]
                font-[500]
                text-white
                transition-all
                duration-300
                disabled:opacity-40
              "
              style={{
                background:
                  "linear-gradient(90deg,#3FA2FF 0%,#7B5BFF 100%)",
              }}
            >
              Continue
            </button>

            <button
              onClick={() =>
                navigate({
                  to: "/",
                })
              }
              className="
                h-[68px]
                rounded-full
                w-full
                text-[22px]
                font-[500]
                bg-[#ECECEC]
                text-[#555]
                mt-4
              "
            >
              Skip for now
            </button>
          </div>
        </div>
      )}

      {/* QUESTION PAGES */}
      {!isInterestPage && currentQuestion && (

        <div className="max-w-[760px] mx-auto pt-10 pb-16 px-6">

          <div className="text-center">

            <p className="text-[16px] text-[#2B2B2B]">
              Question {step} of 3
            </p>

            <h2 className="text-[42px] leading-[50px] font-[500] text-[#2B2B2B] mt-2">
              {currentQuestion.title}
            </h2>

            <p className="text-[18px] text-[#555] mt-3">
              {currentQuestion.subtitle}
            </p>
          </div>

          {/* OPTIONS */}
          <div className="mt-6 flex flex-col gap-4">

            {currentQuestion.options.map((option) => {

              const active = selectedAnswer === option;

              return (
                <button
                  key={option}
                  onClick={() => setSelectedAnswer(option)}
                  className={`
                    h-[74px]
                    rounded-full
                    border
                    text-left
                    px-8
                    text-[20px]
                    font-[500]
                    transition-all
                    duration-300
                    ${active
                      ? "border-[#2D6BFF] bg-white"
                      : "border-[#D8D8D8] bg-white"}
                  `}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* BUTTONS */}
          <div className="mt-6">

            <button
              disabled={!selectedAnswer}
              onClick={handleContinue}
              className="
                h-[68px]
                rounded-full
                w-full
                text-[22px]
                font-[500]
                text-white
                transition-all
                duration-300
                disabled:opacity-40
              "
              style={{
                background:
                  "linear-gradient(90deg,#3FA2FF 0%,#7B5BFF 100%)",
              }}
            >
              Continue
            </button>

            <button
              onClick={() =>
                navigate({
                  to: "/",
                })
              }
              className="
                h-[68px]
                rounded-full
                w-full
                text-[22px]
                font-[500]
                border
                border-[#BDBDBD]
                text-[#3B3B3B]
                mt-4
                bg-white
              "
            >
              Skip for now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OnboardingPage;
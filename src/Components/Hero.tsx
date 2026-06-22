import React from "react";
import {
  Rocket,
  CalendarDays,
  Zap,
  Target,
  Leaf,
} from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#040816] text-white">

      {/* =======================================================
          BACKGROUND
      ======================================================= */}

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040816] via-[#08122B] to-[#040816]" />

      {/* Top center purple glow */}
      <div
        className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,.18) 0%, rgba(168,85,247,.10) 30%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Left blue glow */}
      <div
        className="absolute -left-48 bottom-8 h-[700px] w-[700px]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,.30) 0%, rgba(59,130,246,.12) 40%, transparent 72%)",
          filter: "blur(90px)",
        }}
      />

      {/* Right purple glow */}
      <div
        className="absolute -right-48 bottom-0 h-[700px] w-[700px]"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,.30) 0%, rgba(168,85,247,.12) 40%, transparent 72%)",
          filter: "blur(90px)",
        }}
      />

      {/* Middle soft blue glow */}
      <div
        className="absolute left-1/2 top-[34%] h-[420px] w-[900px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,.10), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Small accent glows */}
      <div className="absolute left-[18%] top-[22%] h-36 w-36 rounded-full bg-cyan-400/10 blur-[90px]" />
      <div className="absolute right-[22%] top-[30%] h-44 w-44 rounded-full bg-fuchsia-500/10 blur-[90px]" />

      {/* =======================================================
          GRID FLOOR
      ======================================================= */}

      <div className="absolute inset-x-0 bottom-0 h-[220px] overflow-hidden opacity-70">

        {/* Fade into floor */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040816] via-transparent to-transparent z-10" />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(74,144,226,.16) 1px, transparent 1px),
              linear-gradient(90deg, rgba(74,144,226,.16) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
            transform:
              "perspective(900px) rotateX(78deg) scale(2.3)",
            transformOrigin: "bottom",
            maskImage:
              "linear-gradient(to top, black 35%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 35%, transparent 100%)",
          }}
        />
      </div>

      {/* =======================================================
          CONTENT CONTAINER
      ======================================================= */}

      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-8 text-center lg:px-8">

        {/* Badge */}

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-white/[0.04] px-5 py-2 text-sm font-medium text-slate-200 backdrop-blur-xl shadow-[0_0_35px_rgba(59,130,246,.15)]">

          <span className="text-fuchsia-400">
            ✦
          </span>

          AI-Powered Planning for Modern Teams

        </div>

        {/* =======================================================
            HERO TITLE
        ======================================================= */}

        <h1 className="max-w-6xl font-black leading-[0.92] tracking-[-0.05em]">

          {/* First line */}

          <span
            className="block text-[3.8rem] sm:text-[5rem] lg:text-[7rem]"
            style={{
              textShadow:
                "0 0 20px rgba(255,255,255,.10)",
            }}
          >
            Smarter{" "}

            <span
              className="bg-gradient-to-r from-white via-white to-fuchsia-300 bg-clip-text text-transparent"
              style={{
                filter:
                  "drop-shadow(0 0 10px rgba(168,85,247,.35))",
              }}
            >
              Planning
            </span>

          </span>

          {/* Second line */}

          <span className="block text-[3.8rem] sm:text-[5rem] lg:text-[7rem]">

            <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Starts
            </span>

            {" "}

            <span
              className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-pink-300 bg-clip-text text-transparent"
              style={{
                filter:
                  "drop-shadow(0 0 16px rgba(192,132,252,.45))",
              }}
            >
              Today
            </span>

          </span>

        </h1>
                {/* =======================================================
            SUBTITLE
        ======================================================= */}

<p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl lg:text-[1.65rem]">
          Join modern startup teams using AI
          <br className="hidden sm:block" />
          to execute{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text font-semibold text-transparent">
            faster
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-r from-fuchsia-400 to-violet-300 bg-clip-text font-semibold text-transparent">
            stress less
          </span>
          .
        </p>

        {/* =======================================================
            FEATURES
        ======================================================= */}

        <div className="mt-10 grid w-full max-w-5xl gap-8 md:grid-cols-3">

          <Feature
            icon={<Zap size={20} />}
            title="Execute Faster"
            description="Turn plans into action in minutes, not days."
            color="blue"
          />

          <Feature
            icon={<Target size={20} />}
            title="Smarter Decisions"
            description="AI insights help you prioritize what truly matters."
            color="purple"
          />

          <Feature
            icon={<Leaf size={20} />}
            title="Less Stress"
            description="Automate busywork and focus on growth."
            color="blue"
          />

        </div>

        {/* =======================================================
            CTA BUTTONS
        ======================================================= */}

        <div className="mt-10 flex w-full max-w-3xl flex-col justify-center gap-5 sm:flex-row">

          {/* Primary */}

          <button className="group relative flex-1 overflow-hidden rounded-full border border-cyan-400/30 bg-gradient-to-r from-sky-500 via-blue-500 to-violet-600 px-8 py-5 shadow-[0_0_35px_rgba(59,130,246,.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(99,102,241,.55)]">

            {/* Glass highlight */}

            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-80" />

            {/* Hover glow */}

            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-white/10 blur-xl" />
            </div>

            <div className="relative flex items-center justify-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">

                <Rocket size={20} />

              </div>

              <div className="text-left">

                <div className="text-lg font-semibold">
                  Start Free Trial
                </div>

                <div className="text-sm text-blue-100">
                  No credit card required
                </div>

              </div>

            </div>

          </button>

          {/* Secondary */}

          <button className="group relative flex-1 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-8 py-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(168,85,247,.18)]">

            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />

            <div className="relative flex items-center justify-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">

                <CalendarDays size={20} />

              </div>

              <div className="text-left">

                <div className="text-lg font-semibold">
                  Book a Demo
                </div>

                <div className="text-sm text-slate-400">
                  See it in action
                </div>

              </div>

            </div>

          </button>

        </div>

      </div>
      </section>
  );
};
      type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: "blue" | "purple";
};

const Feature: React.FC<FeatureProps> = ({
  icon,
  title,
  description,
  color,
}) => {
  const accent =
    color === "blue"
      ? {
          border: "border-cyan-400/30",
          bg: "bg-cyan-400/10",
          text: "text-cyan-300",
          glow: "shadow-[0_0_20px_rgba(34,211,238,.18)]",
        }
      : {
          border: "border-fuchsia-400/30",
          bg: "bg-fuchsia-400/10",
          text: "text-fuchsia-300",
          glow: "shadow-[0_0_20px_rgba(217,70,239,.18)]",
        };

  return (
    <div className="flex items-start gap-4 text-left">

      {/* Icon */}

      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border backdrop-blur-xl ${accent.border} ${accent.bg} ${accent.text} ${accent.glow}`}
      >
        {icon}
      </div>

      {/* Text */}

      <div>

        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 max-w-xs text-sm leading-7 text-slate-400">
          {description}
        </p>

      </div>

    </div>
  );
};

export default Hero;
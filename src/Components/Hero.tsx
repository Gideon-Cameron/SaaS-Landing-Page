import React from "react";
import {
  Sparkles,
  Rocket,
  Calendar,
  Zap,
  Target,
  Leaf,
} from "lucide-react";

import BackgroundEffects from "./BackgroundEffects";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <BackgroundEffects />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 pt-28 pb-20 text-center">

        {/* Badge */}

        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-5 py-2 shadow-lg backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-violet-600" />

          <span className="text-sm font-semibold text-slate-700">
            AI Powered Project Planning
          </span>
        </div>

        {/* Heading */}

        <h1 className="max-w-5xl text-5xl font-black leading-tight tracking-tight text-slate-900 md:text-7xl xl:text-8xl">
          Smarter Planning
          <br />

          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
            Starts Today
          </span>
        </h1>

        {/* Description */}

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
          Organize projects, automate repetitive work, and help your team
          execute faster with intelligent AI assistance built directly into
          your workflow.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">

          <button className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-300/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-400/40">

            <Rocket size={20} />

            Start Free Trial

          </button>

          <button className="group flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-slate-50">

            <Calendar size={20} />

            Book Demo

          </button>

        </div>

        {/* Dashboard Preview */}

        <div className="mt-24 w-full max-w-6xl">

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/60">

            {/* Window Bar */}

            <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-6 py-4">

              <div className="h-3 w-3 rounded-full bg-red-400" />

              <div className="h-3 w-3 rounded-full bg-yellow-400" />

              <div className="h-3 w-3 rounded-full bg-green-400" />

            </div>

            {/* Dashboard */}

            <div className="grid gap-6 p-8 lg:grid-cols-3">

              {/* Tasks */}

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">

                <h3 className="mb-6 text-lg font-bold text-slate-900">
                  Today's Tasks
                </h3>

                <div className="space-y-4">

                  <Task text="Design Landing Page" />

                  <Task text="Generate AI Sprint Plan" />

                  <Task text="Deploy Beta Version" />

                </div>

              </div>

              {/* AI */}

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">

                <h3 className="mb-6 text-lg font-bold text-slate-900">
                  AI Insights
                </h3>

                <div className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 p-5 text-white">

                  <p className="text-sm uppercase opacity-80">
                    Project Health
                  </p>

                  <p className="mt-2 text-5xl font-black">
                    92%
                  </p>

                  <p className="mt-4 text-sm opacity-90">
                    Your sprint is on schedule.
                  </p>

                </div>

              </div>

              {/* Timeline */}

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">

                <h3 className="mb-6 text-lg font-bold text-slate-900">
                  Progress
                </h3>

                <div className="space-y-5">

                  <Progress label="Planning" value={100} />

                  <Progress label="Development" value={82} />

                  <Progress label="Testing" value={55} />

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Features */}

        <div className="mt-16 grid w-full max-w-5xl gap-8 md:grid-cols-3">

          <Feature
            icon={<Zap size={22} />}
            title="Execute Faster"
            description="Reduce planning time with intelligent AI workflows."
          />

          <Feature
            icon={<Target size={22} />}
            title="Stay Focused"
            description="Automatically prioritize the work that matters."
          />

          <Feature
            icon={<Leaf size={22} />}
            title="Reduce Busywork"
            description="Automate repetitive tasks and save hours every week."
          />

        </div>

      </div>
    </section>
  );
};

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex items-start gap-4 rounded-2xl bg-white/70 p-4 backdrop-blur-sm">

    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg">

      {icon}

    </div>

    <div className="text-left">

      <h4 className="font-semibold text-slate-900">
        {title}
      </h4>

      <p className="mt-1 text-sm text-slate-600">
        {description}
      </p>

    </div>

  </div>
);

const Task: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-3">

    <div className="h-3 w-3 rounded-full bg-blue-500" />

    <span className="text-slate-700">
      {text}
    </span>

  </div>
);

interface ProgressProps {
  label: string;
  value: number;
}

const Progress: React.FC<ProgressProps> = ({
  label,
  value,
}) => (
  <div>

    <div className="mb-2 flex justify-between text-sm">

      <span>{label}</span>

      <span>{value}%</span>

    </div>

    <div className="h-3 rounded-full bg-slate-200">

      <div
        className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
        style={{ width: `${value}%` }}
      />

    </div>

  </div>
);

export default Hero;
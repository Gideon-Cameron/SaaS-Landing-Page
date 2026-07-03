import {
    Sparkles,
    Rocket,
    Calendar,
    // CheckCircle2,
  } from "lucide-react";
  
  import desktopBackground from "../assets/Desktop-background.png";
  import tabletBackground from "../assets/Tablet-background.png";
  import phoneBackground from "../assets/Phone-background.png";
  
  const Hero = () => {
    return (
      <section className="relative h-screen overflow-hidden">
  
        {/* ================= Background ================= */}
  
        <picture>
          <source media="(min-width:1024px)" srcSet={desktopBackground} />
          <source media="(min-width:768px)" srcSet={tabletBackground} />
          <img
            src={phoneBackground}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>
  
        {/* Left fade only */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/55 to-transparent" />
  
        {/* ================= Content ================= */}
  
        <div className="relative z-10 flex h-full items-center">
  
          <div className="mx-auto flex w-full max-w-7xl px-6">
  
            {/* LEFT */}
  
            <div className="flex w-full max-w-xl flex-col justify-center pt-20 lg:pt-10">
  
              {/* Badge */}
  
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-violet-100 bg-white/80 px-4 py-2 backdrop-blur-md shadow-lg">
  
                <Sparkles
                  size={16}
                  className="text-violet-600"
                />
  
                <span className="text-sm font-semibold text-slate-700">
                  AI-Powered Planning for Modern Teams
                </span>
  
              </div>
  
              {/* Heading */}
  
              <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-tight lg:text-7xl">
  
                <span className="text-slate-900">
                  Smarter Planning
                </span>
  
                <span className="mt-2 block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Starts Today
                </span>
  
              </h1>
  
              {/* Paragraph */}
  
              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
  
                FlowPilot helps your team plan smarter, automate repetitive work,
                and stay aligned with AI that works with you—not instead of you.
  
              </p>
  
              {/* Buttons */}
  
              <div className="mt-8 flex flex-wrap gap-4">
  
                <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-4 font-semibold text-white shadow-xl transition hover:scale-[1.02]">
  
                  <Rocket size={18} />
  
                  Start Free Trial
  
                </button>
  
                <button className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-white/90 px-7 py-4 font-semibold text-slate-800 backdrop-blur transition hover:bg-white">
  
                  <Calendar size={18} />
  
                  Book Demo
  
                </button>
  
              </div>
  
              {/* Benefits */}
{/*   
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
  
                <div className="flex items-center gap-2">
  
                  <CheckCircle2
                    size={18}
                    className="text-blue-600"
                  />
  
                  <span className="text-sm text-slate-700">
                    AI-generated plans
                  </span>
  
                </div>
  
                <div className="flex items-center gap-2">
  
                  <CheckCircle2
                    size={18}
                    className="text-blue-600"
                  />
  
                  <span className="text-sm text-slate-700">
                    Smart prioritization
                  </span>
  
                </div>
  
                <div className="flex items-center gap-2">
  
                  <CheckCircle2
                    size={18}
                    className="text-blue-600"
                  />
  
                  <span className="text-sm text-slate-700">
                    Built for startups
                  </span>
  
                </div>
  
              </div> */}
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  };
  
  export default Hero;
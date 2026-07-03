import {
    Sparkles,
    BrainCircuit,
    Target,
    Users,
    BarChart3,
  } from "lucide-react";
  
  const features = [
    {
      icon: BrainCircuit,
      title: "AI Planning",
      description:
        "Generate complete project roadmaps, tasks, and timelines in seconds instead of hours.",
    },
    {
      icon: Target,
      title: "Smart Priorities",
      description:
        "Know exactly what deserves your attention with intelligent task prioritization.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Keep conversations, files, and progress connected so everyone stays aligned.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Progress",
      description:
        "Track every milestone and project from a clean dashboard that updates instantly.",
    },
  ];
  
  const Features = () => {
    return (
      <section
        id="features"
        className="relative overflow-hidden bg-white py-24 lg:py-32"
      >
        {/* Background Glow */}
  
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-[140px]" />
  
        <div className="relative mx-auto max-w-7xl px-6">
  
          {/* Header */}
  
          <div className="mx-auto max-w-3xl text-center">
  
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2">
  
              <Sparkles
                size={18}
                className="text-violet-600"
              />
  
              <span className="text-sm font-semibold text-slate-700">
                Built for Modern Teams
              </span>
  
            </div>
  
            <h2 className="mt-8 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
  
              Everything Your Team Needs.
  
              <span className="mt-3 block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
  
                Nothing It Doesn't.
  
              </span>
  
            </h2>
  
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
  
              FlowPilot gives startups and growing teams the tools they
              actually need—without the clutter, endless setup, or enterprise
              complexity.
  
            </p>
  
          </div>
  
          {/* Feature Cards */}
  
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
  
            {features.map((feature) => {
              const Icon = feature.icon;
  
              return (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-100/50"
                >
  
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg">
  
                    <Icon size={28} />
  
                  </div>
  
                  <h3 className="mt-8 text-xl font-bold text-slate-900">
  
                    {feature.title}
  
                  </h3>
  
                  <p className="mt-4 leading-7 text-slate-600">
  
                    {feature.description}
  
                  </p>
  
                </div>
              );
            })}
  
          </div>
  
          {/* Dashboard Preview */}
  
          <div className="mt-24">
  
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-2xl shadow-slate-200/50">
  
              <div className="aspect-[16/9] rounded-2xl border border-dashed border-slate-300 bg-white flex items-center justify-center">
  
                <div className="text-center">
  
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">
  
                    <BarChart3 size={30} />
  
                  </div>
  
                  <h3 className="mt-6 text-2xl font-bold text-slate-800">
  
                    Dashboard Preview
  
                  </h3>
  
                  <p className="mt-2 text-slate-500">
  
                    Replace this placeholder with your product screenshot.
  
                  </p>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  };
  
  export default Features;
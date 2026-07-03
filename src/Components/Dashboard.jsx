import {
    Sparkles,
    BrainCircuit,
    CalendarDays,
    Users,
    BarChart3,
  } from "lucide-react";
  
  import dashboardImage from "../assets/Dashboard-Ui.png";
  
  const features = [
    {
      icon: BrainCircuit,
      title: "AI Prioritization",
      description:
        "Automatically ranks tasks based on urgency, deadlines, and workload.",
    },
    {
      icon: CalendarDays,
      title: "Smart Planning",
      description:
        "Schedules update automatically whenever priorities change.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Everyone stays aligned with shared projects, comments, and progress.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Insights",
      description:
        "Track milestones, sprint health, and project performance instantly.",
    },
  ];
  
  const Dashboard = () => {
    return (
      <section
        id="dashboard"
        className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* Badge */}
  
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 shadow-md">
              <Sparkles
                size={16}
                className="text-violet-600"
              />
  
              <span className="text-sm font-semibold text-slate-700">
                Product Overview
              </span>
            </div>
          </div>
  
          {/* Heading */}
  
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
              Everything Your Team Needs.
              <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                Nothing It Doesnt.
              </span>
            </h2>
  
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              FlowPilot keeps projects organized automatically so your team
              always knows what to work on next. No clutter. No unnecessary
              complexity.
            </p>
          </div>
  
          {/* Dashboard */}
  
          <div className="relative mx-auto mt-16 max-w-6xl">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              <img
                src={dashboardImage}
                alt="FlowPilot Dashboard"
                className="w-full"
              />
            </div>
  
            {/* Floating Card */}
  
            <div className="absolute -top-8 right-8 hidden rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-xl backdrop-blur lg:block">
              <p className="text-sm font-semibold text-slate-900">
                AI Recommendation
              </p>
  
              <p className="mt-2 text-sm text-slate-600">
                Move Product Launch to Tuesday for higher team availability.
              </p>
  
              <div className="mt-4 rounded-xl bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white">
                Applied
              </div>
            </div>
  
            <div className="absolute -bottom-8 left-10 hidden rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-xl backdrop-blur lg:block">
              <p className="text-sm font-semibold text-slate-900">
                Sprint Health
              </p>
  
              <p className="mt-2 text-3xl font-bold text-green-500">
                96%
              </p>
  
              <p className="text-sm text-slate-500">
                On Track
              </p>
            </div>
          </div>
  
          {/* Features */}
  
          <div className="mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
  
              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">
                    <Icon size={26} />
                  </div>
  
                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>
  
                  <p className="mt-3 leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  
  export default Dashboard;
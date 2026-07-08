import {
    Sparkles,
    Check,
  } from "lucide-react";
  
  const plans = [
    {
      name: "Starter",
      price: 19,
      description: "For small teams getting organized",
      border: "border-blue-500",
      button: "from-blue-600 to-blue-500",
      text: "text-blue-600",
      featured: false,
      features: [
        "AI task breakdown",
        "Basic workload insights",
        "Unlimited projects",
      ],
    },
    {
      name: "Pro",
      price: 39,
      description: "For growing product teams",
      border: "border-violet-500",
      button: "from-blue-600 to-violet-600",
      text: "text-violet-600",
      featured: true,
      features: [
        "Everything in Starter",
        "Smart deadline prediction",
        "Auto meeting summaries",
        "Priority support",
      ],
    },
    {
      name: "Team",
      price: 79,
      description: "For scaling startups",
      border: "border-orange-400",
      button: "from-orange-500 to-amber-500",
      text: "text-orange-500",
      featured: false,
      features: [
        "Everything in Pro",
        "Advanced analytics",
        "Admin controls",
        "Dedicated onboarding",
      ],
    },
  ];
  
  const Pricing = () => {
    return (
      <section
        id="pricing"
        className="bg-white py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
  
          {/* Badge */}
  
          <div className="flex justify-center">
  
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-gradient-to-r from-white to-slate-50 px-4 py-2 shadow-md">
  
              <Sparkles
                size={15}
                className="text-violet-600"
              />
  
              <span className="text-sm font-semibold text-slate-800">
                Simple. Fair. Built for teams.
              </span>
  
            </div>
  
          </div>
  
          {/* Heading */}
  
          <div className="mx-auto mt-6 max-w-3xl text-center">
  
            <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
  
              Plans that{" "}
  
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                scale
              </span>
  
            </h2>
  
            <p className="mt-4 text-base text-slate-500 md:text-lg">
              Check out advanced features with PREMIUM!
            </p>
  
          </div>
  
          {/* Cards */}
  
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3">
  
            {plans.map((plan) => (
  
              <div
                key={plan.name}
                className={`relative overflow-visible rounded-3xl border-2 ${plan.border} bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
              >
  
                {/* Badge */}
  
                {plan.featured && (
  
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
  
                    <div className="whitespace-nowrap rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-1.5 text-xs font-semibold text-white shadow-lg">
  
                      Most Popular
  
                    </div>
  
                  </div>
  
                )}
  
                <div className="p-6">
  
                  {/* Plan */}
  
                  <h3
                    className={`text-center text-2xl font-bold ${plan.text}`}
                  >
                    {plan.name}
                  </h3>
  
                  {/* Price */}
  
                  <div className="mt-4 text-center">
  
                    <span className="text-4xl font-black text-slate-900">
                      ${plan.price}
                    </span>
  
                    <span className="text-xl text-slate-700">
                      /month
                    </span>
  
                  </div>
  
                  <p className="mt-3 text-center text-sm text-slate-500">
                    {plan.description}
                  </p>
  
                  <div className="my-6 h-px bg-slate-200" />
  
                  {/* Features */}
  
                  <ul className="space-y-3">
  
                    {plan.features.map((feature) => (
  
                      <li
                        key={feature}
                        className="flex items-center gap-3"
                      >
  
                        <Check
                          size={18}
                          className={plan.text}
                        />
  
                        <span className="text-sm text-slate-700">
                          {feature}
                        </span>
  
                      </li>
  
                    ))}
  
                  </ul>
  
                  {/* Button */}
  
                  <button
                    className={`mt-8 w-full rounded-xl bg-gradient-to-r ${plan.button} py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02]`}
                  >
                    Start Free Trial
                  </button>
  
                </div>
  
              </div>
  
            ))}
  
          </div>
  
          {/* Bottom */}
  
          <div className="mt-12 text-center">
  
            <p className="text-sm text-slate-500">
              ✓ 14-day free trial &nbsp; • &nbsp;
              ✓ Cancel anytime &nbsp; • &nbsp;
              ✓ No credit card required
            </p>
  
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Pricing;
import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

import logo from "../assets/Icon.webp";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">

      <div className="mx-auto max-w-7xl px-6 pt-5">

        <div className="flex h-16 items-center justify-between rounded-2xl border border-white/60 bg-white/75 px-6 backdrop-blur-xl shadow-[0_8px_35px_rgba(15,23,42,0.08)]">

          {/* Logo */}

          <a
            href="/"
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="FlowPilot"
              className="h-10 w-10 rounded-xl object-cover"
            />

            <span className="text-2xl font-bold tracking-tight text-slate-900">
              FlowPilot
            </span>
          </a>

          {/* Desktop */}

          <nav className="hidden items-center gap-10 lg:flex">

            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[15px] font-medium text-slate-700 transition hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}

          </nav>

          {/* Right Side */}

          <div className="hidden items-center gap-4 lg:flex">

            <button className="rounded-xl px-4 py-2 text-[15px] font-medium text-slate-700 transition hover:bg-slate-100">

              Sign In

            </button>

            <button className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-[15px] font-semibold text-white shadow-lg shadow-blue-300/30 transition-all duration-300 hover:scale-[1.02]">

              Get Started

              <ChevronRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </button>

          </div>

          {/* Mobile */}

          <button
            className="rounded-lg p-2 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Menu */}

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            mobileOpen
              ? "mt-3 max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >

          <div className="rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-xl shadow-xl">

            <nav className="flex flex-col">

              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-slate-100 px-6 py-4 text-slate-700 hover:bg-slate-50"
                >
                  {item.name}
                </a>
              ))}

            </nav>

            <div className="space-y-3 p-5">

              <button className="w-full rounded-xl border border-slate-200 py-3 font-medium text-slate-700 hover:bg-slate-50">

                Sign In

              </button>

              <button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-3 font-semibold text-white">

                Get Started

              </button>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;
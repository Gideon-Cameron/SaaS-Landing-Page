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

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between rounded-2xl border border-slate-200/80 bg-white/80 px-6 shadow-lg shadow-slate-200/30 backdrop-blur-xl">

          {/* Logo */}

          <a
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <img
              src={logo}
              alt="FlowPilot"
              className="h-9 w-9 rounded-xl object-cover"
            />

            <span className="text-xl font-bold tracking-tight text-slate-900">
              FlowPilot
            </span>
          </a>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}

          <div className="hidden items-center gap-3 lg:flex">
            <button className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
              Sign In
            </button>

            <button className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-300/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-blue-400/40">
              Get Started

              <ChevronRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}

        {mobileOpen && (
          <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl lg:hidden">

            <nav className="flex flex-col">

              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-slate-100 px-6 py-4 font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  {item.name}
                </a>
              ))}

            </nav>

            <div className="space-y-3 p-6">

              <button className="w-full rounded-xl border border-slate-200 py-3 font-semibold text-slate-700 transition hover:bg-slate-50">
                Sign In
              </button>

              <button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-3 font-semibold text-white shadow-lg">
                Get Started
              </button>

            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
import {
    ArrowRight,
    Calendar,
  } from "lucide-react";
  
  import {
    FaGithub,
    FaLinkedin,
    FaXTwitter,
  } from "react-icons/fa6";
  
  import logo from "../assets/Icon.webp";
  
  const Contact = () => {
    return (
      <footer
        id="contact"
        className="bg-gradient-to-b from-[#08142d] to-[#111c46] text-white"
      >
        <div className="mx-auto max-w-7xl px-6">
  
          {/* CTA Section */}
  
          <div className="border-b border-white/10 py-24 text-center">
  
            <div className="mx-auto max-w-3xl">
  
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md">
  
                <span className="text-sm font-medium text-blue-100">
                  ✨ Ready to work smarter?
                </span>
  
              </div>
  
              <h2 className="mt-8 text-4xl font-black tracking-tight md:text-6xl">
  
                Start planning with{" "}
  
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  AI today
                </span>
  
              </h2>
  
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
  
                FlowPilot helps small teams stay organized,
                prioritize what matters, and deliver projects
                faster—with AI that works alongside your team.
  
              </p>
  
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
  
                <button className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-900/30 transition hover:scale-[1.02]">
  
                  Start Free Trial
  
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
  
                </button>
  
                <button className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/10">
  
                  <Calendar size={18} />
  
                  Book Demo
  
                </button>
  
              </div>
  
            </div>
  
          </div>
  
          {/* Footer */}
  
          <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
  
            {/* Logo */}
  
            <div className="lg:col-span-2">
  
              <a
                href="/"
                className="flex items-center gap-3"
              >
  
                <img
                  src={logo}
                  alt="FlowPilot"
                  className="h-10 w-10 rounded-xl"
                />
  
                <span className="text-2xl font-bold">
                  FlowPilot
                </span>
  
              </a>
  
              <p className="mt-5 max-w-sm leading-7 text-slate-400">
  
                AI-powered planning built for modern startups,
                product teams, and growing businesses that want
                to move faster with less busywork.
  
              </p>
  
            </div>
  
            {/* Product */}
  
            <div>
  
              <h3 className="mb-5 font-semibold">
                Product
              </h3>
  
              <ul className="space-y-3 text-slate-400">
  
                <li>
                  <a
                    href="#features"
                    className="transition hover:text-white"
                  >
                    Features
                  </a>
                </li>
  
                <li>
                  <a
                    href="#dashboard"
                    className="transition hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
  
                <li>
                  <a
                    href="#pricing"
                    className="transition hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
  
                <li>
                  <a
                    href="#faq"
                    className="transition hover:text-white"
                  >
                    FAQ
                  </a>
                </li>
  
              </ul>
  
            </div>
  
            {/* Company */}
  
            <div>
  
              <h3 className="mb-5 font-semibold">
                Company
              </h3>
  
              <ul className="space-y-3 text-slate-400">
  
                <li>
                  <a
                    href="#"
                    className="transition hover:text-white"
                  >
                    About
                  </a>
                </li>
  
                <li>
                  <a
                    href="#"
                    className="transition hover:text-white"
                  >
                    Contact
                  </a>
                </li>
  
                <li>
                  <a
                    href="#"
                    className="transition hover:text-white"
                  >
                    Careers
                  </a>
                </li>
  
                <li>
                  <a
                    href="#"
                    className="transition hover:text-white"
                  >
                    Blog
                  </a>
                </li>
  
              </ul>
  
            </div>
  
            {/* Resources */}
  
            <div>
  
              <h3 className="mb-5 font-semibold">
                Resources
              </h3>
  
              <ul className="space-y-3 text-slate-400">
  
                <li>
                  <a
                    href="#"
                    className="transition hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
  
                <li>
                  <a
                    href="#"
                    className="transition hover:text-white"
                  >
                    Terms of Service
                  </a>
                </li>
  
                <li>
                  <a
                    href="#"
                    className="transition hover:text-white"
                  >
                    Support
                  </a>
                </li>
  
              </ul>
  
            </div>
  
          </div>
  
          {/* Bottom */}
  
          <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 text-sm text-slate-400 md:flex-row">
  
            <p>
              © {new Date().getFullYear()} FlowPilot. All rights reserved.
            </p>
  
            <div className="flex items-center gap-5">
  
              <a
                href="#"
                aria-label="X (formerly Twitter)"
                className="transition hover:text-white"
              >
                <FaXTwitter size={20} />
              </a>
  
              <a
                href="#"
                aria-label="GitHub"
                className="transition hover:text-white"
              >
                <FaGithub size={20} />
              </a>
  
              <a
                href="#"
                aria-label="LinkedIn"
                className="transition hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>
  
            </div>
  
          </div>
  
        </div>
      </footer>
    );
  };
  
  export default Contact;
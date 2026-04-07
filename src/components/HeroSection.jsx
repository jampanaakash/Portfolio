import React, { useState, useEffect } from "react";
import siteConfig from "../data/siteConfig";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { ArrowDown, Mail } from "lucide-react";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll2 = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 overflow-hidden"
    >
      {/* Subtle floating background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft gradient orb - top right */}
        <div
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-[0.03] dark:opacity-[0.05] bg-slate-900 dark:bg-slate-200 blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
        {/* Soft gradient orb - bottom left */}
        <div
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-[0.03] dark:opacity-[0.04] bg-slate-700 dark:bg-slate-300 blur-3xl"
          style={{
            transform: `translateY(${scrollY * -0.08}px)`,
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Greeting */}
          <p
            className={`text-sm font-medium tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-4 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Hello, I'm
          </p>

          {/* Name */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-50 font-heading leading-[1.1] mb-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {siteConfig.personal.name}
          </h1>

          {/* Tagline */}
          <p
            className={`text-lg sm:text-xl lg:text-2xl text-slate-500 dark:text-slate-400 font-light max-w-2xl mb-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            {siteConfig.personal.tagline}
          </p>

          {/* Intro */}
          <p
            className={`text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-xl mb-10 leading-relaxed transition-all duration-700 delay-[400ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            {siteConfig.personal.intro}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="#projects"
              onClick={(e) => handleScroll2(e, "#projects")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              View My Work
              <ArrowDown size={16} className="animate-bounce" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll2(e, "#contact")}
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          opacity: Math.max(0, 1 - scrollY / 300),
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-700 flex justify-center pt-2">
          <div className="w-1 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

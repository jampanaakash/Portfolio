import React, { useState, useEffect } from "react";
import siteConfig from "../data/siteConfig";
import useScrollAnimation from "../hooks/useScrollAnimation";

const SkillTag = ({ skill, delay }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <span
      ref={ref}
      className={`inline-block px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-slate-400 dark:hover:border-slate-500 hover:scale-[1.05] hover:shadow-sm transition-all duration-300 cursor-default ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {skill}
    </span>
  );
};

const SkillGroup = ({ skillGroup, groupIndex }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${groupIndex * 120}ms` }}
    >
      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
        {skillGroup.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skillGroup.items.map((skill, skillIndex) => (
          <SkillTag
            key={skillIndex}
            skill={skill}
            delay={groupIndex * 120 + skillIndex * 50}
          />
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="skills"
      className="relative py-24 lg:py-32 px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          transform: `translateY(${(scrollY - 800) * 0.03}px)`,
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-3">
              Skills
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-50 font-heading">
              Technical expertise
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.skills.map((skillGroup, index) => (
              <SkillGroup
                key={index}
                skillGroup={skillGroup}
                groupIndex={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

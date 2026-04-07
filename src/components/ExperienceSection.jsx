import React from "react";
import siteConfig from "../data/siteConfig";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { Briefcase } from "lucide-react";

const ExperienceItem = ({ exp, index, isLast }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 lg:gap-10 ${
        !isLast ? "pb-12" : ""
      }`}
    >
      {/* Timeline Line & Dot */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0">
          <Briefcase size={16} className="text-slate-500 dark:text-slate-400" />
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-slate-200 dark:bg-slate-800 mt-3" />
        )}
      </div>

      {/* Content */}
      <div
        className={`flex-1 pb-2 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="mb-4">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {exp.role}
            </h3>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              at {exp.company}
            </span>
          </div>
          <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
            {exp.period} · {exp.location}
          </p>
        </div>

        <ul className="space-y-3">
          {exp.description.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-2 flex-shrink-0" />
              <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-3">
            Experience
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-50 font-heading">
            Where I've worked
          </h2>
        </div>

        <div className="max-w-3xl">
          {siteConfig.experience.map((exp, index) => (
            <ExperienceItem
              key={index}
              exp={exp}
              index={index}
              isLast={index === siteConfig.experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

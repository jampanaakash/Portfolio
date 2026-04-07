import React from "react";
import siteConfig from "../data/siteConfig";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-24 lg:py-32 px-6 lg:px-8">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-3">
              Education
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-50 font-heading">
              Academic background
            </h2>
          </div>

          <div className="max-w-2xl">
            {siteConfig.education.map((edu, index) => (
              <div
                key={index}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0">
                  <GraduationCap
                    size={20}
                    className="text-slate-500 dark:text-slate-400"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {edu.institution}
                  </h3>
                  <p className="text-base text-slate-600 dark:text-slate-400 mt-1">
                    {edu.degree}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                    <span className="text-sm text-slate-500 dark:text-slate-500">
                      {edu.period}
                    </span>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

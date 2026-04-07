import React from "react";
import siteConfig from "../data/siteConfig";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { MapPin, Briefcase, GraduationCap, Code2 } from "lucide-react";

const iconMap = {
  "Current Role": Briefcase,
  Location: MapPin,
  Focus: Code2,
  Education: GraduationCap,
};

const HighlightCard = ({ item, index }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const IconComp = iconMap[item.label] || Code2;

  return (
    <div
      ref={ref}
      className={`p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-sm transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 100 + 200}ms` }}
    >
      <IconComp
        size={18}
        className="text-slate-400 dark:text-slate-500 mb-3"
      />
      <p className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
        {item.label}
      </p>
      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
        {item.value}
      </p>
    </div>
  );
};

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-8">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-3">
              About
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-50 font-heading">
              A bit about me
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Bio */}
            <div className="lg:col-span-3 space-y-5">
              {siteConfig.about.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-all duration-600 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 150 + 100}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Highlights */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                {siteConfig.about.highlights.map((item, index) => (
                  <HighlightCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

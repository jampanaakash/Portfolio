import React from "react";
import siteConfig from "../data/siteConfig";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`group relative p-6 lg:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Subtle hover gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-50/50 to-transparent dark:from-slate-800/30 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        {/* Project Header */}
        <div className="mb-5">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 font-heading group-hover:text-slate-700 dark:group-hover:text-slate-50 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-6">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-1.5 flex-shrink-0" />
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {highlight}
              </span>
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <ExternalLink size={14} />
              View Live
              <ArrowUpRight size={12} className="opacity-50" />
            </a>
          )}
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Github size={14} />
              View Code
              <ArrowUpRight size={12} className="opacity-50" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32 px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-3">
            Projects
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-50 font-heading">
            Things I've built
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {siteConfig.projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import React from "react";
import siteConfig from "../data/siteConfig";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Name */}
          <div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-lg font-semibold text-slate-900 dark:text-slate-100 font-heading"
            >
              {siteConfig.personal.firstName}
              <span className="text-slate-400 dark:text-slate-500">.</span>
            </a>
          </div>

          {/* Center - Nav */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right - Copyright */}
          <p className="text-sm text-slate-400 dark:text-slate-500 flex items-center gap-1">
            &copy; {currentYear} {siteConfig.personal.firstName}. Made with
            <Heart size={12} className="text-slate-400" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

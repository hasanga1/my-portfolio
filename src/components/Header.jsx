import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const SocialLink = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-500 hover:text-orange-500 transition-colors duration-200"
  >
    <Icon size={20} />
  </a>
);

export const Header = ({ details }) => {
  return (
    <header className="flex flex-col items-center text-center mb-16">
      {/* Photo Circle */}
      <div className="relative group">
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-800 group-hover:border-orange-500 transition-colors duration-300">
          {/* REPLACE THE SRC BELOW WITH YOUR ACTUAL PHOTO URL */}
          <img
            src="../../public/cv_3.png"
            alt={details.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <h1 className="text-3xl font-bold mt-6 mb-2 tracking-tight">
        {details.name}
      </h1>
      <p className="text-orange-600 dark:text-orange-500 font-medium mb-4">
        {details.role}
      </p>

      <div className="flex gap-4 mt-2">
        <SocialLink href={details.socials.github} icon={Github} />
        <SocialLink href={details.socials.linkedin} icon={Linkedin} />
        <SocialLink href={details.socials.email} icon={Mail} />
      </div>
    </header>
  );
};

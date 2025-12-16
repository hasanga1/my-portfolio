import React from 'react';
import { TechBadge } from './Layout';
import { ExternalLink } from 'lucide-react';

export const AboutSection = ({ text }) => (
  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
    {text}
  </p>
);

export const EducationItem = ({ edu }) => (
  <div className="mb-6 last:mb-0 border-l-2 border-slate-200 dark:border-slate-800 pl-4 hover:border-orange-500 transition-colors duration-300">
    <h3 className="font-semibold text-slate-900 dark:text-slate-100">{edu.school}</h3>
    <p className="text-sm text-slate-500 dark:text-slate-500 mb-1">{edu.degree}</p>
    <p className="text-xs text-orange-600 dark:text-orange-500 mb-2">{edu.year}</p>
    <p className="text-sm text-slate-600 dark:text-slate-400">{edu.description}</p>
  </div>
);

export const ExperienceItem = ({ job }) => (
  <div className="mb-8 group">
    <div className="flex justify-between items-baseline mb-1">
      <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-orange-500 transition-colors">
        {job.company}
      </h3>
      <span className="text-xs text-slate-500 font-mono">{job.year}</span>
    </div>
    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2 font-medium">{job.role}</p>
    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{job.description}</p>
    <div className="flex flex-wrap">
      {job.tech.map((t) => <TechBadge key={t} text={t} />)}
    </div>
  </div>
);

export const ProjectCard = ({ project }) => (
  <a 
    href={project.link} 
    className="block p-5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-sm bg-white dark:bg-slate-900/50 group"
  >
    <div className="flex justify-between items-start mb-2">
      <h3 className="font-semibold group-hover:text-orange-500 transition-colors">
        {project.title}
      </h3>
      <ExternalLink size={16} className="text-slate-400 group-hover:text-orange-500 transition-colors" />
    </div>
    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2">
        {project.tech.map(t => (
            <span key={t} className="text-xs text-slate-500 dark:text-slate-500 font-mono">#{t}</span>
        ))}
    </div>
  </a>
);
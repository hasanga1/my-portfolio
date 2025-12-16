import React from 'react';

// Wrapper for the whole page
export const PageWrapper = ({ children }) => (
  <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-orange-200 dark:selection:bg-orange-900">
    <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
      {children}
    </div>
  </div>
);

// Wrapper for individual sections (About, Projects, etc.)
export const Section = ({ title, children }) => (
  <section className="mb-16">
    <h2 className="text-xl font-bold mb-6 text-slate-800 dark:text-slate-200">
      {title}
    </h2>
    {children}
  </section>
);

// A reusable badge for skills/tech stack
export const TechBadge = ({ text }) => (
  <span className="inline-block bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-2 py-1 rounded-md mr-2 mt-2">
    {text}
  </span>
);
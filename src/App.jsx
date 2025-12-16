import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, GraduationCap, Briefcase, Code2 } from 'lucide-react';
import { personalDetails, education, experiences, projects } from './data';

// --- ANIMATION CONFIG ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15 } 
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

// --- COMPONENTS ---

const Badge = ({ text }) => (
  <span className="px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400 border border-orange-200 dark:border-orange-500/20">
    {text}
  </span>
);

const SectionTitle = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-orange-500">
      <Icon size={20} />
    </div>
    <h2 className="text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-wider">
      {title}
    </h2>
  </div>
);

const ExperienceCard = ({ data }) => (
  <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 last:border-0 pb-12">
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 ring-4 ring-white dark:ring-slate-950" />
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{data.company}</h3>
      <span className="text-sm font-mono text-slate-500 dark:text-slate-400">{data.year}</span>
    </div>
    <div className="text-orange-600 dark:text-orange-400 font-medium mb-3">{data.role}</div>
    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{data.description}</p>
    <div className="flex flex-wrap gap-2">
      {data.tech.map(t => <Badge key={t} text={t} />)}
    </div>
  </div>
);

const ProjectCard = ({ data }) => (
  <motion.a 
    variants={itemVariants}
    whileHover={{ y: -5 }}
    href={data.link}
    className="group block p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-orange-500 dark:hover:border-orange-500 shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
        {data.title}
      </h3>
      <ArrowUpRight size={18} className="text-slate-400 group-hover:text-orange-500 transition-colors" />
    </div>
    <p className="text-xs font-mono text-slate-400 mb-3">{data.year}</p>
    <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
      {data.description}
    </p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {data.tech.map(t => (
        <span key={t} className="text-xs font-mono text-slate-500 dark:text-slate-500">#{t}</span>
      ))}
    </div>
  </motion.a>
);

// --- MAIN LAYOUT ---

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-sans selection:bg-orange-200 dark:selection:bg-orange-900/30">
      
      <div className="lg:flex">
        {/* --- LEFT SIDEBAR (FIXED) --- */}
        <header className="lg:w-5/12 xl:w-4/12 lg:fixed lg:h-screen p-8 lg:p-16 flex flex-col justify-between bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 z-10">
          <div>
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800 mb-8"
            >
              {/* REPLACE WITH YOUR REAL PHOTO */}
              <img 
                src="../../public/cv_3.png" 
                alt="Hasanga" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
                HASANGA <br/> <span className="text-slate-400 dark:text-slate-600">RANASINGHE</span>
              </h1>
              <h2 className="text-lg text-orange-600 dark:text-orange-500 font-medium mb-6">
                {personalDetails.role}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm mb-8">
                {personalDetails.about}
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-4"
          >
             {/* Contact Info */}
             <div className="text-sm text-slate-500 dark:text-slate-500 font-mono">
                <p>{personalDetails.email}</p>
                <p>{personalDetails.phone}</p>
             </div>
             
             {/* Social Icons */}
             <div className="flex gap-4 mt-2">
                {personalDetails.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white transition-all duration-300"
                    target="_blank" rel="noreferrer"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
             </div>
          </motion.div>
        </header>

        {/* --- RIGHT CONTENT (SCROLLABLE) --- */}
        <main className="lg:w-7/12 xl:w-8/12 lg:ml-auto p-8 lg:p-20 bg-slate-50 dark:bg-slate-950">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* EDUCATION SECTION */}
            <motion.section variants={itemVariants} className="mb-20">
               <SectionTitle icon={GraduationCap} title="Education" />
               <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{education.school}</h3>
                  <p className="text-orange-600 dark:text-orange-500 font-medium">{education.degree}</p>
                  <p className="text-slate-400 text-sm font-mono mt-1">{education.year}</p>
               </div>
            </motion.section>

            {/* EXPERIENCE SECTION */}
            <motion.section variants={itemVariants} className="mb-20">
              <SectionTitle icon={Briefcase} title="Experience" />
              <div className="pl-2">
                {experiences.map((job, index) => (
                  <ExperienceCard key={index} data={job} />
                ))}
              </div>
            </motion.section>

            {/* PROJECTS GRID */}
            <motion.section variants={itemVariants}>
              <SectionTitle icon={Code2} title="Projects" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((proj, index) => (
                  <ProjectCard key={index} data={proj} />
                ))}
              </div>
            </motion.section>

            <footer className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 text-slate-400 text-sm text-center font-mono">
              <p>Designed & Engineered by Hasanga Ranasinghe</p>
            </footer>

          </motion.div>
        </main>
      </div>
    </div>
  );
}
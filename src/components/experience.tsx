'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Calendar, ChevronDown } from 'lucide-react';

interface ExperienceData {
  key: string;
  technologies?: string[];
}

const experienceData: ExperienceData[] = [
  {
    key: 'vermeg_backend',
    technologies: ['Java 11', 'Spring Boot', 'Apache Camel', 'QuickFIX/J', 'Microservices', 'AWS'],
  },
];

function ExperienceCard({
  expKey,
  technologies,
  index,
  isLast,
}: {
  expKey: string;
  technologies?: string[];
  index: number;
  isLast: boolean;
}) {
  const t = useTranslations('experience.jobs');
  const [isExpanded, setIsExpanded] = useState(index === 0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Get description array from translations based on job
  const descriptionCounts: Record<string, number> = {
    vermeg_backend: 8,
  };
  
  const count = descriptionCounts[expKey] || 0;
  const descriptions: string[] = [];
  for (let i = 0; i < count; i++) {
    descriptions.push(t(`${expKey}.description.${i}`));
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-10 pb-8 last:pb-0 overflow-visible"
    >
      {/* Timeline Line - connects to next card's dot */}
      {!isLast && (
        <div className="absolute left-[7px] top-[28px] -bottom-[28px] w-0.5 bg-day-muted/30 dark:bg-night-comment/30" />
      )}
      
      {/* Timeline Dot - aligned with card title */}
      <motion.div
        className="absolute left-0 top-5 w-4 h-4 rounded-full bg-day-accent dark:bg-night-cyan z-10 shadow-lg shadow-day-accent/30 dark:shadow-night-cyan/30"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
      >
        <div className="absolute inset-0 rounded-full bg-day-accent dark:bg-night-cyan animate-ping opacity-20" />
      </motion.div>

      {/* Card */}
      <motion.div
        className="bento-card cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ x: 5 }}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-day-text dark:text-night-text mb-1">
              {t(`${expKey}.title`)}
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className="flex items-center gap-1 text-day-accent dark:text-night-cyan font-medium">
                <Briefcase className="w-4 h-4" />
                {t(`${expKey}.company`)}
              </span>
              <span className="text-day-comment dark:text-night-comment">
                {t(`${expKey}.location`)}
              </span>
              <span className="flex items-center gap-1 text-day-comment dark:text-night-comment font-mono text-xs">
                <Calendar className="w-3 h-3" />
                {t(`${expKey}.period`)}
              </span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-day-comment dark:text-night-comment"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Expanded Content */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="mt-4 space-y-2">
            {descriptions.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-day-text/80 dark:text-night-text/80 text-sm"
              >
                <span className="text-day-accent dark:text-night-cyan mt-1">▹</span>
                {item}
              </li>
            ))}
          </ul>

          {technologies && (
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-mono bg-day-bg dark:bg-night-bg rounded text-day-muted dark:text-night-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Experience() {
  const t = useTranslations('experience');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 bg-day-bg-alt/50 dark:bg-night-bg-alt/50">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-day-accent dark:text-night-cyan font-mono">{t('sectionNumber')}.</span>
            <h2 className="text-3xl sm:text-4xl font-bold">{t('title')}</h2>
            <div className="flex-1 h-px bg-day-bg-highlight dark:bg-night-bg-highlight" />
          </div>

          {/* Timeline */}
          <div className="max-w-3xl">
            {experienceData.map((exp, index) => (
              <ExperienceCard
                key={exp.key}
                expKey={exp.key}
                technologies={exp.technologies}
                index={index}
                isLast={index === experienceData.length - 1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

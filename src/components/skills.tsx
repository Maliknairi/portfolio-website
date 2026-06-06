'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Server,
  Workflow,
  Cloud,
  BarChart3,
  Landmark,
  Languages,
  Brain,
} from 'lucide-react';

interface SkillCategory {
  icon: typeof Server;
  key: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    icon: Server,
    key: 'backend',
    skills: ['Java 11', 'Spring Boot', 'REST APIs', 'Hibernate', 'Microservices', 'Maven'],
    color: 'cyan',
  },
  {
    icon: Workflow,
    key: 'integration',
    skills: [
      'Apache Camel',
      'Enterprise Service Bus',
      'Enterprise Integration Patterns',
      'JMS',
      'ActiveMQ',
      'RabbitMQ',
      'AWS SQS',
      'AWS MQ',
      'QuickFIX/J',
    ],
    color: 'accent',
  },
  {
    icon: Cloud,
    key: 'cloud',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Git', 'Linux'],
    color: 'green',
  },
  {
    icon: BarChart3,
    key: 'data',
    skills: ['Power BI', 'Pentaho', 'ETL', 'BigQuery', 'Dataflow', 'SQL', 'PostgreSQL', 'MySQL'],
    color: 'orange',
  },
  {
    icon: Landmark,
    key: 'domain',
    skills: [
      'Assurance IARD',
      'Assurance Santé',
      'Souscription',
      'Tarification',
      'Gestion des contrats',
      'Collateral Management',
      'Custody',
      'Market Data Integration',
      'Financial Messaging',
      'FIX Protocol',
    ],
    color: 'pink',
  },
];

function SkillCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const t = useTranslations('skills');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const colorClasses: Record<string, string> = {
    cyan: 'text-day-cyan dark:text-night-cyan bg-day-cyan/10 dark:bg-night-cyan/10 border-day-cyan/20 dark:border-night-cyan/20',
    accent:
      'text-day-accent dark:text-night-accent bg-day-accent/10 dark:bg-night-accent/10 border-day-accent/20 dark:border-night-accent/20',
    green:
      'text-day-green dark:text-night-green bg-day-green/10 dark:bg-night-green/10 border-day-green/20 dark:border-night-green/20',
    orange:
      'text-day-orange dark:text-night-orange bg-day-orange/10 dark:bg-night-orange/10 border-day-orange/20 dark:border-night-orange/20',
    pink: 'text-day-pink dark:text-night-pink bg-day-pink/10 dark:bg-night-pink/10 border-day-pink/20 dark:border-night-pink/20',
    yellow:
      'text-day-yellow dark:text-night-yellow bg-day-yellow/10 dark:bg-night-yellow/10 border-day-yellow/20 dark:border-night-yellow/20',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bento-card group"
      whileHover={{ y: -5 }}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorClasses[category.color]}`}
      >
        <category.icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-day-text dark:text-night-text mb-3">
        {t(`categories.${category.key}`)}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-1 text-xs font-mono bg-day-bg dark:bg-night-bg rounded text-day-text/70 dark:text-night-text/70 transition-colors group-hover:text-day-accent dark:group-hover:text-night-cyan"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const t = useTranslations('skills');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const languages = [
    { key: 'arabic', percentage: 100 },
    { key: 'english', percentage: 80 },
    { key: 'french', percentage: 80 },
  ];

  return (
    <section id="skills" className="py-24 bg-day-bg-alt/50 dark:bg-night-bg-alt/50">
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

          {/* Technical Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <SkillCard key={category.key} category={category} index={index} />
            ))}
          </div>

          {/* Bottom Row: Soft Skills + Languages */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bento-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-day-accent-alt dark:text-night-accent" />
                <h3 className="text-lg font-bold text-day-text dark:text-night-text">
                  {t('softSkills.title')}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
                  try {
                    const skill = t(`softSkills.items.${i}`);
                    if (skill && !skill.includes('items')) {
                      return (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-sm bg-day-accent-alt/10 dark:bg-night-accent/10 border border-day-accent-alt/20 dark:border-night-accent/20 rounded-full text-day-accent-alt dark:text-night-accent"
                        >
                          {skill}
                        </span>
                      );
                    }
                    return null;
                  } catch {
                    return null;
                  }
                })}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bento-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <Languages className="w-6 h-6 text-day-accent dark:text-night-cyan" />
                <h3 className="text-lg font-bold text-day-text dark:text-night-text">
                  {t('languages.title')}
                </h3>
              </div>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.key}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-day-text dark:text-night-text">
                        {t(`languages.${lang.key}`)}
                      </span>
                      <span className="text-xs text-day-comment dark:text-night-comment">
                        {t(`languages.${lang.key}Level`)}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-day-bg-highlight dark:bg-night-bg-highlight overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-day-accent to-day-cyan dark:from-night-cyan dark:to-night-accent"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${lang.percentage}%` } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

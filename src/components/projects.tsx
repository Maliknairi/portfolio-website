'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Star, Folder, ArrowRight } from 'lucide-react';

interface ProjectData {
  key: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  detailPage?: string;
}

const projectsData: ProjectData[] = [
  {
    key: 'assuranceIntegration',
    technologies: ['Java', 'Spring Boot', 'Apache Camel', 'REST APIs', 'Docker', 'Kubernetes', 'AWS'],
    featured: true,
  },
  {
    key: 'servicesBroker',
    technologies: ['Java', 'Apache Camel', 'JMS', 'ActiveMQ', 'RabbitMQ'],
  },
  {
    key: 'custodianMarketData',
    technologies: ['Java', 'QuickFIX/J', 'Apache Camel', 'FIX Protocol'],
  },
  {
    key: 'dataLake',
    technologies: ['JMS', 'ActiveMQ', 'Java', 'Apache Camel'],
  },
  {
    key: 'isabelConnector',
    technologies: ['Java', 'Apache Camel', 'Scheduling', 'Banking Integration'],
  },
  {
    key: 'pentahoEtl',
    technologies: ['Pentaho', 'ETL', 'SQL', 'Java'],
  },
  {
    key: 'formulaStudent',
    technologies: ['Power BI', 'Data Analytics', 'Data Visualization'],
    image: '/images/projects/formula1/race-pulse-2.png',
  },
  {
    key: 'formula1',
    technologies: ['Power BI', 'Data Modeling', 'Data Visualization'],
    image: '/images/projects/formula1/race-pulse.png',
  },
  {
    key: 'aiPlatform',
    technologies: ['Generative AI', 'Java', 'AWS', 'Enterprise Integration'],
  },
];

function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
  const t = useTranslations('projects');
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    if (project.detailPage) {
      router.push(project.detailPage);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group ${project.featured ? 'md:col-span-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`bento-card h-full relative overflow-hidden ${project.detailPage ? 'cursor-pointer' : ''}`}
        whileHover={{ y: -5 }}
        onClick={handleCardClick}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-day-accent/10 dark:bg-night-cyan/10 rounded-full text-day-accent dark:text-night-cyan text-xs font-mono z-10">
            <Star className="w-3 h-3" />
            {t('featured')}
          </div>
        )}

        {/* Project Image */}
        <div className="relative mb-4 rounded-lg overflow-hidden bg-day-bg-highlight dark:bg-night-bg-highlight aspect-video">
          {project.image ? (
            <img
              src={project.image}
              alt={t(`items.${project.key}.title`)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Folder className="w-12 h-12 mx-auto mb-2 text-day-accent/40 dark:text-night-cyan/40" />
                <p className="text-xs text-day-comment dark:text-night-comment font-mono">
                  {t('screenshotPlaceholder')}
                </p>
              </div>
            </div>
          )}
          
          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-day-accent/80 dark:from-night-cyan/80 to-transparent flex items-end justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex gap-3">
              {project.detailPage && (
                <span className="px-4 py-2 rounded-full bg-white/90 text-day-accent font-medium text-sm flex items-center gap-2">
                  {t('viewDetails')}
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
              {project.liveUrl && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                  }}
                  className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-day-accent hover:bg-white transition-colors"
                  aria-label="View live site"
                >
                  <ExternalLink className="w-5 h-5" />
                </button>
              )}
              {project.githubUrl && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                  }}
                  className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-day-accent hover:bg-white transition-colors"
                  aria-label="View source code"
                >
                  <Github className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold text-day-text dark:text-night-text group-hover:text-day-accent dark:group-hover:text-night-cyan transition-colors">
              {t(`items.${project.key}.title`)}
            </h3>
            <span className="text-xs font-mono text-day-comment dark:text-night-comment whitespace-nowrap">
              {t(`items.${project.key}.period`)}
            </span>
          </div>
          
          <p className="text-sm text-day-text/70 dark:text-night-text/70 mb-4 leading-relaxed">
            {t(`items.${project.key}.description`)}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-mono bg-day-bg dark:bg-night-bg rounded text-day-muted dark:text-night-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links for non-hovered state */}
        <div className="mt-4 flex gap-4">
          {project.detailPage && (
            <span className="flex items-center gap-1 text-sm text-day-accent dark:text-night-cyan font-medium">
              {t('viewDetails')}
              <ArrowRight className="w-4 h-4" />
            </span>
          )}
          {project.liveUrl && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
              }}
              className="flex items-center gap-1 text-sm text-day-accent dark:text-night-cyan hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              {t('viewLive')}
            </button>
          )}
          {project.githubUrl && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
              }}
              className="flex items-center gap-1 text-sm text-day-accent dark:text-night-cyan hover:underline"
            >
              <Github className="w-4 h-4" />
              {t('viewCode')}
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const t = useTranslations('projects');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24">
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

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.key} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

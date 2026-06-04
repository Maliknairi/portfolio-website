'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-day-bg-highlight dark:border-night-bg-highlight">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-day-comment dark:text-night-comment">
            <motion.a
              href="#"
              className="text-lg font-bold font-mono"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-day-accent dark:text-night-cyan">{'<'}</span>
              <span className="text-day-text dark:text-night-text">KK</span>
              <span className="text-day-accent dark:text-night-cyan">{'/>'}</span>
            </motion.a>
            <span className="hidden sm:inline">•</span>
            <span>{t('copyright', { year: currentYear })}</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/malik-nairi', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/malik-nairi-388129172', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:nairimalek10@gmail.com', label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-full bg-day-bg-alt dark:bg-night-bg-alt border border-day-bg-highlight dark:border-night-bg-highlight flex items-center justify-center text-day-comment dark:text-night-comment hover:text-day-accent dark:hover:text-night-cyan hover:border-day-accent dark:hover:border-night-cyan transition-all"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Built with */}
        <motion.div
          className="mt-6 text-center text-xs text-day-comment dark:text-night-comment"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span>{t('builtWith')} </span>
          <Heart className="w-3 h-3 inline text-day-red dark:text-night-red" />
          <span> {t('using')} </span>
          <span className="text-day-accent dark:text-night-cyan">Next.js</span>
          <span>, </span>
          <span className="text-day-accent dark:text-night-cyan">Tailwind CSS</span>
          <span> & </span>
          <span className="text-day-accent dark:text-night-cyan">Framer Motion</span>
        </motion.div>
      </div>
    </footer>
  );
}

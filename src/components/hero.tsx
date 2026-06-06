'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-day-accent/20 dark:bg-night-cyan/20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-day-accent-alt/20 dark:bg-night-accent/20 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="section-container py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-day-bg-alt dark:bg-night-bg-alt border border-day-bg-highlight dark:border-night-bg-highlight text-sm font-mono">
              <span className="w-2 h-2 rounded-full bg-day-green dark:bg-night-green animate-pulse" />
              {t('available')}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4"
          >
            <span className="text-day-text dark:text-night-text">Malik </span>
            <span className="text-gradient">NAIRI</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl text-day-text/80 dark:text-night-text/80 font-mono">
              <span className="text-day-accent dark:text-night-cyan">{'>'}</span>{' '}
              {t('title')}{' '}
              <span className="text-day-accent-alt dark:text-night-accent">{t('titleSeparator')}</span>{' '}
              {t('subtitle')}
            </h2>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-day-comment dark:text-night-comment mb-8"
          >
            <MapPin className="w-4 h-4" />
            <span>{t('location')}</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-day-text/70 dark:text-night-text/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t.rich('description', {
              years: (chunks) => (
                <span className="text-day-accent dark:text-night-cyan font-medium">{chunks}</span>
              ),
            })}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#contact"
              className="px-8 py-3 rounded-full bg-day-accent dark:bg-night-cyan text-white dark:text-night-bg font-medium transition-all hover:shadow-xl hover:shadow-day-accent/25 dark:hover:shadow-night-cyan/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('cta.contact')}
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-3 rounded-full border border-day-accent dark:border-night-cyan text-day-accent dark:text-night-cyan font-medium hover:bg-day-accent/10 dark:hover:bg-night-cyan/10 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('cta.projects')}
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: Linkedin, href: 'https://linkedin.com/in/malik-nairi-388129172', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:nairimalek10@gmail.com', label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-12 h-12 rounded-full bg-day-bg-alt dark:bg-night-bg-alt border border-day-bg-highlight dark:border-night-bg-highlight flex items-center justify-center text-day-text/70 dark:text-night-text/70 hover:text-day-accent dark:hover:text-night-cyan hover:border-day-accent dark:hover:border-night-cyan transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-day-comment dark:text-night-comment hover:text-day-accent dark:hover:text-night-cyan transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            aria-label="Scroll down"
          >
            <span className="text-xs font-mono">{t('scroll')}</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

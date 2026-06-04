'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check } from 'lucide-react';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={handleCopy}
      className="p-2 rounded-lg bg-day-bg dark:bg-night-bg hover:bg-day-accent/10 dark:hover:bg-night-cyan/10 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
    >
      {copied ? (
        <Check className="w-4 h-4 text-day-green dark:text-night-green" />
      ) : (
        <Copy className="w-4 h-4 text-day-comment dark:text-night-comment" />
      )}
    </motion.button>
  );
}

export function Contact() {
  const t = useTranslations('contact');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: Mail,
      labelKey: 'email',
      value: 'nairimalek10@gmail.com',
      href: 'mailto:nairimalek10@gmail.com',
      copyable: true,
    },
    {
      icon: Phone,
      labelKey: 'phone',
      value: '+216 24637426',
      href: 'tel:+21624637426',
      copyable: true,
    },
    {
      icon: MapPin,
      labelKey: 'location',
      value: 'Tunis, Tunisia',
      href: 'https://maps.google.com/?q=Tunis,Tunisia',
      copyable: false,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/malik-nairi-388129172',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/malik-nairi',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-day-bg-alt/50 dark:bg-night-bg-alt/50">
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

          <div className="max-w-4xl mx-auto">
            {/* Intro Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-day-text dark:text-night-text mb-4">
                {t('subtitle')}
              </h3>
              <p className="text-day-text/70 dark:text-night-text/70 max-w-2xl mx-auto">
                {t('description')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info Cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-4"
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.labelKey}
                    className="bento-card group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-day-accent/10 dark:bg-night-cyan/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-day-accent dark:text-night-cyan" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-day-comment dark:text-night-comment font-mono mb-1">
                          {t(info.labelKey)}
                        </p>
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-medium text-day-text dark:text-night-text group-hover:text-day-accent dark:group-hover:text-night-cyan transition-colors truncate block"
                        >
                          {info.value}
                        </a>
                      </div>
                      {info.copyable && <CopyButton text={info.value} />}
                    </div>
                  </motion.div>
                ))}

                {/* Social Links */}
                <div className="pt-4">
                  <p className="text-sm font-mono text-day-comment dark:text-night-comment mb-3">
                    {t('findOnline')}
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-day-bg dark:bg-night-bg border border-day-bg-highlight dark:border-night-bg-highlight hover:border-day-accent dark:hover:border-night-cyan transition-colors"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{social.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bento-card flex flex-col justify-center text-center"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-day-accent to-day-accent-alt dark:from-night-cyan dark:to-night-accent p-0.5">
                    <div className="w-full h-full rounded-full bg-day-bg-alt dark:bg-night-bg-alt flex items-center justify-center">
                      <Send className="w-6 h-6 text-day-accent dark:text-night-cyan" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-day-text dark:text-night-text mb-2">
                    {t('readyTitle')}
                  </h4>
                  <p className="text-sm text-day-text/70 dark:text-night-text/70">
                    {t('readyDescription')}
                  </p>
                </div>

                <motion.a
                  href="mailto:nairimalek10@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-day-accent dark:bg-night-cyan text-white dark:text-night-bg font-medium transition-all hover:shadow-xl hover:shadow-day-accent/25 dark:hover:shadow-night-cyan/25"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  {t('sendEmail')}
                </motion.a>

                <p className="mt-4 text-xs text-day-comment dark:text-night-comment">
                  {t('orReachOut')}{' '}
                  <a
                    href="https://linkedin.com/in/malik-nairi-388129172"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-day-accent dark:text-night-cyan hover:underline"
                  >
                    LinkedIn
                  </a>
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

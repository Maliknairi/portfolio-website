'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { LanguageSwitcher } from './language-switcher';

export function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // English uses '/' (no prefix), other locales use '/{locale}/'
  const isHomePage = pathname === '/' || pathname === `/${locale}` || pathname === `/${locale}/`;

  // On homepage: just use hash. On other pages: full path with hash.
  // For default locale (en), href to '/' instead of '/en/'
  const homeHref = locale === 'en' ? '/' : `/${locale}/`;
  const getHref = (anchor: string) => isHomePage ? `#${anchor}` : `${homeHref}#${anchor}`;

  const navItems = [
    { name: t('about'), href: getHref('about') },
    { name: t('experience'), href: getHref('experience') },
    { name: t('projects'), href: getHref('projects') },
    { name: t('skills'), href: getHref('skills') },
    { name: t('contact'), href: getHref('contact') },
  ];

  // Get CV filename based on locale
  const cvFilename = locale === 'fr' ? '/CV-Malik-NAIRI-FR.pdf' : '/CV-Malik-NAIRI-EN.pdf';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-day-bg/80 dark:bg-night-bg/80 backdrop-blur-lg shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <nav className="section-container py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href={isHomePage ? '#' : homeHref}
              className="text-xl font-bold font-mono"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-day-accent dark:text-night-cyan">{'<'}</span>
              <span className="text-day-text dark:text-night-text">KK</span>
              <span className="text-day-accent dark:text-night-cyan">{'/>'}</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-day-text/80 dark:text-night-text/80 hover:text-day-accent dark:hover:text-night-cyan transition-colors relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-day-accent dark:bg-night-cyan transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <motion.a
                href={cvFilename}
                download
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-day-accent dark:bg-night-cyan text-white dark:text-night-bg font-medium text-sm transition-all hover:shadow-lg hover:shadow-day-accent/25 dark:hover:shadow-night-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                <span>{t('cv')}</span>
              </motion.a>

              <LanguageSwitcher />
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center"
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-day-bg dark:bg-night-bg pt-20 md:hidden"
          >
            <nav className="section-container py-8">
              <div className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-medium text-day-text dark:text-night-text hover:text-day-accent dark:hover:text-night-cyan transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-day-accent dark:text-night-cyan font-mono mr-2">
                      0{index + 1}.
                    </span>
                    {item.name}
                  </motion.a>
                ))}
                <motion.a
                  href={cvFilename}
                  download
                  className="flex items-center gap-2 mt-4 px-6 py-3 rounded-full bg-day-accent dark:bg-night-cyan text-white dark:text-night-bg font-medium w-fit"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <Download className="w-5 h-5" />
                  <span>{t('cv')}</span>
                </motion.a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

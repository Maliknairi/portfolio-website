import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { locales, type Locale } from '@/i18n/config';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      'Backend Engineer',
      'Integration Engineer',
      'Java Developer',
      'TypeScript',
      'Microservices',
      'Tunisia',
      'Software Engineer',
      'Project Management',
    ],
    authors: [{ name: 'Malik NAIRI' }],
    creator: 'Malik NAIRI',
    openGraph: {
      type: 'website',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      url: 'https://malik-nairi.dev',
      title: t('title'),
      description: t('description'),
      siteName: 'Malik NAIRI Portfolio',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Navigation />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import { ProjectDetail } from '@/components/project-detail';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'projects.items.banking' });
  
  return {
    title: `${t('title')} | Malik NAIRI`,
    description: t('description'),
  };
}

export default function BankingProjectPage() {
  const images = [
    { src: 'banking-dashboard.png', alt: 'Banking Dashboard', caption: 'Main account dashboard' },
    { src: 'banking-transactions.png', alt: 'Banking Transactions', caption: 'Transaction history view' },
    { src: 'banking-transfers.png', alt: 'Banking Transfers', caption: 'Money transfer interface' },
    { src: 'banking-mobile.png', alt: 'Banking Mobile', caption: 'Responsive mobile view' },
  ];

  const technologies = [
    'Angular 16',
    'TypeScript',
    'RxJS',
    'NgRx',
    'Jest',
    'Cypress',
    'SASS',
    'CSS Variables',
  ];

  return (
    <ProjectDetail
      projectKey="banking"
      images={images}
      technologies={technologies}
    />
  );
}

import { ProjectDetail } from '@/components/project-detail';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'projects.items.lowCode' });
  
  return {
    title: `${t('title')} | Malik NAIRI`,
    description: t('description'),
  };
}

export default function LowCodeProjectPage() {
  const images = [
    { src: '/images/projects/low-code/site_mockup.png', alt: 'Platform Overview', caption: 'Low-code platform overview' },
    { src: '/images/projects/low-code/home-page.png', alt: 'Home Page', caption: 'Main dashboard with widget library' },
    { src: '/images/projects/low-code/frontend-designer.png', alt: 'Frontend Designer', caption: 'Visual drag-and-drop designer' },
    { src: '/images/projects/low-code/coding-section.png', alt: 'Coding Section', caption: 'Integrated code editor' },
    { src: '/images/projects/low-code/bpmn-section.png', alt: 'BPMN Designer', caption: 'Business process modeling' },
    { src: '/images/projects/low-code/uml-section.png', alt: 'UML Designer', caption: 'UML diagram designer' },
    { src: '/images/projects/low-code/run-section-with-logs.png', alt: 'Run Section', caption: 'Application runner with logs' },
    { src: '/images/projects/low-code/marketplace.png', alt: 'Marketplace', caption: 'Component marketplace' },
    { src: '/images/projects/low-code/generated-app-dashboard.png', alt: 'Generated App Dashboard', caption: 'Example generated application - Dashboard' },
    { src: '/images/projects/low-code/generated-app-details.png', alt: 'Generated App Details', caption: 'Example generated application - Details view' },
    { src: '/images/projects/low-code/component-library-storybook.png', alt: 'Component Library Storybook', caption: 'Storybook documentation for 75+ widgets' },
  ];

  const technologies = [
    'Angular',
    'TypeScript',
    'RxJS',
    'NgRx',
    'Signals',
    'PrimeNG',
    'NX',
    'SASS',
    'Storybook',
    'Jest',
    'Cypress',
    'GitLab CI/CD',
    'Docker',
  ];

  return (
    <ProjectDetail
      projectKey="lowCode"
      images={images}
      technologies={technologies}
    />
  );
}

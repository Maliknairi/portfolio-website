import { ProjectDetail } from '@/components/project-detail';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'projects.items.pijiz' });
  
  return {
    title: `${t('title')} | Malik NAIRI`,
    description: t('description'),
  };
}

export default function PijizProjectPage() {
  const images = [
    { src: '/images/projects/pijiz/mock_website.png', alt: 'Pijiz Homepage', caption: 'Homepage with featured products' },
    { src: 'pijiz-product.png', alt: 'Pijiz Product Page', caption: 'Product detail page' },
    { src: 'pijiz-cart.png', alt: 'Pijiz Cart', caption: 'Shopping cart experience' },
    { src: 'pijiz-checkout.png', alt: 'Pijiz Checkout', caption: 'Streamlined checkout flow' },
  ];

  const technologies = [
    'Shopify',
    'Liquid',
    'JavaScript',
    'CSS3',
    'Webhooks',
    'Google Search Console',
  ];

  return (
    <ProjectDetail
      projectKey="pijiz"
      images={images}
      technologies={technologies}
      liveUrl="https://pijiz.com"
    />
  );
}

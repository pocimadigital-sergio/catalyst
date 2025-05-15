import { setRequestLocale } from 'next-intl/server';
import { PropsWithChildren } from 'react';

import { Footer } from '~/components/footer';
import { Header } from '~/components/header';
import { PromoMarquee } from '~/components/custom/marquee';

interface Props extends PropsWithChildren {
  params: Promise<{ locale: string }>;
}

export default async function DefaultLayout({ params, children }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);
  console.log('Mensaje Custom enviado desde el cuerpo principal');
  console.log('children', children);

  return (
    <>
      <Header />

      <main>
        <PromoMarquee></PromoMarquee>
        {children}
        </main>

      <Footer />
    </>
  );
}

export const experimental_ppr = true;

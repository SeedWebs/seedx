import Image from 'next/image';
import Link from 'next/link';
import { getHome } from '@/app/lib/api';
import { Button } from '@/app/components/ui/button';
import {
  IC_nextjs,
  IC_tailwindcss,
  IC_shadcn,
  IC_directus,
  IC_seedwebs,
} from '@/app/lib/icons';
import Features from '@/app/components/Features';
import LatestBlog from '@/app/components/LatestBlog';

export default async function Home() {
  const home = await getHome();
  const target = home.cta_url.startsWith('http') ? '_blank' : '_self';

  return (
    <main className='min-h-screen bg-white dark:bg-slate-950'>
      <div className='px-5 pb-8 md:pb-16 md:px-6 pt-[90px] md:pt-[120px] lg:pt-[150px] bg-cover bg-fixed dark:bg-slate-800 dark:bg-blend-multiply bg-[url("/img/bg.webp")]'>
        <div className='mx-auto max-w-3xl md:text-center'>
          <div
            className='prose-lg md:prose-xl prose-h1:mb-5 prose-h1:md:mb-9 prose-h1:leading-tight prose-p:my-5'
            dangerouslySetInnerHTML={{ __html: home.introduction }}
          />
          {home.cta_label && (
            <Button asChild>
              <Link
                href={home.cta_url}
                target={target}
                className='py-4 gap-1.5 text-base mt-3'
              >
                {home.cta_svg_icon && (
                  <span
                    dangerouslySetInnerHTML={{ __html: home.cta_svg_icon }}
                  />
                )}
                {home.cta_label}
              </Link>
            </Button>
          )}
        </div>
        <div className='md:h-28 lg:h-44' />
      </div>
      <div className='md:px-6'>
        <div className='relative md:-mt-32 lg:-mt-48 aspect-[2/1] overflow-hidden max-w-4xl mx-auto md:max-w-5xl md:aspect-[5/2] md:rounded-xl md:shadow-lg '>
          <Image
            src='/img/banner.jpg'
            alt='Banner'
            fill={true}
            className='object-cover'
          />
        </div>
      </div>
      <div className='max-w-4xl px-6 mx-auto text-gray-600 dark:text-gray-400'>
        <div className='py-14 mx-auto md:max-w-5xl flex flex-wrap md:flex-nowrap items-center justify-center gap-8 lg:gap-16'>
          <IC_nextjs />
          <IC_tailwindcss />
          <IC_shadcn />
          <IC_directus />
          <IC_seedwebs />
        </div>
      </div>
      <Features />
      <LatestBlog />
    </main>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { getHome } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Nextjs, Tailwindcss, Shadcn, Directus, Seedwebs } from '@/lib/logo';
export default async function Hero() {
  const home = await getHome();
  const target = home.cta_url.startsWith('http') ? '_blank' : '_self';
  return (
    <>
      <div className='bg-[url("/img/bg.webp")] bg-cover bg-fixed px-5 pb-8 pt-[90px] dark:bg-slate-800 dark:bg-blend-multiply md:px-6 md:pb-16 md:pt-[120px] lg:pt-[150px]'>
        <div className='mx-auto max-w-3xl md:text-center'>
          <div
            className='prose-lg md:prose-xl prose-h1:mb-5 prose-h1:leading-tight prose-p:my-5 prose-h1:md:mb-9'
            dangerouslySetInnerHTML={{ __html: home.introduction }}
          />
          {home.cta_label && (
            <Button asChild>
              <Link
                href={home.cta_url}
                target={target}
                className='mt-3 gap-1.5 py-4 text-base'
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
        <div className='relative mx-auto aspect-[2/1] max-w-4xl overflow-hidden md:-mt-32 md:aspect-[5/2] md:max-w-5xl md:rounded-xl md:shadow-lg lg:-mt-48 '>
          <Image
            src='/img/banner.jpg'
            alt='Banner'
            fill={true}
            className='object-cover'
          />
        </div>
      </div>
      <div className='mx-auto max-w-4xl px-6 text-gray-600 dark:text-gray-400'>
        <div className='mx-auto flex flex-wrap items-center justify-center gap-8 py-14 md:max-w-5xl md:flex-nowrap lg:gap-16'>
          <Nextjs />
          <Tailwindcss />
          <Shadcn />
          <Directus />
          <Seedwebs />
        </div>
      </div>
    </>
  );
}

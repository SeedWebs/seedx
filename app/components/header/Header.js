import Link from 'next/link';
import Image from 'next/image';
import Nav from './Nav';
import ModeToggle from './ModeToggle';
import { Menu, X } from 'lucide-react';
import { getSetting } from '@/lib/api';

export default async function Header() {
  const site = await getSetting();
  const nav = [
    { name: 'Example', link: '/example' },
    { name: 'Blog', link: '/blog' },
    { name: 'About', link: '/about' },
  ];

  return (
    <header className='fixed top-0 z-50 flex w-full flex-wrap md:top-2 md:flex-nowrap md:justify-start md:px-4'>
      <nav
        className='relative mx-2 mt-3 w-full rounded-3xl border border-white bg-white/85 px-5 shadow-md shadow-slate-600/5 ring-1 ring-slate-600/5 backdrop-blur dark:border-slate-700 dark:bg-slate-700/80 md:mx-auto md:flex md:max-w-max md:items-center md:justify-between md:rounded-full  md:py-0'
        aria-label='Global'
      >
        <div className='flex min-h-11 shrink-0 items-center justify-between'>
          <Link
            className='flex shrink-0 items-center gap-2 font-bold dark:text-white md:text-xl'
            href='/'
            aria-label='Brand'
          >
            <Image
              src='/img/logo.svg'
              alt='Logo'
              width={24}
              height={24}
              className='dark:hidden'
            />
            <Image
              src='/img/logo_dark.svg'
              alt='Logo (Dark Mode)'
              width={24}
              height={24}
              className='hidden dark:block'
            />
            {site.title}
          </Link>
          <button
            id='navtoggle'
            className='relative h-6 w-6 md:hidden'
            title='Toggle Menu'
          >
            <Menu className='i-open pointer-events-none absolute  top-0 transition-all' />
            <X className='i-close pointer-events-none absolute top-0 opacity-0 transition-all' />
          </button>
        </div>
        <div
          id='nav'
          className='duration-600 max-h-0 grow basis-full overflow-hidden transition-all md:block md:max-h-none'
        >
          <div className='mb-4 mt-2 flex flex-col gap-x-0 gap-y-4 md:my-0 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-7 md:gap-y-0 md:pl-8 '>
            <Nav nav={nav} />
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}

import Link from 'next/link';
import Nav from './Nav';
import ModeToggle from './ModeToggle';
import { Menu, X } from 'lucide-react';
import { getSetting } from '../lib/api';

export default async function Header() {
  const site = await getSetting();
  const logo_light = site.logo_light
    ? process.env.API_DOMAIN + '/assets/' + site.logo_light
    : null;
  const logo_dark = site.logo_dark
    ? process.env.API_DOMAIN + '/assets/' + site.logo_dark
    : null;
  const nav = [
    { name: 'Example', link: '/example' },
    { name: 'Blog', link: '/blog' },
    { name: 'About', link: '/about' },
  ];

  return (
    <header className='fixed top-0 z-50 flex w-full flex-wrap md:top-2 md:flex-nowrap md:justify-start md:px-4'>
      <nav
        className='relative mx-2 mt-3 min-h-11 w-full rounded-[22px] bg-white/90 px-5 shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 backdrop-blur dark:bg-slate-700/80 md:mx-auto md:flex md:max-w-max md:items-center md:justify-between md:rounded-full md:px-6 md:py-0'
        aria-label='Global'
      >
        <div className='flex min-h-11 items-center justify-between'>
          <Link
            className='flex items-center gap-2 font-bold dark:text-white md:text-xl'
            href='/'
            aria-label='Brand'
          >
            {logo_light && (
              <img
                src={logo_light}
                width={24}
                height={24}
                alt={`${site.title} Logo`}
                className='-ml-1 dark:hidden'
              />
            )}
            {logo_dark && (
              <img
                src={logo_dark}
                width={24}
                height={24}
                alt={`${site.title} Logo - Dark Mode`}
                className='-ml-1 hidden dark:inline-flex'
              />
            )}
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

import Link from 'next/link';
import ModeToggle from '@/app/components/ModeToggle';
import { Menu, X } from 'lucide-react';
import { getSetting } from '@/app/lib/api';

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
    <header className='fixed top-0 flex flex-wrap md:justify-start md:flex-nowrap md:top-2 md:px-4 z-50 w-full'>
      <nav
        className='relative md:max-w-max min-h-11 w-full bg-white/90 rounded-[22px] mt-3 mx-2 px-5 shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 backdrop-blur md:flex md:items-center md:justify-between md:rounded-full md:py-0 md:px-6 md:mx-auto dark:bg-slate-700/80'
        aria-label='Global'
      >
        <div className='flex items-center justify-between min-h-11'>
          <Link
            className='flex items-center gap-2  md:text-xl font-medium dark:text-white'
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
                alt={`${site.title} Logo`}
                className='-ml-1 hidden dark:inline-flex'
              />
            )}
            {site.title}
          </Link>
          <button
            id='navtoggle'
            className='md:hidden relative w-6 h-6'
            title='Toggle Menu'
          >
            <Menu className='absolute transition-all top-0  pointer-events-none i-open' />
            <X className='absolute transition-all top-0 pointer-events-none i-close opacity-0' />
          </button>
        </div>
        <div
          id='nav'
          className='max-h-0 md:max-h-none overflow-hidden transition-all duration-600 basis-full grow md:block'
        >
          <div className='flex flex-col gap-y-4 gap-x-0 mt-2 mb-4 md:my-0 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-8 '>
            {nav.map((item) => (
              <Link
                key={item.name}
                className='font-medium text-gray-500 hover:text-gray-400 md:py-4 dark:text-gray-400 dark:hover:text-gray-500'
                href={item.link}
              >
                {item.name}
              </Link>
            ))}
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}

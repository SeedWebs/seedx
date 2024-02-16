import Link from 'next/link';

export default function Header() {
  return (
    <footer className='mt-auto flex min-h-12 items-center justify-center border-t border-slate-100/80 bg-slate-200 text-xs uppercase text-slate-600 dark:border-slate-800/80 dark:bg-gray-900 dark:text-slate-400'>
      <p>
        ©2024{' '}
        <Link href='https://seedwebs.com/' target='_blank'>
          Seed Webs Co., Ltd.
        </Link>
      </p>
    </footer>
  );
}

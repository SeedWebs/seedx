'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav({ nav }) {
  const path = usePathname();
  return (
    <>
      {nav.map((item, index) => (
        <Link
          key={index}
          className='font-medium text-gray-500 transition hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 md:py-4'
          href={item.link}
        >
          <span
            className={
              path.startsWith(item.link)
                ? 'font-bold text-gray-600 dark:text-gray-300'
                : ''
            }
          >
            {item.name}
          </span>
        </Link>
      ))}
    </>
  );
}

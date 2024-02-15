'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';

export default function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className='inline-flex items-center'>
      <Button
        variant='outline'
        size='icon'
        onClick={() => setTheme('dark')}
        className='rounded-full bg-transparent hover:bg-white dark:hidden md:border-none'
      >
        <Sun className='h-[1.2rem] w-[1.2rem]' />
        <span className='sr-only'>Switch to Dark Mode</span>
      </Button>
      <Button
        variant='ghost'
        size='icon'
        onClick={() => setTheme('light')}
        className='hidden rounded-full border border-slate-500 dark:inline-flex dark:hover:bg-slate-800 lg:border-none'
      >
        <Moon className='h-[1.2rem] w-[1.2rem]' />
        <span className='sr-only'>Switch to Light Mode</span>
      </Button>
    </div>
  );
}

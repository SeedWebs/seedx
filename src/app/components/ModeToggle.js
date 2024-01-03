'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/app/components/ui/button';

export default function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className='inline-flex items-center'>
      <Button
        variant='outline'
        size='icon'
        onClick={() => setTheme('dark')}
        className='rounded-full dark:hidden md:border-none'
      >
        <Sun className='h-[1.2rem] w-[1.2rem]' />
        <span className='sr-only'>Switch to Dark Mode</span>
      </Button>
      <Button
        variant='ghost'
        size='icon'
        onClick={() => setTheme('light')}
        className='rounded-full hidden dark:inline-flex dark:hover:bg-slate-900'
      >
        <Moon className='h-[1.2rem] w-[1.2rem]' />
        <span className='sr-only'>Switch to Light Mode</span>
      </Button>
    </div>
  );
}

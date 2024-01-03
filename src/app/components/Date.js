'use client';
import TimeAgo from 'react-timeago';
import { cn } from '@/app/lib/utils';
export default function Date({ datetime, className }) {
  return (
    <TimeAgo
      className={cn('text-sm text-slate-500 dark:text-slate-400', className)}
      date={datetime}
    />
  );
}

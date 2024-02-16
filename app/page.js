import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import LatestBlog from '@/components/home/LatestBlog';

export default async function Home() {
  return (
    <main className='bg-white dark:bg-slate-950'>
      <Hero />
      <Features />
      <LatestBlog />
    </main>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import Card from '@/app/components/Card';
import { getPosts } from '@/app/lib/api';
export default async function LatestBlog() {
  const posts = await getPosts(3);

  return (
    <div className='bg-gradient-to-br from-slate-50 to-slate-200 px-5 py-8 dark:from-slate-900 dark:to-slate-950 md:py-16 lg:px-8'>
      <div className='mx-auto max-w-2xl lg:text-center'>
        <h2 className='mb-4 text-sm font-bold tracking-wider text-sky-700'>
          BLOG
        </h2>
        <p className='mb-6 text-3xl  font-bold sm:text-4xl'>Latest Updates</p>
        <p className='mb-7 text-lg leading-8 text-slate-600 dark:text-slate-400 md:mb-12'>
          Updates, ideas, and inspiration from our team, community, and
          partners.
        </p>
      </div>
      <div className='mx-auto grid  max-w-[1120px] gap-4 md:grid-cols-3 md:gap-5'>
        {posts.length > 0 &&
          posts.map((post) => <Card post={post} key={post.id} />)}
      </div>
    </div>
  );
}

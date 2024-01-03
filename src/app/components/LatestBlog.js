import Link from 'next/link';
import Image from 'next/image';
import Card from '@/app/components/Card';
import { getPosts } from '@/app/lib/api';
export default async function LatestBlog() {
  const posts = await getPosts(3);

  return (
    <div className='py-8 md:py-16 px-5 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-950'>
      <div className='mx-auto max-w-2xl lg:text-center'>
        <h2 className='text-sm font-bold mb-4 text-sky-700 tracking-wider'>
          BLOG
        </h2>
        <p className='text-3xl font-bold  mb-6 sm:text-4xl'>Latest Updates</p>
        <p className='text-lg leading-8 mb-7 md:mb-12 text-slate-600 dark:text-slate-400'>
          Updates, ideas, and inspiration from our team, community, and
          partners.
        </p>
      </div>
      <div className='mx-auto max-w-[1120px]  grid grid-cols-3 gap-4 md:gap-5'>
        {posts.length > 0 &&
          posts.map((post) => <Card post={post} key={post.id} />)}
      </div>
    </div>
  );
}

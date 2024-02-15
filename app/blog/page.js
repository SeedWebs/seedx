import Card from '../components/Card';
import { getPosts } from '../lib/api';

export default async function Blog() {
  const posts = await getPosts(9);
  return (
    <>
      <main className='lg:pt-[150px pt-[90px] md:pt-[120px]'>
        <div className='mx-auto max-w-4xl px-5'>
          <h1 className='mb-4 text-4xl font-bold'>Blog</h1>

          <div className='prose-lg mb-4 md:mb-8'>
            <p>
              Updates, ideas, and inspiration from our team, community, and
              partners.
            </p>
          </div>
        </div>
        <div className='mx-auto grid  max-w-[1120px] gap-4 md:grid-cols-3 md:gap-5'>
          {posts.length > 0 &&
            posts.map((post) => <Card post={post} key={post.id} />)}
        </div>
      </main>
    </>
  );
}

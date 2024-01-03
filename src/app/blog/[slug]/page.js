import { getPost } from '@/app/lib/api';

export default async function Post({ params }) {
  const post = await getPost(params.slug);
  const page = post[0];
  if (!page) {
    return {
      notFound: true,
    };
  }
  return (
    <main className='pt-[90px] md:pt-[120px] lg:pt-[150px'>
      <div className='mx-auto max-w-4xl px-5'>
        <h1 className='text-4xl font-bold mb-4'>{page.title}</h1>
        <div
          className='prose-lg'
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </div>
    </main>
  );
}

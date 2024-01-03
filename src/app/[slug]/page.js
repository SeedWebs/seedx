import { getPage } from '@/app/lib/api';

export default async function Page({ params }) {
  const page = await getPage(params.slug);
  if (!page) {
    return {
      notFound: true,
    };
  }
  return (
    <main className='md:pt-[120px] pt-[90px] lg:pt-[150px'>
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

import Link from 'next/link';
import Image from 'next/image';
import Date from '@/app/components/Date';
export default function Card({ post }) {
  const asset = process.env.API_DOMAIN + '/assets';
  const url = '/blog/' + post.slug;
  const cover =
    asset + '/' + post.cover.id + '/' + post.cover.filename_download;
  const avatar =
    asset +
    '/' +
    post.author.avatar.id +
    '/' +
    post.author.avatar.filename_download;

  return (
    <article
      className='overflow-hidden rounded-md bg-white shadow-sm dark:bg-slate-800'
      key={post.id}
    >
      <Link href={url}>
        <Image
          src={cover}
          alt={post.cover.title}
          width={360}
          height={189}
          className='aspect-[120/63] object-cover'
        />
      </Link>
      <div className='p-4'>
        <Date datetime={post.publish_date} className='mb-2 block' />
        <h3 className='mb-3 text-xl font-medium'>
          <Link href={url}>{post.title}</Link>
        </h3>
        <div className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
          <Image
            src={avatar}
            alt={post.author.title}
            width={28}
            height={28}
            className='aspect-square rounded-full object-cover'
          />
          <span>{post.author.first_name}</span>
        </div>
      </div>
    </article>
  );
}

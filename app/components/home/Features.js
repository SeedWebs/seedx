import { Fan, Database, Palette, Globe } from 'lucide-react';
export default async function Features() {
  const features = [
    {
      name: 'Next.js Frontend Templates',
      description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
      icon: Fan,
    },
    {
      name: 'Directus Backend Template',
      description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
      icon: Database,
    },
    {
      name: 'Design and Deploy',
      description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
      icon: Palette,
    },
    {
      name: 'Preview and Publish',
      description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
      icon: Globe,
    },
  ];
  return (
    <div className='mb-12 py-4 sm:py-12'>
      <div className='mx-auto max-w-7xl px-5 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='mb-4 text-sm font-bold tracking-wider text-sky-700'>
            FEATURES
          </h2>
          <p className='mb-6 text-3xl  font-bold sm:text-4xl'>
            Seamless Build and Publish
          </p>
          <p className='mb-8 text-lg leading-8 text-slate-600 dark:text-slate-400 md:mb-14'>
            Unlock Your Creativity: Begin with Templates, Seamlessly Connect to
            a Headless CMS, and Effortlessly Update Your Content
          </p>
        </div>
        <div className='mx-auto max-w-2xl lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <div key={feature.name} className='relative pl-16'>
                <dt className='mb-2 text-lg font-medium leading-7 '>
                  <div className='absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-600 to-sky-700'>
                    <feature.icon
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className='text-base leading-7 text-slate-600 dark:text-slate-400'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

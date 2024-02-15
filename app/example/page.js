import DialogDemo from './dialog';
export default function Home() {
  return (
    <>
      <main className='lg:pt-[150px pt-[90px] md:pt-[120px]'>
        <div className='mx-auto max-w-4xl px-5'>
          <h1 className='mb-4 text-4xl font-bold'>Example</h1>
          <div className='prose-lg'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
              nisi, blandit sit amet justo in, euismod viverra augue. Cras et
              libero enim. Nullam tristique at lorem quis pellentesque. Etiam
              imperdiet lacus vehicula ipsum aliquet, eu elementum mauris
              interdum.
            </p>
            <h2>Dialog</h2>
            <DialogDemo />
          </div>
        </div>
      </main>
    </>
  );
}

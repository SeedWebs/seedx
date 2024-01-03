import DialogDemo from '@/app/example/dialog';
export default function Home() {
  return (
    <>
      <main className='pt-[90px] md:pt-[120px] lg:pt-[150px'>
        <div className='mx-auto max-w-4xl px-5'>
          <h1 className='text-4xl font-bold mb-4'>Example</h1>
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

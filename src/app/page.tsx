import Link from 'next/link';

export default function Home() {
  return (
    <section className='min-h-screen flex items-center justify-center bg-gradient-to-b'>
      <div className='max-w-4xl text-center'>
        <h1 className='text-5xl md:text-6xl font-extrabold mb-4'>
          Craig Clayton <span className='wave'>👋</span>
        </h1>
        <p className='text-xl md:text-2xl text-gray-400 mb-8'>
          Front-end developer crafting sleek, accessible, and fast experiences
          with <span className='text-blue-400 font-semibold'>React</span> &{' '}
          <span className='text-blue-400 font-semibold'>Next.js</span>.
        </p>
        <div className='flex justify-center gap-4 flex-wrap'>
          <Link
            href='/about-me'
            className='font-bold  bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition'
          >
            🌟 About Me
          </Link>
          {/* <Link
            href='/projects'
            className='bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl transition'
          >
            🛠️ View Projects
          </Link> */}
          <Link
            href='/contact-me'
            className='font-bold border-2 border-black px-6 py-3 rounded-xl transition dark:border-white'
          >
            📬 Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

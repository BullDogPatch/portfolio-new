const AboutPage = () => {
  return (
    <div className='max-w-3xl mt-10 mx-auto px-6 py-12'>
      <h1 className='text-4xl font-bold text-center mb-6'>About Me</h1>

      <h2 className='text-2xl font-semibold mb-2'>
        Hi, I&apos;m Craig Clayton 👋
      </h2>
      <p className='text-gray-800 leading-relaxed mb-6 dark:text-gray-300'>
        I&apos;m a passionate{' '}
        <span className='font-semibold text-blue-400'>front-end developer</span>{' '}
        who loves crafting sleek, user-friendly web experiences. With a strong
        focus on{' '}
        <span className='font-semibold text-blue-400'>
          React, Next.js, and Tailwind CSS
        </span>
        , I enjoy bringing designs to life and optimizing performance for
        smooth, engaging applications.
      </p>

      <h2 className='text-2xl font-semibold mb-2'>My Developer Journey 🚀</h2>
      <p className='text-gray-800 leading-relaxed mb-6 dark:text-gray-300'>
        My coding journey started three years ago when I began teaching myself
        web development. Recently, I completed an intensive{' '}
        <span className='font-semibold text-blue-400'>
          software development bootcamp
        </span>
        , where I deepened my understanding of front-end technologies and
        backend integrations using{' '}
        <span className='font-semibold text-blue-400'>Supabase</span>. I also
        enjoyed helping fellow students debug their code, reinforcing my love
        for problem-solving and collaboration.
      </p>

      <h2 className='text-2xl font-semibold mb-2'>What I Build 🛠️</h2>

      <div className='bg-gray-800 p-6 rounded-lg shadow-lg mb-6'>
        <h3 className='text-xl font-semibold text-blue-400'>
          🍪 Cookie Clicker Game
        </h3>
        <p className='text-gray-300 mt-2 '>
          A fun, interactive clicker game where users earn cookies and unlock
          upgrades.
        </p>
        <ul className='list-disc list-inside text-gray-400 mt-2'>
          <li>Dynamic animations tied to clicks</li>
          <li>Real-time updates with cookies per second calculation</li>
          <li>Dark mode for a sleek UI</li>
        </ul>
        <div className='mt-3'>
          <a
            href='https://github.com/BullDogPatch/week6-assignment'
            target='_blank'
            className='text-blue-400 hover:underline'
          >
            View on GitHub
          </a>{' '}
          |
          <a
            href='https://week6-assignment-cia0.onrender.com/'
            target='_blank'
            className='text-blue-400 hover:underline ml-2'
          >
            Live Demo
          </a>
        </div>
      </div>

      <div className='bg-gray-800 p-6 rounded-lg shadow-lg'>
        <h3 className='text-xl font-semibold text-blue-400'>
          🎸 Band Review App
        </h3>
        <p className='text-gray-300 mt-2'>
          A platform where users share concert reviews, built with Next.js and
          Supabase.
        </p>
        <ul className='list-disc list-inside text-gray-400 mt-2'>
          <li>User-generated content</li>
          <li>Fast, server-side rendering</li>
          <li>Mobile-friendly design</li>
        </ul>
        <div className='mt-3'>
          <a
            href='https://github.com/BullDogPatch/week7-assignment'
            target='_blank'
            className='text-blue-400 hover:underline'
          >
            View on GitHub
          </a>{' '}
          |
          <a
            href='https://week7-assignment-gj2c.vercel.app'
            target='_blank'
            className='text-blue-400 hover:underline ml-2'
          >
            Live Demo
          </a>
        </div>
      </div>

      <h2 className='text-2xl font-semibold mt-8 mb-2'>
        Fun Facts About Me 🎶
      </h2>
      <ul className='list-disc list-inside text-gray-300 mb-6'>
        <li className='text-gray-800 dark:text-gray-300'>
          I&apos;ve been a huge{' '}
          <span className='font-semibold text-blue-400'>Oasis</span> fan since
          the 1990s (Noel Gallagher is the greatest songwriter ever! 🎸)
        </li>
        <li className='text-gray-800 dark:text-gray-300'>
          I love experimenting with UI animations and making sites feel smooth
          and interactive
        </li>
        <li className='text-gray-800 dark:text-gray-300'>
          Debugging and helping others solve problems is one of my favorite
          parts of coding
        </li>
      </ul>

      <h2 className='text-2xl font-semibold mb-2'>Let&apos;s Connect! 🔗</h2>
      <div className='space-y-2'>
        <p>
          <span className='font-semibold text-gray-400'>GitHub:</span>
          <a
            href='https://www.github.com/BullDogPatch'
            target='_blank'
            className='text-blue-400 hover:underline ml-1'
          >
            github.com/BullDogPatch
          </a>
        </p>
        <p>
          <span className='font-semibold text-gray-400'>LinkedIn:</span>
          <a
            href='https://www.linkedin.com/in/craig-clayton-87a155196/'
            target='_blank'
            className='text-blue-400 hover:underline ml-1'
          >
            https://www.linkedin.com/in/craig-clayton-87a155196/
          </a>
        </p>
        <p>
          <span className='font-semibold text-gray-400'>Email:</span>
          <a
            href='mailto:your.email@example.com'
            className='text-blue-400 hover:underline ml-1'
          >
            craig__clayton@outlook.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

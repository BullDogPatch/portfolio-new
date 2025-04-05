import projects from '@/lib/project-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Passionate front-end developer with a focus on building fast, modern, and accessible web applications.',
};

const AboutPage = () => {
  return (
    <div className='max-w-3xl mt-10 mx-auto px-6 py-12'>
      <h1 className='text-4xl font-bold text-center mb-6'>About Me</h1>

      <h2 className='text-2xl font-semibold mb-2'>
        Hi, I&apos;m Craig Clayton <span className='wave'>👋</span>
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

      <h2 className='text-2xl font-semibold mb-2'>
        My Developer Journey <span className='spin'>🚀</span>
      </h2>
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

      <h2 className='text-2xl font-semibold mb-2'>
        What I Build <span className='wave'>🛠️</span>
      </h2>

      {projects.map((project) => (
        <div
          key={project.title}
          className='mt-6 bg-gray-800 p-6 rounded-lg shadow-lg'
        >
          <h3 className='text-xl font-semibold text-blue-400'>
            {project.title}
          </h3>
          <p className='text-gray-300 mt-2'>{project.description}</p>
          <ul className='list-disc list-inside text-gray-400 mt-2 mb-4'>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          {project.tech.map((t) => (
            <span
              key={t}
              className='m-1 p-1 bg-gray-500 rounded-md text-sm font-bold'
            >
              {t}
            </span>
          ))}
          <div className='mt-3'>
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-400 hover:underline'
            >
              View on GitHub
            </a>{' '}
            |
            <a
              href={project.liveDemo}
              target='_blank'
              className='text-blue-400 hover:underline ml-2'
            >
              Live Demo
            </a>
          </div>
        </div>
      ))}

      <h2 className='text-2xl font-semibold mt-8 mb-2'>
        Fun Facts About Me <span className='inline-block jingle'>🎶</span>
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

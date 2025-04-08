interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  liveDemo: string;
}

export const projects: Project[] = [
  {
    title: '🍪 Cookie Clicker Game (Vanilla JS)',
    description:
      'A fun, interactive clicker game where users earn cookies and unlock upgrades. Built with just vanilla JavaSctipt',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Dynamic animations tied to clicks',
      'Real-time updates with cookies per second calculation',
      'Dark mode for a sleek UI',
    ],
    github: 'https://github.com/BullDogPatch/week3-assignment',
    liveDemo: 'https://bulldogpatch.github.io/week3-assignment//',
  },
  {
    title: '🍪 Cookie Clicker Game (React)',
    description:
      'A fun, interactive clicker game where users earn cookies and unlock upgrades.',
    tech: ['React', 'JavaScript', 'CSS'],
    features: [
      'Dynamic animations tied to clicks',
      'Real-time updates with cookies per second calculation',
      'Dark mode for a sleek UI',
    ],
    github: 'https://github.com/BullDogPatch/week6-assignment',
    liveDemo: 'https://week6-assignment-cia0.onrender.com/',
  },
  {
    title: '🎸 Band Review App',
    description:
      'A platform where users share concert reviews, built with Next.js and Supabase.',
    tech: ['Next.js', 'Supabase', 'Tailwind CSS'],
    features: [
      'User-generated content',
      'Fast, server-side rendering',
      'Mobile-friendly design',
    ],
    github: 'https://github.com/BullDogPatch/week7-assignment',
    liveDemo: 'https://week7-assignment-gj2c.vercel.app',
  },
  {
    title: '🛍️ Product Showcase',
    description:
      'An e-commerce product page built with Next.js and ShadCN, featuring dynamic data fetching and modern UI.',
    tech: ['Next.js', 'ShadCN', 'Tailwind CSS'],
    features: [
      'Dynamic product details',
      'Optimized for performance',
      'Responsive and accessible design',
    ],
    github: 'https://github.com/BullDogPatch/product-shop',
    liveDemo: 'https://product-shop-mu.vercel.app',
  },
  {
    title: '💬 Social App',
    description:
      'A full-stack social networking app built with React, TypeScript, React Router, and Supabase. Features real-time updates and a responsive UI for seamless interaction.',
    tech: ['React', 'TypeScript', 'React Router', 'Supabase'],
    features: [
      'User authentication and profiles',
      'Post creation and real-time comment threads',
      'Dynamic routing and protected routes',
    ],
    github: 'https://github.com/BullDogPatch/social.app',
    liveDemo: 'https://social-app-neon-alpha.vercel.app/',
  },
];

export default projects;

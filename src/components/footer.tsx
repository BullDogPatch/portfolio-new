const Footer = () => {
  return (
    <footer className='text-gray-400 text-center py-6 mt-12'>
      <p className='text-sm'>
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
      <div className='mt-2'>
        <a
          href='https://github.com/BullDogPatch'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-400 hover:underline mx-2'
        >
          GitHub
        </a>
        |
        <a
          href='https://linkedin.com/in/your-profile'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-400 hover:underline mx-2'
        >
          LinkedIn
        </a>
        |
        <a
          href='mailto:your@email.com'
          className='text-blue-400 hover:underline mx-2'
        >
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import ContactForm from '@/components/contact-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me',
  description:
    'Passionate front-end developer with a focus on building fast, modern, and accessible web applications.',
};

const ContactPage = () => {
  return (
    <div className='w-1/2 mx-auto h-[90vh] mt-10 flex justify-center items-center'>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
